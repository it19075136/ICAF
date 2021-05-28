const mongosse = require('mongoose');
const schema = mongosse.Schema;

const documentSchema = new schema({
    userId:{
        type:String,
        require:true
    },
    activityId:{
        type:String,
        require:true
    },
    type:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    },
    fileUrl:{
        type:String,
        require:true
    }
})

const document = mongosse.model('document',documentSchema);

module.exports = document;