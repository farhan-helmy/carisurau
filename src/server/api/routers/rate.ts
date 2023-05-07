import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const rateRouter = createTRPCRouter({
  addRating: publicProcedure
    .input(
      z.object({
        surau_id: z.string(),
        rating: z.number(),
        review: z.string().optional(),
        image: z.array(
          z.object({
            file_path: z.string(),
          })
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (input.image?.length > 0) {
        return await ctx.prisma.rating.create({
          data: {
            surau: {
              connect: {
                id: input.surau_id,
              },
            },
            images: {
              createMany: {
                data: input.image?.map((image) => ({
                  file_path: image.file_path,
                  surau_id: input.surau_id,
                })),
              },
            },
            rating: input.rating,
            review: input.review,
          },
        });
      }
      return await ctx.prisma.rating.create({
        data: {
          surau: {
            connect: {
              id: input.surau_id,
            },
          },
          rating: input.rating,
          review: input.review,
        },
      });
    }),
});
