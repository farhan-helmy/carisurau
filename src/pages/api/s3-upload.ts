import { env } from "../../env.mjs"
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

export const s3UploadHandler = async (files: File[]) => {
  const fileList = [];
  const client = new S3Client({
    region: "ap-southeast-1",
    credentials: {
      accessKeyId: env.S3_UPLOAD_KEY,
      secretAccessKey: env.S3_UPLOAD_SECRET,
    },
  });
  try {
    for (const file of files) {
      const filteredName = file.name.replace(/[^a-zA-Z0-9.]/g, "");
      const command = new PutObjectCommand({
        Bucket: "carisuraustagingbucket",
        Key: filteredName,
        Body: file,
      });

      await client.send(command);
      fileList.push({
        fileUrl: `${env.S3_URL}/${filteredName}`,
        fileKey: filteredName,
      });
    }
    return fileList;
  } catch (e) {
    console.log(e);
    return e;
  }
};
