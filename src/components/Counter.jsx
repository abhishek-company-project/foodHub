import React from 'react'
import { useSelector ,useDispatch } from 'react-redux'
import { increment ,decrement,reset } from '../features/counterSlice';
import { NavLink } from 'react-router';

function Counter() {

    const count = useSelector((state) => state.counter.value);
    const dispatch=useDispatch();

  return (
    <>
    <div>Counter {count}</div>
    <NavLink to={"/"}>
    home
    </NavLink>
    <button className='border m-3' onClick={()=>{dispatch(increment())}}>increment</button>
    <button className='border m-3' onClick={()=>{dispatch(decrement())}}>decrement</button>

    </>
  )
}

export default Counter