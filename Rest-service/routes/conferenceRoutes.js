const router = require('express').Router();
const { addConference } = require('../api/conference.api')

router.post('/', (req,res) => {

    addConference(req.body).then((newConf) => {
        res.json(newConf);
    }).catch((err)=>{
        console.log(err);
    })

});

module.exports = router;