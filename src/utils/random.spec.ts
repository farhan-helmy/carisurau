import {generateRandomName, getRandomWord} from "./random";

describe('utils/random', () => {
  it('can get random word', async () => {
    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        json: () => ["test_word"],
      })
    const data = await getRandomWord()

    expect(data).toBe("test_word")
  })

  it('can generate random name', async () => {
    global.fetch = vi.fn()
      .mockResolvedValueOnce({
        json: () => ["test_word"],
      }).mockResolvedValueOnce({
        json: () => ["second_word"],
      })
    const data = await generateRandomName()

    expect(data).toBe("test_word-second_word")

  })
})