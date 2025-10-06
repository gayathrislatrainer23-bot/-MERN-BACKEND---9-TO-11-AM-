import { useState } from "react";

 const Count =() =>{
const [count1,setCount1] = useState(0)
//  const count1 = 0

    return(
        <div className="count">
            <p> {count1}</p>
<button onClick={() => setCount1(count1 +1)}> + </button>
<button onClick={() => setCount1(count1 - 1)}> - </button>

        </div>
    )
 }
 export default Count;