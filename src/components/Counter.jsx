import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

 const Counter = () =>{
    const count = useSelector((state)=> state.counter.value);
    const dispatch = useDispatch()
const handleIncrement = ()=>{
    dispatch(increment())
}
const handledecrement = ()=>{
    dispatch(decrement())
}

    return (
        <>
        <h1>{count}</h1>
        <button onClick={handleIncrement}>+</button>
        <button  onClick={handledecrement}>-</button>
        <button>Reset</button>
        </>
    )
 }
 export default Counter;