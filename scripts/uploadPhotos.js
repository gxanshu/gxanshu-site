// Required Node.js packages
const fs = require("fs");
const cloudinary = require("cloudinary").v2;
const path = require("path");
require("dotenv").config();

// Function to upload all images from public/assets folder to Cloudinary
async function uploadAssets() {
  // Cloudinary API configuration
  cloudinary.config({
    cloud_name: "aianshu",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  // Get all files in the public/assets folder
  const files = fs.readdirSync(path.join(process.cwd(), "public/assets"));

  // Loop through each file and upload to Cloudinary
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

// Call the uploadAssets function
uploadAssets();

// Export the uploadAssets function
module.exports = uploadAssets;
