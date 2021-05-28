 let User = require("../models/userModel");

 function createuser(body) {
   // const user  = {
   //     name : body.name,
   //     email : body.email,
   //     password : body.password,
   //     gender : body.gender,
   //     type : body.type,
   //     phoneNumber : body.phoneNumber
   // }
   return new Promise((resolve, reject) => {
     const newUser = new User(body);

     newUser
       .save()
       .then((user) => {
         resolve(user);
       })
       .catch((err) => {
         reject(err);
       });
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

 module.exports = {
   createuser,
   getAllUsers,
   getUserById,
   deleteUserById,
   updateUserById,
 };