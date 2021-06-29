import axios from "axios"
import passwordHash from "password-hash"
import jwt from 'jsonwebtoken'
export const  findUser=(user)=>dispatch=>{

    return new Promise((resolve,reject)=>{
        console.log(user);
        axios.post('http://localhost:5000/user/getUser',user).then((res)=>{
            console.log('in dispathc');
            const token= res.data;
            console.log(token);
            const userResponds=jwt.decode(token)
            console.log(user.password);
            console.log(userResponds.password);
            if(passwordHash.verify(user.password,userResponds.password)){
                // const userResponds =jwt.decode(token);
            const userDetails ={
                _id:userResponds._id,
                name :userResponds.name,
                email : userResponds.email,
                gender : userResponds.gender,
                type : userResponds.type,
                phoneNumber :userResponds.phoneNumber
            }
            console.log('decode token userRespond',userResponds);
            console.log('send details to redux',userDetails)
                dispatch({type:'ADD_USER',payload: userDetails})
                localStorage.setItem('user',token);
                console.log('in findUser');
                resolve(token);
            }
            else{
                console.log('in else');
            }
            // reject('err')
        }).catch((err)=>{
            console.log('err');
            console.log(err);
            reject('error')
        })
    }) 
    
}
export const updatePassword=(email)=>dispatch=>{
    return new Promise((resolve,reject)=>{
        axios.post('http://localhost:5000/user/getCode',email).then((res)=>{
            //localstorage ekati reducx ekati danna oneda
            dispatch({type:'ADD_USER',payload:res.data});
            console.log('action axios');
            resolve(res)
        }).catch((err)=>{
            reject(err)
        })
    })
}

export const addNewPassword=(user)=>dispatch=>{
    return new Promise((resolve,reject)=>{
        const password = passwordHash.generate(user.password);
        axios.post(`http://localhost:5000/user/update/${user._id}`,password).then((res)=>{
            const token =res.data.token;    
        if(token){
            localStorage.setItem('user',token);
            const userResponds = jwt.decode(token);
            const userDetails ={
                _id:userResponds._id,
                name :userResponds.name,
                email : userResponds.email,
                gender : userResponds.gender,
                type : userResponds.type,
                phoneNumber :userResponds.phoneNumber
            }
            dispatch({type:'ADD_USER',payload:userDetails});
            resolve(userDetails);
        }
        }).catch((err)=>{
            reject(err)
        })
    })
}