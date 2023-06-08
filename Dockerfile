FROM node:18-alpine3.17 AS deps
RUN apk add --no-cache libc6-compat openssl1.1-compat
WORKDIR /app

# Install Prisma Client - remove if not using Prisma

COPY prisma ./

COPY package.json yarn.lock*\* ./

RUN yarn --frozen-lockfile
RUN npx browserslist@latest --update-db


##### BUILDER

FROM node:18-alpine3.17 AS builder
ARG DATABASE_URL
ARG NEXTAUTH_SECRET
ARG NEXTAUTH_URL
ARG S3_UPLOAD_KEY
ARG S3_UPLOAD_SECRET
ARG S3_UPLOAD_BUCKET
ARG S3_UPLOAD_REGION
ARG NEXT_PUBLIC_CLOUDFRONT_URL
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ENV NEXT_TELEMETRY_DISABLED 1

RUN SKIP_ENV_VALIDATION=1 yarn build
 
##### RUNNER

FROM node:18-alpine3.17 AS runner
WORKDIR /app

ENV NODE_ENV production

# ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000
ENV PORT 3000

CMD ["node", "server.js"]