import { useState } from "react";

const SampleForm = () => {
    const [email , setEmail] = useState('')
    console.log(email)

const HandleSubmit =(event)=>{
 event.preventDefault()
     console.log(event,"event")
 alert(`${email}`, )
}
    return (
        <>
            <form onSubmit={HandleSubmit}>
                <input type="email"  value ={email} onChange={(e)=>setEmail(e.target.value)} placeholder="email" />  
                {/* controlled input */}
                <input type="password" placeholder="password" />
                <button type="submit"> submit</button>
            </form>
        </>
    )
}

export default SampleForm;