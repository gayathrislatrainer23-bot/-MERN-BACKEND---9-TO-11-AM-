import {  useState } from "react"
import axios from "axios";

const  CreateUser =()=>{
    const [isSucess,setIsSucess ] =useState(null)
    const handleCreateUser= () =>{
        
        const userData ={
            name :"Manu",
            role:"React developer"
        }
        axios
        .post("https://jsonplaceholder.typicode.com/users", userData)
        .then((response) =>{
            console.log("user created", response)
            // response.data.msg
             setIsSucess(true)
        })
        .catch((error) => {
            console.log("Error creating user:",error)
            setIsSucess(false)
        })
    }

    return(
        <>
        {/* form */}
<button onClick={handleCreateUser}>Create User</button>
 {isSucess !== null && (
<h1>
 {isSucess ? "user created sucessfully" : "Error creating user" }</h1> 
 ) 
}

        </>
    )
}

export default CreateUser;