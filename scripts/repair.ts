import { prisma } from '../src/server/db';

const repairMallUniqueName = async () => {
  const mall = await prisma.mall.findMany();
  for (const m of mall) {
    const uniqueName = m.name.toLocaleLowerCase().replace(/[\s,]+/g, '-');
    await prisma.mall.update({
      where: {
        id: m.id,
      },
      data: {
        value: uniqueName,
      },
    });
  }
};

const repairDistrictUniqueName = async () => {
  const district = await prisma.district.findMany();
  for (const d of district) {
    const uniqueName = d.name.toLocaleLowerCase().replace(/[\s,]+/g, '-');
    await prisma.district.update({
      where: {
        id: d.id,
      },
      data: {
        unique_name: uniqueName,
      },
    });
  }
};

void repairMallUniqueName();
void repairDistrictUniqueName();
