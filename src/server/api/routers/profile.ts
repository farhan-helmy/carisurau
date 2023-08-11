import { createTRPCRouter, publicProcedure } from "../trpc";

export const profileRouter = createTRPCRouter({
    getInfo: publicProcedure
        .query(async ({ ctx }) => {
            return ctx.prisma.user.findUnique({
                where: {
                    id: ctx.session?.user.id,
                },
                include: {
                    Surau: true,
                    Rating: true,
                },
            });
        }),
});