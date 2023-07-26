import {sendApprovalMail} from "./generate-surau-verification";
import {prisma} from "../db";
import type {SurauFixtureType} from "../../../tests/fixtures/surau.fixture";
import {surauFixture} from "../../../tests/fixtures/surau.fixture";
import {Buffer} from 'buffer';
import {Mailer} from "./mailer";

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

vi.mock('./mailer')

describe('generate-surau-verification', () => {
  const surauId = 'surau_id';

  afterEach(() => {
    vi.clearAllMocks();
  })

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
    expect(Mailer.send).toHaveBeenCalledTimes(1)
  })

  it('can send email', async () => {
    await sendApprovalMail(surauId)

    expect(Mailer.send).toHaveBeenCalledTimes(1)
  })
})