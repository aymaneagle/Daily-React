import React, {useState, useMemo} from 'react';

const UseMemoHook = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');

    const heavyTask = (num) =>{
        console.log("I am expensive")
        let i = 0;
        while (i <= 1000000000){
            i++;
        }
        return num*2;
    }
    let doubleValue = useMemo(()=>heavyTask(input),[input])
    return (
        <div>
           <div>DoubleValue: {doubleValue}</div>
        <div> Count: {count} </div>
            <button className="border px-2 py-1" onClick={() => setCount(count + 1)}>Increase</button>
           <div>
               <input
                   type="number"
                   placeholder="Enter number"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
               />
           </div>
        </div>

    );
};

export default UseMemoHook;