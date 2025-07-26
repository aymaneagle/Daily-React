import React from 'react';
import {useState} from 'react'


const HookBasedCounter = () => {
    const[count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount(count + 1)
    }
  return (
      <div className="border w-fit p-3 shadow-xl rounded-md flex flex-col
            justify-center items-center">
          <h1 className="text-xl font-bold">Hook Based Component</h1>
          <p>Count:{count}</p>
          <button onClick={handleIncrement} className="border px-2 py-1">Increment</button>
      </div>
  );
};

export default HookBasedCounter;
