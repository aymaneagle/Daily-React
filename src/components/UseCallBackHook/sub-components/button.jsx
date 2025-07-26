import {memo} from 'react';

const Button = ({onClick,children}) => {
    console.log(`Button : ${children}`);
    return (
       <button className="border px-2 py-1" onClick={onClick}>{children}</button>
    );
};

export default memo (Button);