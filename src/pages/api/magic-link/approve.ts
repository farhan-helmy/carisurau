import type { NextApiRequest, NextApiResponse } from 'next';
import {prisma} from '../../../server/db';
import { Buffer } from 'buffer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { token } = req.query;
  const surauId = Buffer.from(token as string,'base64').toString('utf-8');

  const surau = await prisma.surau.findFirstOrThrow({
    where: {
        id: surauId,
      },
  });

  await prisma.surau.update({
    where: { id: surau.id },
    data: { 
        is_approved : true
    }
  })

  return res.redirect(302, '/')
}