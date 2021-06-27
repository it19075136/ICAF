const router  = require('express').Router();
const { createuser, getAllUsers, getUserById ,deleteUserById, updateUserById,getUsetByEmailAndPassword }  = require('../api/user.api');

//add user
router.post('/add', (req, res) => {

    createuser(req.body).then((newUser) => {
        res.json(newUser);
    }).catch((err) => {
        console.log(err);
    })

})

//get all users
router.get('/', (req, res) => {

    getAllUsers().then((docs) => {
        res.json(docs);
    }).catch((err) => {
        console.log('err: ', err);
    })

})

//get All users by id

router.get('/:id', (req, res) => {
    getUserById(req.params.id).then((user) => {
        res.json(user);
    })
})

router.get('/getUser',(req,res)=>{
    console.log('router getuser');
    getUsetByEmailAndPassword(req.body).then(user=>{
        console.log('in router get');
        res.json(user);
    })
})

router.delete('/:id', (req, res) => {
    
    deleteUserById(req.params.id).then((user) => {
        res.json(
            user.name + ' is deleted'
        )
    })
})

router.post('/update/:id', (req, res) => {


    req.body._id = req.params.id;

    updateUserById(req.body)
        .then((user) => {
            res.json(
                user.name + ' has been updated'
            )
        })
})



module.exports = router;