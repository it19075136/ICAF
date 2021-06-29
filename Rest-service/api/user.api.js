 let User = require("../models/userModel");
const passwordHash = require('password-hash');
var nodemailer = require('nodemailer');
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
      //  (user.name = body.name),
      //    (user.email = body.email),
         (user.password = body.password)
        //  (user.gender = body.gender),
        //  (user.type = body.type),
        //  (user.phoneNumber = Number(body.phoneNumber));

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
    console.log(user);
    console.log('in getUsetByEmailAndPassword');
     User.findOne({email:user.email}).then((res)=>{
      //  if(passwordHash.verify(user.password,res.password)){
      //   console.log('in findone if');
      console.log('in findone');
         resolve(res);
      //  }
       
     }).catch((err)=>{
      console.log('in getUsetByEmailAndPassword err');
       reject(err);
     })
   })
 }
 function getEmailAndPassCode(email){
   return new Promise((resolve,reject)=>{
    console.log('in getEmailAndPassCode');
    User.findOne({
      email : email
    }).then(user => {
      console.log('in then in get email passcode')
      if(user){
        console.log('in then in get email passcode in if')
        // Math.floor((Math.random() * 100) + 1);
        const code =Math.floor(Math.random()*100000 +1);
        const subject = 'veryfication code for Update password in ICAF';
        const body = `veryfication code - ${code}`;
        code=passwordHash.generate(code);
        const updatePasswordDetails = {
          _id:user._id,
          email:user.email,
          code:code
        }
        var transporter = nodemailer.createTransport({
          service:'gmail',
          auth:{
            user:'tweb4172@gmail.com',
            pass:'sliit1234'
          }
        })
        var mailOptions ={
          from:'tweb4172@gmail.com',
          to:user.email,
          subject:subject,
          text:body
        }

        transporter.sendMail(mailOptions,function(error,info){
          if(error){
            console.log(error);
          }else{
            console.log('Email sent: ' + info.response);
            resolve(updatePasswordDetails)
          }
        })
        
      }else{
        reject('email not in database')
      } 
    }).catch((err)=>{
        console.log(err);
        reject('err')
    })

   })
  }

 module.exports = {
   createuser,
   getAllUsers,
   getUserById,
   deleteUserById,
   updateUserById,
   getUsetByEmailAndPassword,
   getEmailAndPassCode
 };