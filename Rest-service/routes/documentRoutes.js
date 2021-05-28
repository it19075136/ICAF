const router = require('express').Router();
const {addDocument,updateDocument,deleteDocument}=require('../api/document.api')

router.post('/',(req,res)=>{
    addDocument(req.body).then((newDoc)=>{
        res.json(newDoc);
    }).catch((err)=>{
        console.log(err);
    })
});
router.post('/update/:id',(req,res)=>{
    updateDocument(req.body,req.params.id).then((doc)=>{
        res.json(doc)
    }).catch((err)=>{
        console.log(err)
    })
})
router.delete('/delete/:id',(req,res)=>{
    deleteDocument(req.params.id).then((doc)=>{
        res.json(doc)
    }).catch((err)=>{
        console.log(err)
    })
})
module.exports=router;