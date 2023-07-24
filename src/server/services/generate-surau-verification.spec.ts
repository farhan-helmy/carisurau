import {sendApprovalMail} from "./generate-surau-verification";
import {prisma} from "../db";
import type {SurauFixtureType} from "../../../tests/fixtures/surau.fixture";
import {surauFixture} from "../../../tests/fixtures/surau.fixture";
import {Buffer} from 'buffer';
import type {Transporter} from "nodemailer";
import nodemailer, {createTransport} from "nodemailer";

vi.mock('../../server/db', () => ({
  prisma: {
    surau: {
      findFirstOrThrow: vi.fn((): SurauFixtureType => surauFixture)
    }
  }
}))

vi.mock('buffer', () => ({
  Buffer: {
    from: vi.fn(() => "buffer"),
  }
}))


// const mocks = vi.hoisted(() => ({
//   sendMail: vi.fn(),
// }))
//
vi.mock('nodemailer', () => ({
  default: {
    createTransport: vi.fn(() => ({ sendMail: vi.fn() }))
  }
}))

describe('generate-surau-verification', () => {
  const surauId = 'surau_id';
  const sendMailMock = vi.fn();

  it('exists', () => {
    expect(sendApprovalMail).toBeDefined()
  })

  it('finds record', async () => {
    await sendApprovalMail(surauId)

    expect(prisma.surau.findFirstOrThrow).toBeCalledWith({
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
    })
    expect(Buffer.from).toHaveBeenCalled()
  })

  it('can send email', async () => {
    vi.spyOn( nodemailer, 'createTransport' ).mockImplementation(() => ({
      sendMail: sendMailMock,
    } as never));

    await sendApprovalMail(surauId)

    expect(nodemailer.createTransport).toBeCalledWith({
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      }
    })
    expect(sendMailMock).toHaveBeenCalledTimes(1)

  })
})