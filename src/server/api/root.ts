import { createTRPCRouter } from "./trpc";
import { surauRouter } from "./routers/surau";
import { rateRouter } from "./routers/rate";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  surau: surauRouter,
  rate: rateRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
