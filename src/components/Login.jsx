import { useState } from "react";


const Login = () =>{
    const [IsLogin,setIsLogin]=useState(true);




    return(
        <>
        {IsLogin ? "welcome" :"your failed to login"}
        </>
    )
}
 export default Login;