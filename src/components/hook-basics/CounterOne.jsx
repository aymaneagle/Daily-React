import React, {useEffect, useState} from 'react';

const CounterOne = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `Clicked ${count} times`
    })
    return (
        <div>
            <button className="border px-2 py-1"
            onClick={() => setCount(count+1)}>Click {count} times</button>
        </div>
    );
};

export default CounterOne;