// cloudinary function to upload all images from public/assets folder to cloudinary

const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const path = require("path");
require("dotenv").config();

async function uploadAssets() {
  cloudinary.config({
    cloud_name: "aianshu",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  const files = fs.readdirSync(path.join(process.cwd(), "public/assets"));
  files.forEach(async (img) => {
    await cloudinary.uploader
      .upload(
        `./public/assets/${img}`,
        { use_filename: true, unique_filename: false, folder: "assets" },
        function (error, result) {
          console.log(error);
        }
      )
      .catch((e) => {
        console.log(e);
      });
  });
}

uploadAssets();

module.exports = uploadAssets;
