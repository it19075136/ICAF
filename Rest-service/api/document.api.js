const Document = require('../models/documentModel');

function addDocument(payload,file){
    return new Promise((resolve,reject)=>{
        const document = new Document({userId:payload.userId,activityId:payload.activityId,type:payload.type,status:payload.status,file:file.originalname});
        Document.findOne({userId:payload.userId,activityId:payload.activityId,type:payload.type}).then((res)=>{
            // reject('err')
            res ? (resolve('error')):(document.save().then((document)=>{
                resolve(document);
            }).catch((err)=>{
                reject(err)
            }))
        }).catch((err)=>{
            reject(err)
        })
    })
}

function updateDocument(payload,id){
    return new Promise((resolve,reject)=>{
        Document.findByIdAndUpdate(id).then((document)=>{
            (payload.userId ?( document.userId = payload.userId):null),
            (payload.activityId ?(document.activityId = payload.activityId):null),
            (payload.type ? (document.type = payload.type):null),
            (payload.status ?(document.status = payload.status):null),
            (payload.file?(document.file = payload.file.originalname ):null)
            document.save().then((doc)=>resolve(doc)).catch((err)=>reject(err))
        }).catch(err=>{
            reject(err)
        })
        })
}

function deleteDocument(id){
    return new Promise((resolve,reject)=>{
        Document.findByIdAndDelete(id).then((docu)=>{
            resolve(docu)
        }).catch((err)=>{
            reject(err)
        })
    })
}

function getDoucmentByUserId(id){
    return new Promise((resolve,reject)=>{
        Document.find({userId:id}).then(documents=>{
            resolve(documents)
        }).catch(err=>{
            reject(err)
        })
    })
}

// function uploadFile(payload){

//     let obj = {
//         name: payload.name,
//         desc: payload.desc,
//         file: {
//             data: payload.data,
//             contentType: payload.contentType
//         }
//     }
//     return new Promise((resolve,reject) => {
//         File.create(obj, (err, item) => {
//         if (err) {
//             resolve(err);
//         }
//         else {
//             // item.save();
//             resolve(item)
//         }
//     });
// })
// }

module.exports={addDocument,updateDocument,deleteDocument,getDoucmentByUserId}

