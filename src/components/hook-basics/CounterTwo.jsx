import React, {useEffect, useState} from 'react';

const CounterTwo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("")
    useEffect(() =>{
        console.log("useEffect - updating document title")
        document.title = `${count} times`;
    },[count]);
    return (
        <div>
            <input type="text"
            value={name}
                   onChange={(e) =>  setName(e.target.value)}
            className="border px-2 py-1 mb-2"
            />
            <button className="border px-3 py-1"
                    onClick={()=>{setCount(count+1)}}>Clicked {count} times</button>
        </div>
    );
};

export default CounterTwo;