/** server/uploadthing.ts */
import { createUploadthing, type FileRouter } from "uploadthing/next-legacy";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB", maxFileCount: 10 } })
    // eslint-disable-next-line @typescript-eslint/require-await
    .onUploadComplete(async ({ file }) => {
      // This code RUNS ON YOUR SERVER after upload

      console.log("file url", file.url);
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
