const router = require('express').Router();
const {addConference} = require('../api/conference.api')

router.post('/', (req,res) => {

    addConference(req.body).then((newConf) => {
        res.json(newConf);
    });

});

module.exports = router;