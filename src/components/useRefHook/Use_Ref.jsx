import {useRef, useState, useEffect} from 'react';
const Use_Ref = () => {
    const [count, setCount] = useState(0);
    let val = useRef(0);
let btnRef = useRef();
   const handleIncrement = () =>{
       val.current = val.current + 1;
       console.log("value", val.current);
       setCount(count + 1);
   }
    const changeColor = () =>{
        btnRef.current.style.backgroundColor = "red";
    }
    useEffect(()=>{
        console.log("I am re_rendered") 
    })
    return (
        <div>
            Count: {count}
            <div>
                <button ref={btnRef} onClick={handleIncrement}>Increment</button>
                <button onClick={changeColor}>Change color of above button</button>
            </div>
        </div>
    );
};

export default Use_Ref;