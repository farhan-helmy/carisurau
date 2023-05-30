import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const surauRouter = createTRPCRouter({
    addSurau: publicProcedure
        .input(z.object({
            name: z.string(), unique_name: z.string(), brief_direction: z.string(), state_id: z.string(), district_id: z.string(), mall_id: z.string().optional(), image: z.array(
                z.object({
                    file_path: z.string()
                })
            ), 
            is_qiblat_certified: z.boolean().default(false),
            qiblat: z.object({
                latitude: z.number(),
                longitude: z.number(),
                degree: z.number(),
            })
        }))
        .mutation(async ({ ctx, input }) => {
            if (input.mall_id){
                return await ctx.prisma.surau.create({
                    data: {
                        name: input.name,
                        brief_direction: input.brief_direction,
                        unique_name: input.unique_name,
                        is_qiblat_certified: input.is_qiblat_certified,
                        images: {
                            createMany: {
                                data: input.image.map((image) => ({
                                    file_path: image.file_path,
                                })),
                            },
                        },
                        state: {
                            connect: {
                                id: input.state_id
                            }
                        },
                        district: {
                            connect: {
                                id: input.district_id
                            }
                        },
                        mall: {
                            connect: {
                                id: input.mall_id
                            }
                        },
                        qiblat: {
                            create: {
                                latitude: input.qiblat.latitude,
                                longitude: input.qiblat.longitude,
                                degree: input.qiblat.degree
                            }
                        },
                    }
                })
            }
            return await ctx.prisma.surau.create({
                data: {
                    name: input.name,
                    brief_direction: input.brief_direction,
                    unique_name: input.unique_name,
                    is_qiblat_certified: input.is_qiblat_certified,
                    images: {
                        createMany: {
                            data: input.image.map((image) => ({
                                file_path: image.file_path,
                            })),
                        },
                    },
                    state: {
                        connect: {
                            id: input.state_id
                        }
                    },
                    district: {
                        connect: {
                            id: input.district_id
                        }
                    },
                    qiblat: {
                        create: {
                            latitude: input.qiblat.latitude,
                            longitude: input.qiblat.longitude,
                            degree: input.qiblat.degree
                        }
                    }
                }
            })
        }),
    getSurau: publicProcedure
        .input(z.object({ unique_name: z.string() }))
        .query(async ({ ctx, input }) => {
            return await ctx.prisma.surau.findUnique({
                where: {
                    unique_name: input.unique_name
                },
                include: {
                    state: true,
                    district: true,
                    mall: true,
                    images: true,
                    qiblat: true
                }
            })
        }
        ),
      })
    )
    .mutation(async ({ ctx, input }) => {
      if (input.mall_id) {
        return await ctx.prisma.surau.create({
          data: {
            name: input.name,
            brief_direction: input.brief_direction,
            unique_name: input.unique_name,
            images: {
              createMany: {
                data: input.image.map((image) => ({
                  file_path: image.file_path,
                })),
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
      }
      return await ctx.prisma.surau.create({
        data: {
          name: input.name,
          brief_direction: input.brief_direction,
          unique_name: input.unique_name,
          images: {
            createMany: {
              data: input.image.map((image) => ({
                file_path: image.file_path,
              })),
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
        },
      });
    }),
    getDistrictOnState: publicProcedure
        .input(z.object({ id: z.string() }))
        .query(async ({ ctx, input }) => {
            return await ctx.prisma.district.findMany({
                where: {
                    state: {
                        id: input.id
                    }
                }
            })
        }
        ),
    getMallOnDistrict: publicProcedure
        .input(z.object({ district_id: z.string(), state_id: z.string() }))
        .query(async ({ ctx, input }) => {
            const stateUniqueName = await ctx.prisma.state.findUnique({
                where: {
                    id: input.state_id
                }
            })
            if (stateUniqueName?.unique_name === "kuala-lumpur" || stateUniqueName?.unique_name === "putrajaya" || stateUniqueName?.unique_name === "labuan") {
                return await ctx.prisma.mall.findMany({
                    where: {
                        state: {
                            id: input.state_id
                        }
                    }
                })
            }
            return await ctx.prisma.mall.findMany({
                where: {
                    district: {
                        id: input.district_id
                    }
                }
            })
        }
        ),
    searchSurau: publicProcedure
        .input(z.object({ name: z.string() }))
        .query(async ({ ctx, input }) => {
            return await ctx.prisma.surau.findMany({
                where: {
                    unique_name: {
                        contains: input.name
                    }
                },
                include: {
                    state: true,
                    district: true,
                    mall: true,
                    images: true,
                    qiblat: true
                }
            })
        }
        ),
    getPendingApproval: publicProcedure.query(async ({ ctx }) => {
        return await ctx.prisma.surau.findMany({
            where: {
                is_approved: false
            },
            include: {
                state: true,
                district: true,
                mall: true,
                images: true,
                qiblat: true
            },
            orderBy: {
                created_at: "desc"
            }
        })
    })
})