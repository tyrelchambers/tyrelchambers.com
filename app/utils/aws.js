const aws = require("aws-sdk");

require("dotenv").config();

aws.config.update({
  secretAccessKey: process.env.AWS_SECRET_KEY,
  accessKeyId: process.env.AWS_ACCESS_KEY,
  region: process.env.AWS_REGION,
  bucket: process.env.AWS_BUCKET,
});

const s3 = new aws.S3();

export const uploadToS3 = (data) => {
  console.log(data);
  return new Promise((resolve, reject) => {
    const params = {
      Bucket: process.env.AWS_BUCKET,
      Key: "posts/" + data.key,
      Body: data.body,
    };
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

export const getPostsFromS3 = async () => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    Prefix: "posts/",
  };

  const { Contents } = await s3.listObjectsV2(params).promise();

  const posts = [];

  for (let index = 0; index < Contents.length; index++) {
    const element = Contents[index];
    if (element.Size !== 0) {
      const post = await s3
        .getObject({
          Bucket: process.env.AWS_BUCKET,
          Key: element.Key,
        })
        .promise();

      posts.push(JSON.stringify(post.Body.toString()));
    }
  }

  return posts;
};
