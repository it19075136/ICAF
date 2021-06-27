const router = require('express').Router();
const {addDocument,updateDocument,deleteDocument,getDoucmentByUserId}=require('../api/document.api');
const upload = require('../config/storage');

router.post('/', upload.single("file"), (req,res)=>{

    console.log(req.file)
    addDocument(req.body,req.file).then((newDoc)=>{
        res.json(newDoc);
    }).catch((err)=>{
        console.log(err);
    })
});
router.post('/update/:id', upload.single("doc"), (req,res)=>{

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
router.get('/:id',(req,res)=>{
    getDoucmentByUserId(req.params.id).then(documents=>{
        res.json(documents)
    }).catch(err=>{
        console.log(err)
    })
})

// router.post('/upload', upload.single('file'), (req,res) => {
//  // upload method
// })


module.exports=router;