import React from 'react';
import {useState} from 'react'

const HookBasedCounterTwo = () => {
    const [count, setCount] = useState(0);
    const incrementFive = () => {
        for(let i=0; i<5; i++){
            setCount(prev => prev + 1);
        }
    }

    return (
        <div className="border w-fit p-3 shadow-xl rounded-md flex flex-col
            justify-center items-center">
            <h1 className="text-xl font-bold">Hook Based Component</h1>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)} className="border px-2 py-1">Increment</button>
            <button onClick={() => setCount(count - 1)} className="border px-2 py-1">Decrement</button>
            <button onClick={incrementFive} className="border px-2 py-1" >Increase Five</button>
        </div>

    )
};
export default HookBasedCounterTwo;