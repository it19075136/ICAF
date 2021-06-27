import axios from "axios"
import hashPassword from 'password-hash'
export const postUser=(user)=> dispatch=>{

   return  new Promise ((resolve,reject)=>{
       user.password = hashPassword.generate(user.password);
    axios.post('http://localhost:5000/user/add',user).then(res=>{
        dispatch({type:'ADD_USER',payload:res.data})
        resolve(res.data);
    }).catch(err=>{
        console.log(err)
        reject(err)
    })
   })
    
}