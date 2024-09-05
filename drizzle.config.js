/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://ai-interview-mocker_owner:mtKJ04aByFeT@ep-shy-mode-a5zy8vsq.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
  };