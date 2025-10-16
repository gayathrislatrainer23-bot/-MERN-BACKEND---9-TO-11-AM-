import { useEffect, useState } from "react"
import axios from "axios";

const  CreateUser =()=>{
    // const [isSucess,setIsSucess ] =useState(null)
    const handleCreateUser= () =>{
        
        const userData ={
            name :"Manu",
            role:"React developer"
        }
        axios
        .post("https://reqres.in/api/users", userData)
        .then((response) =>{
            console.log("user created", response)
            // setIsSucess(true)
        })
        .catch((error) => {
            console.log("Error creating user:",error)
            // setIsSucess(false)
        })
    }
    // useEffect(() =>{
        handleCreateUser()
// },[])


    return(
        <>
<button onClick={handleCreateUser}>Create User</button>
{/* <h1>{isSucess? "user created sucessfully" : "Error creating user"}</h1> */}
        </>
    )
}

export default CreateUser;