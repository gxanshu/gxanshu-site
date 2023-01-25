/*
-> only able to run by admins
-> code to generate and upload meta data to algolia && upload photos on cloudinary
-> task run before the astro build starts
*/

const uploadAssets = require("./uploadPhotos.js");
const getSearchMeta = require("./generateMeta.js");

uploadAssets();
getSearchMeta();