import React,{useState}from "react";
import {useNavigate}from "react-router-dom";
function LoginForm({setUserRole})
{
    const[userName,setUserName]=useState("");
    const[password,setPassword]=useState("");
    const navigate = useNavigate();

const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("handlesubmit")
     if (userName==="Admin" && password=== "1234")
 {
            console.log("handlesubmit1")
// setUserRole("Admin");
navigate("/Admin");
}
else if(userName==="Client"&& password==="2345")
{
        console.log("handlesubmit2")
    // setUserRole("Client");
    navigate("/Client");


}
else
{
    console.log("handlesubmit3")
    setUserName("invalid credentials")
}
}
return(<>
<form onSubmit={handleSubmit}>
<input type="text"
placeholde="enter your Name"
value={userName}
onChange={(e)=>setUserName (e.target.value)}
/>

<input type="password"
placeholder="enter your password"
value={password}
onChange={(e)=>setPassword(e.target.value)}/>
<button type="submit">Submit</button>
</form>
</>
    
);


}
export default LoginForm;