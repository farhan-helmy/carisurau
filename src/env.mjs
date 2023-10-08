/* eslint-disable @typescript-eslint/ban-ts-comment */
import { z } from "zod";

/**
 * Specify your server-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 */
const server = z.object({
  DATABASE_URL: z.string(),
  NODE_ENV: z.enum(["development", "test", "production"]),
  NEXTAUTH_SECRET:
    process.env.NODE_ENV === "production"
      ? z.string().min(1)
      : z.string().min(1).optional(),
  NEXTAUTH_URL: z.preprocess(
    // This makes Vercel deployments not fail if you don't set NEXTAUTH_URL
    // Since NextAuth.js automatically uses the VERCEL_URL if present.
    (str) => process.env.VERCEL_URL ?? str,
    // VERCEL_URL doesn't include `https` so it cant be validated as a URL
    process.env.VERCEL ? z.string().min(1) : z.string()
  ),
  // Add `.min(1) on ID and SECRET if you want to make sure they're not empty
  // DISCORD_CLIENT_ID: z.string(),
  // DISCORD_CLIENT_SECRET: z.string(), 
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

/**
 * Specify your client-side environment variables schema here.
 * This way you can ensure the app isn't built with invalid env vars.
 * To expose them to the client, prefix them with `NEXT_PUBLIC_`.
 */
const client = z.object({
  // NEXT_PUBLIC_CLIENTVAR: z.string().min(1),
  // NEXT_PUBLIC_CLOUDFRONT_URL: z.string().url(),
  NEXT_PUBLIC_S3_UPLOAD_USERNAME: z.string().min(1),
  NEXT_PUBLIC_S3_UPLOAD_PASSWORD: z.string().min(1),
  NEXT_PUBLIC_MAPBOX_TOKEN: z.string().min(1),
});

/**
 * You can't destruct `process.env` as a regular object in the Next.js
 * edge runtimes (e.g. middlewares) or client-side so we need to destruct manually.
 * @type {Record<keyof z.infer<typeof server> | keyof z.infer<typeof client>, string | undefined>}
 */
const processEnv = {
  DATABASE_URL: process.env.DATABASE_URL,
  NODE_ENV: process.env.NODE_ENV,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
  NEXTAUTH_URL: process.env.NEXTAUTH_URL,
  // DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
  // DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
  // NEXT_PUBLIC_CLOUDFRONT_URL: process.env.NEXT_PUBLIC_CLOUDFRONT_URL,
  // MAIL_HOST: process.env.MAIL_HOST,
  // MAIL_PORT: process.env.MAIL_PORT,
  // MAIL_USERNAME: process.env.MAIL_USERNAME,
  // MAIL_PASSWORD: process.env.MAIL_PASSWORD,
  // APPLICATION_URL: process.env.APPLICATION_URL,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  // NEXT_PUBLIC_CLIENTVAR: process.env.NEXT_PUBLIC_CLIENTVAR,
  NEXT_PUBLIC_S3_UPLOAD_USERNAME: process.env.NEXT_PUBLIC_S3_UPLOAD_USERNAME,
  NEXT_PUBLIC_S3_UPLOAD_PASSWORD: process.env.NEXT_PUBLIC_S3_UPLOAD_PASSWORD,
  NEXT_PUBLIC_MAPBOX_TOKEN: process.env.NEXT_PUBLIC_MAPBOX_TOKEN
};

// Don't touch the part below
// --------------------------

const merged = server.merge(client);
/** @type z.infer<merged>
 *  @ts-ignore - can't type this properly in jsdoc */
let env = process.env;

if (!!process.env.SKIP_ENV_VALIDATION == false) {
  const isServer = typeof window === "undefined";

  const parsed = isServer
    ? merged.safeParse(processEnv) // on server we can validate all env vars
    : client.safeParse(processEnv); // on client we can only validate the ones that are exposed

  if (parsed.success === false) {
    console.error(
      "❌ Invalid environment variables:",
      parsed.error.flatten().fieldErrors
    );
    throw new Error("Invalid environment variables");
  }

  /** @type z.infer<merged>
   *  @ts-ignore - can't type this properly in jsdoc */
  env = new Proxy(parsed.data, {
    get(target, prop) {
      if (typeof prop !== "string") return undefined;
      // Throw a descriptive error if a server-side env var is accessed on the client
      // Otherwise it would just be returning `undefined` and be annoying to debug
      if (!isServer && !prop.startsWith("NEXT_PUBLIC_"))
        throw new Error(
          process.env.NODE_ENV === "production"
            ? "❌ Attempted to access a server-side environment variable on the client"
            : `❌ Attempted to access server-side environment variable '${prop}' on the client`
        );
      /*  @ts-ignore - can't type this properly in jsdoc */
      return target[prop];
    },
  });
}

export { env };
