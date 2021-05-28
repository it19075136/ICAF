const router  = require('express').Router();
const { createuser }  = require('../api/user.api');

//add user
router.post('/add', (req,res) =>{
    
    createuser(req.body).then((newUser) => {
        res.json(newUser);
    }).catch((err)=>{
        console.log(err);
    })

})


module.exports = router ;