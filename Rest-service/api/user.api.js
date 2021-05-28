 let User = require('../models/userModel');
 
 function createuser(body){
     console.log('body: ', body);

    // const user  = {
    //     name : body.name,
    //     email : body.email,
    //     password : body.password,
    //     gender : body.gender,
    //     type : body.type,
    //     phoneNumber : body.phoneNumber 
    // }
    return new Promise((resolve,reject)=>{

        const newUser = new User(body);
        console.log('newUser: ', newUser);
        
        newUser.save().then((user) => {
            resolve(user);
        }).catch((err) => {
            reject(err);
        })
    });

}

module.exports = { createuser };