const mongosse = require('mongoose');
const Schema = mongosse.Schema;

const documentSchema = new Schema({
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

module.exports =document= mongosse.model('document',documentSchema);