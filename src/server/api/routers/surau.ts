import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const surauRouter = createTRPCRouter({
    getState: publicProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.state.findMany({
            include: {
                districts: true
            }
        })
    }),
    getDistrictOnState: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
        return await ctx.prisma.district.findMany({
            where: {
                state: {
                    unique_name: input.name
                }
            }
        })
    }
    ),
})