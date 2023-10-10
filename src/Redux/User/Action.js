import { REQ_USER } from "./ActionType";

export const getUserProfileAction=(jwt)=>async (dispatch)=>{

try {

    const res=await fetch("http://localhost:5454/api/users/req",{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Authorization:" Bearer " +jwt
        }
       
        })

        const reqUser= await res.json()

        dispatch({type:REQ_USER,payload:reqUser});
    }
    catch ( error){
        console.log("catch:",error)
    }
}