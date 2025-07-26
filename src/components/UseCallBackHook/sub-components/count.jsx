import {memo} from 'react';

const Count = ({text, count}) => {
 console.log(`Count : ${count}`);
    return (
      <p>{text} : {count}</p>
    );
};

export default memo (Count);