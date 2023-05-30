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
  getRating: publicProcedure
    .input(
      z.object({
        surau_id: z.string(),
      })
    )
    .query(async ({ ctx, input }) => {
      const ratings = await ctx.prisma.rating.findMany({
        where: {
          surau_id: input.surau_id,
        },
      });
      const totalRating = ratings.reduce((acc, curr) => acc + curr.rating, 0);

      const averageRating = totalRating / ratings.length;

      // round off to 0 decimal place

      const averageRatingRounded = Math.round(averageRating);

      const counts: { [key: number]: number } = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
      };
    
      // Count the occurrences for each star rating
      ratings.forEach((rating) => {
        counts[rating.rating] += 1;
      });

      const formattedCounts = Object.keys(counts).map((key) => ({
        rating: Number(key),
        count: counts[Number(key)] ?? 0,
      }));

      return {
        averageRatingRounded,
        ratings,
        formattedCounts,
        totalRating
      };
    }),
});
