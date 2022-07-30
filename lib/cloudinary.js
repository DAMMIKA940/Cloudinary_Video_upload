const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'prefectcode',
    api_key: '143831775987825',
    api_secret:'y8qB56rFcfWjckhy8kFujqx5KMA',
}
);

module.exports = cloudinary;
