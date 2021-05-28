const router = require('express').Router();
const {addDocument}=require('../api/document.api')

router.post('/',(req,res)=>{
    addDocument(req.body).then((newDoc)=>{
        res.json(newDoc);
    }).catch((err)=>{
        console.log(err);
    })
});
module.exports=router;