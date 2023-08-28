/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "../trpc";
import { utapi } from "uploadthing/server";
import { env } from "../../../env.mjs"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const uploaderRouter = createTRPCRouter({
  deleteFile: publicProcedure.input(z.string()).mutation(async ({ input }) => {
    await utapi.deleteFiles(input);
    return true;
  }),
  uploadFile: publicProcedure
    .input(
      z.array(
        z.object({
          file: z.any(),
          filteredName: z.string(),
        })
      )
    )
    .mutation(async ({ input }) => {
      const fileList = [];
      const client = new S3Client({
        region: "ap-southeast-1",
        credentials: {
          accessKeyId: env.S3_UPLOAD_KEY,
          secretAccessKey: env.S3_UPLOAD_SECRET,
        },
      });
      try {
        for (const file of input) {
          console.log(file.file);
          const command = new PutObjectCommand({
            Bucket: "carisuraustagingbucket",
            Key: file.filteredName,
            Body: file.file,
          });

          await client.send(command);
          fileList.push({
            fileUrl: `${env.S3_URL}/${file.filteredName}`,
            fileKey: file.filteredName,
          });
        }
        return fileList;
      } catch (e) {
        console.log(e);
        return e;
      }

    }),
});
