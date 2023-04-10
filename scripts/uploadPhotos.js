// Importing necessary modules
const fs = require("fs");
const cloudinary = require("cloudinary").v2; // for uploading files to cloudinary
const path = require("path");
require("dotenv").config();

// Function to upload all images from public/assets folder to Cloudinary
async function uploadAssets() {
  // Configure Cloudinary with API credentials
  cloudinary.config({
    cloud_name: "aianshu",
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });

  // Read all files from public/assets folder
  const files = fs.readdirSync(path.join(process.cwd(), "public/assets"));

  // Upload each file to Cloudinary
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

// Export the function for reuse in other modules
module.exports = uploadAssets;
