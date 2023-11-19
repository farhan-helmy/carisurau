import {withSentryConfig} from "@sentry/nextjs";
// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true,
  output: "standalone",
  async rewrites() {
    return [
      {
        source: "/api/image_upload",
        destination: "https://a143f4w2r9.execute-api.ap-southeast-1.amazonaws.com/carisurau-prod/image-upload",
      },
    ];
  },
  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.dicebear.com",
      },
    ],
    domains: [
      "dcm2976bhgfsz.cloudfront.net",
      "ratemysurau.s3.ap-southeast-1.amazonaws.com",
      "carisurau-staging.s3.ap-southeast-1.amazonaws.com",
      "carisurau-prod.s3.ap-southeast-1.amazonaws.com",
      "carisuraustagingbucket.s3.ap-southeast-1.amazonaws.com",
      "lh3.googleusercontent.com",
      "uploadthing.com"
    ],
    dangerouslyAllowSVG: true,
  },
  experimental: {
    esmExternals: false,
  }
};
export default withSentryConfig(config, {
// For all available options, see:
// https://github.com/getsentry/sentry-webpack-plugin#options

// Suppresses source map uploading logs during build
silent: true,
org: "helmytech",
project: "carisurau",
}, {
// For all available options, see:
// https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

// Upload a larger set of source maps for prettier stack traces (increases build time)
widenClientFileUpload: true,

// Transpiles SDK to be compatible with IE11 (increases bundle size)
transpileClientSDK: true,

// Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
tunnelRoute: "/monitoring",

// Hides source maps from generated client bundles
hideSourceMaps: true,

// Automatically tree-shake Sentry logger statements to reduce bundle size
disableLogger: true,
});