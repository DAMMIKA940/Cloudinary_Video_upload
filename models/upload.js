
const mongoose =require('mongoose');

const schema = mongoose.Schema;

var uploadSchema = new schema({
    name: String,
    url: String,
    cloudinary_id: String,
    description: String,
})

const upload = mongoose.model('upload', uploadSchema);
module.exports = upload;
