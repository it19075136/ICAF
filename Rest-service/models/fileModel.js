const mongoose = require('mongoose');
const schema = mongoose.Schema;
 
const fileSchema = new schema({
    name: String,
    desc: String,
    file:
    {
        data: Buffer,
        contentType: String
    }
},{
    timestamps: true
});
 
 
module.exports = file = mongoose.model('file', fileSchema);