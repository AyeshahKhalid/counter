import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { counter_increment, counter_decrement } from '../redux/action'

export default function Counter(props) {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)
    return (
        <div className='container'>

            <h1>Counter Application</h1>
            <h2>{counter}</h2>
            <div className='counter'>
                <button className='increment' onClick={() => dispatch(counter_increment())}>Increment</button>
                <button className='decrement' onClick={() => dispatch(counter_decrement())}>Decrement</button>
            </div>
        </div>
    )
}
