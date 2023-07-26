import type {Transporter} from "nodemailer";
import nodemailer from "nodemailer";
import previewEmail from "preview-email";
import type Mail from "nodemailer/lib/mailer";

export class Mailer {
  transport: Transporter;

  constructor(private options: Mail.Options) {
    this.transport = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      }
    } as nodemailer.TransportOptions );
    return this
  }

  async send() {
    const { NODE_ENV } = process.env;

    try {
      if (NODE_ENV === 'development') {
        await previewEmail(this.options, {
          openSimulator: false,
        })
      }
      await this.transport.sendMail(this.options);
    } catch (e) {
      console.error(e);
    }
  }

  static async send(options: Mail.Options) {
    const instance = new this(options);
    await instance.send()
  }
}