/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import nodemailer from 'nodemailer';
import { Buffer } from 'buffer';
import {prisma} from '../../server/db';

export async function sendApprovalMail(surauId: string): Promise<void> {
    const surau = await prisma.surau.findFirstOrThrow({
        where: {
          id: surauId,
        },
        include: {
          state: true,
          district: true,
          mall: true,
          images: true,
          qiblat: true,
        },
    });

    const decodedSurauId = Buffer.from(surauId).toString('base64');

    const endpoint = `${process.env.APPLICATION_URL}magic-link/approve?token=${decodedSurauId}`

    const transport = nodemailer.createTransport({
        host: process.env.MAIL_HOST,
        port: process.env.MAIL_PORT,
        auth: {
          user: process.env.MAIL_USERNAME,
          pass: process.env.MAIL_PASSWORD,
        }      
    } as nodemailer.TransportOptions );
    
    const emailContent = `<p> Surau: ${surau.name}</p>` +
    `<p> Qibla Certified: ${surau.is_qiblat_certified ? 'Yes' : 'No'}</p>` +
    `<p> State: ${surau.state.name}</p>` +
    `<p> District: ${surau.district.name}</p>` +
    `<p> Mall: ${surau.mall ? surau.mall?.name : 'Not In Mall'}</p>` +
    `<p> Direction: ${surau.brief_direction}</p>` +
    `<p><img src="${surau.images[0]?.file_path}" alt="Surau Image"></p>` +
    `<a href="${endpoint}">Verify Me</a>`;

    const mailOptions = {
        from: 'your-email@gmail.com', 
        to: 'recipient@example.com',
        subject: 'New Surau Added',
        html: emailContent
    };

    try {
      await transport.sendMail(mailOptions);
    }catch(err) {
      console.error(err);
    }
}