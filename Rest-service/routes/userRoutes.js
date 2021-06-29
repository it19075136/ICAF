const router  = require('express').Router();
const { createuser, getAllUsers, getUserById ,deleteUserById, updateUserById,getUsetByEmailAndPassword }  = require('../api/user.api');
const jsonwebtoken = require('jsonwebtoken');
//add user
router.post('/add', (req, res) => {

    createuser(req.body).then((newUser) => {
        const token = jsonwebtoken.sign({
            _id:newUser._id,
            name :newUser.name,
            email : newUser.email,
            gender : newUser.gender,
            type : newUser.type,
            phoneNumber :newUser.phoneNumber
        },"jwtSecret")
        res.json(token);

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

router.post('/getUser',(req,res)=>{
    console.log('router getuser');
    getUsetByEmailAndPassword(req.body).then(user=>{
        console.log('in router get');
        console.log(user);
        const token = jsonwebtoken.sign({
            _id:user._id,
            name :user.name,
            email : user.email,
            gender : user.gender,
            type : user.type,
            phoneNumber :user.phoneNumber,
            password:user.password
        },"jwtSecret")
        console.log('in router get');
        res.json(token);
        
    }).catch(err=>{
        console.log('err pasindu');
        console.log(err);
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