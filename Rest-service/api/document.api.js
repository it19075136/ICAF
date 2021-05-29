const Document = require('../models/documentModel')
// const document = require('../models/documentModel')

function addDocument(payload){
    return new Promise((resolve,reject)=>{
        const document = new Document(payload);
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
            (payload.fileUrl?(document.fileUrl = payload.fileUrl ):null)
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

module.exports={addDocument,updateDocument,deleteDocument,getDoucmentByUserId}

