import { createTRPCRouter } from "./trpc";
import { surauRouter } from "./routers/surau";
import { rateRouter } from "./routers/rate";
import { profileRouter } from "./routers/profile";
import { uploaderRouter } from "./routers/uploader";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  surau: surauRouter,
  rate: rateRouter,
  profile: profileRouter,
  uploader: uploaderRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
