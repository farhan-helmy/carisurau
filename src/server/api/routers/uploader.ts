import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { utapi } from "uploadthing/server";

export const uploaderRouter = createTRPCRouter({
  deleteFile: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    await utapi.deleteFiles(input);
    return true;
  }),
});
