import { prisma } from '../src/server/db';
import mallJson from '../prisma/mall.json';

const seedPerakMall = async () => {
  const perakStateRes = await prisma.state.findUnique({
    where: {
      unique_name: 'perak',
    },
  });

  for (const district in mallJson.data.Perak.district) {
    const mall =
      mallJson.data.Perak.district[
        district as keyof typeof mallJson.data.Perak.district
      ];

    await prisma.district
      .findUnique({
        where: {
          unique_name: district.toLocaleLowerCase().replace(/\s/g, '-'),
        },
      })
      .then(async (res) => {
        if (res) {
          for (const mallName of mall.mall) {
            await prisma.mall.create({
              data: {
                name: mallName,
                label: mallName,
                value: mallName.toLocaleLowerCase().replace(' ', '-'),
                district: {
                  connect: {
                    id: res.id,
                  },
                },
                state: {
                  connect: {
                    id: perakStateRes?.id,
                  },
                },
              },
            });
          }
        }
      });
  }
};

void seedPerakMall();
