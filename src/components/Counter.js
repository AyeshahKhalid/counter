import React from 'react'

export default function Counter(props) {

    return (
        <div className='container'>

            <h1>Counter Application</h1>
            <h2>0</h2>
            <div className='counter'> 
                <button className='increment'>Increment</button>
                <button className='decrement'>Decrement</button>
            </div>
        </div>
    )
}
