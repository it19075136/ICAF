const document = require('../models/documentModel')

function addDocument(payload){
    return new Promise((resolve,reject)=>{
        const document = new document(payload);
        document.save().then((document)=>{
            resolve(document);
        }).catch((err)=>{
            reject(err)
        })
    })
}

// function updateDocument(payload)

module.exports={addDocument}

