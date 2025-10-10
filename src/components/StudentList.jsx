import { useEffect, useState } from "react";

const StudentList =()=>{
    let students = ["Manu","Balu","Venu","Renu"]
    const[studentstatus,setStudentstatus]= useState("studying");
    useEffect(()=>{
        console.log('StudentList rendering, changing status')
    },[studentstatus])
    return(
        <div>
        <ul>
            {/* <li>"Manu"</li>
            <li>"Balu"</li>
            <li>"Venu"</li>
            <li>"Renu"</li> */}
            {/* static list */}
            {
                students.map((student,index)=>(
                         <li key={index}>{student},{index}</li> 
                ))
            }
        </ul>
        <button onClick={()=>setStudentstatus("completed")}>StudentStatus</button>
        <p>{studentstatus}</p>
        </div>
    )
}
export default StudentList;