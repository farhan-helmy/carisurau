import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";
import type { SurauTableColumn } from "./types";
import { sendApprovalMail } from "../../services/generate-surau-verification";
import type { Surau } from "../../../../prisma/client";

export const surauRouter = createTRPCRouter({
  addSurau: publicProcedure
    .input(
      z.object({
        name: z.string(),
        unique_name: z.string(),
        brief_direction: z.string(),
        state_id: z.string(),
        district_id: z.string(),
        mall_id: z.string().optional(),
        image: z.array(
          z.object({
            file_path: z.string(),
          })
        ),
        is_qiblat_certified: z.boolean().default(false),
        qiblat: z.object({
          latitude: z.number(),
          longitude: z.number(),
          degree: z.number(),
        }),
        is_solat_jumaat: z.boolean().default(false),
      })
    )
    .mutation(async ({ ctx, input }) => {
      let surau: Surau;

      const data = {
        name: input.name,
        brief_direction: input.brief_direction,
        unique_name: input.unique_name,
        is_qiblat_certified: input.is_qiblat_certified,
        is_solat_jumaat: input.is_solat_jumaat,
        images: {
          createMany: {
            data: input.image.map((image) => ({
              file_path: image.file_path,
            })),
          },
        },
        user: {
          connect: {
            id: ctx.session?.user.id,
          },
        },
        state: {
          connect: {
            id: input.state_id,
          },
        },
        district: {
          connect: {
            id: input.district_id,
          },
        },
        qiblat: {
          create: {
            latitude: input.qiblat.latitude,
            longitude: input.qiblat.longitude,
            degree: input.qiblat.degree,
          },
        },
      };

      if (input.mall_id) {
        surau = await ctx.prisma.surau.create({
          data: {
            name: input.name,
            brief_direction: input.brief_direction,
            unique_name: input.unique_name,
            is_qiblat_certified: input.is_qiblat_certified,
            is_solat_jumaat: input.is_solat_jumaat,
            images: {
              createMany: {
                data: input.image.map((image) => ({
                  file_path: image.file_path,
                })),
              },
            },
            user: {
              connect: {
                id: ctx.session?.user.id,
              },
            },
            state: {
              connect: {
                id: input.state_id,
              },
            },
            district: {
              connect: {
                id: input.district_id,
              },
            },
            mall: {
              connect: {
                id: input.mall_id,
              },
            },
          },
        });
      } else {
        surau = await ctx.prisma.surau.create({
          data: data,
        });
      }

      await sendApprovalMail(surau.id);

      return surau;
    }),
  getSurau: publicProcedure
    .input(z.object({ unique_name: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.surau.findUnique({
        where: {
          unique_name: input.unique_name,
        },
        include: {
          state: true,
          district: true,
          mall: true,
          images: true,
          qiblat: true,
        },
      });
    }),
  getAllSurau: publicProcedure.query(async ({ ctx }) => {
    const surau = await ctx.prisma.surau.findMany({
      include: {
        state: true,
        district: true,
        mall: true,
        images: true,
        qiblat: true,
      },
    });

    const data: SurauTableColumn[] = [];

    surau.forEach((surau) => {
      data.push({
        id: surau.id,
        name: surau.name,
        unique_name: surau.unique_name,
        is_approved: surau.is_approved,
        is_approved_at: surau.is_approved_at,
        created_at: surau.created_at,
        state: surau.state.name,
        district: surau.district.name,
      });
    });

    return data;
  }),
  getState: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.state.findMany({
      include: {
        districts: true,
      },
    });
  }),
  getDistrictOnState: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.district.findMany({
        where: {
          state: {
            id: input.id,
          },
        },
      });
    }),
  getMallOnDistrict: publicProcedure
    .input(z.object({ district_id: z.string(), state_id: z.string() }))
    .query(async ({ ctx, input }) => {
      const stateUniqueName = await ctx.prisma.state.findUnique({
        where: {
          id: input.state_id,
        },
      });
      if (
        stateUniqueName?.unique_name === "kuala-lumpur" ||
        stateUniqueName?.unique_name === "putrajaya" ||
        stateUniqueName?.unique_name === "labuan"
      ) {
        return ctx.prisma.mall.findMany({
          where: {
            state: {
              id: input.state_id,
            },
          },
        });
      }
      return ctx.prisma.mall.findMany({
        where: {
          district: {
            id: input.district_id,
          },
        },
      });
    }),
  searchSurau: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ ctx, input }) => {
      return ctx.prisma.surau.findMany({
        where: {
          unique_name: {
            contains: input.name,
          },
          is_approved: true,
        },
        include: {
          state: true,
          district: true,
          mall: true,
          images: true,
          qiblat: true,
        },
      });
    }),
  getPendingApproval: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.surau.findMany({
      where: {
        is_approved: false,
      },
      include: {
        state: true,
        district: true,
        mall: true,
        images: true,
        qiblat: true,
      },
      orderBy: {
        created_at: "desc",
      },
      take: 1,
    });
  }),
  getLatestAddedSurau: publicProcedure.query(async ({ ctx }) => {
    return ctx.prisma.surau.findMany({
      where: {
        is_approved: true,
      },
      orderBy: {
        created_at: "desc",
      },
      include: {
        state: true,
        district: true,
        mall: true,
        images: true,
      },
      take: 5,
    });
  }),
});
