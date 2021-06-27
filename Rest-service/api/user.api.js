 let User = require("../models/userModel");
const passwordHash = require('password-hash')
 function createuser(body) {
 
   return new Promise((resolve, reject) => {
     const newUser = new User(body);

     User.findOne({
       email : body.email
     }).then(user => {
       if(user){
         resolve('Email Already Exists')
       }else{
        newUser
        .save()
        .then((user) => {
          resolve(user);
        })
        .catch((err) => {
          reject(err);
        });
       } 
     })
   });
 }

 function getAllUsers() {
   return new Promise((resolve, reject) => {
     User.find((err, docs) => {
       err ? reject(err) : resolve(docs);
     });
   });
 }

 function getUserById(id) {
   return new Promise((resolve, reject) => {
     User.findById(id)
       .then((user) => {
         resolve(user);
       })
       .catch((err) => {
         reject(err);
       });
   });
 }

 function deleteUserById(id) {
   return new Promise((resolve, reject) => {
     User.findByIdAndDelete(id)
       .then((user) => {
         resolve(user);
       })
       .catch((err) => {
         reject(err);
       });
   });
 }

 function updateUserById(body) {
   console.log("body: ", body);

   return new Promise((resolve, reject) => {
     User.findByIdAndUpdate(body._id).then((user) => {
       (user.name = body.name),
         (user.email = body.email),
         (user.password = body.password),
         (user.gender = body.gender),
         (user.type = body.type),
         (user.phoneNumber = Number(body.phoneNumber));

       user
         .save()
         .then((user) => {
           resolve(user);
         })
         .catch((err) => {
           reject(err);
         });
     });
   });
 }

 function getUsetByEmailAndPassword(user) {
   return new Promise((resolve,reject)=>{
    //  passwordHash.verify(req.body.password,user.password)
    //  user.password = passwordHash.generate(user.password);
    console.log('in getUsetByEmailAndPassword');
     User.findOne({email:user.email}).then((res)=>{
       if(passwordHash.verify(res.password,user.password)){
        console.log('in findone if');
         resolve(res)
       }
       console.log('in findone');
     }).catch((err)=>{
      console.log('in getUsetByEmailAndPassword err');
       reject(err)
     })
   })
 }

 module.exports = {
   createuser,
   getAllUsers,
   getUserById,
   deleteUserById,
   updateUserById,
   getUsetByEmailAndPassword
 };