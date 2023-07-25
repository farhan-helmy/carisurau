import {Mailer} from "./mailer";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";
import previewEmail from "preview-email";
import {sendApprovalMail} from "./generate-surau-verification";

vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn(() => ({ sendMail: vi.fn() }))
  }
}))

vi.mock('preview-email');

const sendMailMock = vi.fn();
describe('server/services/mailer', () => {
  const env = process.env;

  beforeEach(() => {
    vi.resetModules();
    process.env = { ...env };
  });

  afterEach(() => {
    process.env = env
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'recipient@example.com',
    subject: 'New Surau Added',
    html: `<p>Simple template</p>`
  };

  it('exists', () => {
    expect(Mailer).toBeDefined()
  })

  it('can send email as instance', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    process.env.NODE_ENV = 'test';

    vi.spyOn( nodemailer, 'createTransport' ).mockImplementation(() => ({
      sendMail: sendMailMock,
    } as never));

    const mailer = new Mailer(mailOptions);
    await mailer.send()

    expect(process.env.NODE_ENV).toBe('test');
    expect(sendMailMock).toHaveBeenCalled();
    expect(sendMailMock).toHaveBeenCalledWith(mailOptions);
    expect(previewEmail).not.toHaveBeenCalled()
  })

  it('can send email with preview', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    process.env.NODE_ENV = 'development';

    vi.spyOn( nodemailer, 'createTransport' ).mockImplementation(() => ({
      sendMail: sendMailMock,
    } as never));

    const mailer = new Mailer(mailOptions);
    await mailer.send()

    expect(process.env.NODE_ENV).toBe('development');
    expect(sendMailMock).toHaveBeenCalled();
    expect(sendMailMock).toHaveBeenCalledWith(mailOptions);
    expect(previewEmail).toHaveBeenCalled()
  })
})