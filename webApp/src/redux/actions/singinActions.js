import axios from "axios"
import passwordHash from "password-hash"
export const  findUser=(user)=>dispatch=>{

    return new Promise((resolve,reject)=>{
        console.log(user);
        user.password=passwordHash.generate(user.password);
        axios.get('http://localhost:5000/user/getUser',user).then((res)=>{
            console.log('in dispathc');
            dispatch({type:'ADD_USER',payload:res.data})
            console.log('in findUser');
            resolve(res.data);
        }).catch((err)=>{
            console.log('err');
            console.log(err);
            reject('error')
        })
    }) 
    
}