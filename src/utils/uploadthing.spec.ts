import {UploadButton, UploadDropzone, Uploader} from "./uploadthing";

vi.mock('@uploadthing/react', () => ({
  generateComponents: vi.fn(() => ({
    UploadButton: vi.fn(),
    UploadDropzone: vi.fn(),
    Uploader: vi.fn(),
  }))
}))
describe('utils/uploadthing', () => {

  it('register UploadButton', () => {
    expect(UploadButton).toBeDefined()
  })

  it('register UploadDropzone', () => {
    expect(UploadDropzone).toBeDefined()
  })

  it('register Uploader', () => {
    expect(Uploader).toBeDefined()
  })
})