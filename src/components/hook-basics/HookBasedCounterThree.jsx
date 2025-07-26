import React, {useState} from 'react';

const HookBasedCounterThree = () => {
    const [items, setItems] = useState([])
    const addItem = () =>{
       setItems([
           ...items,
           {
               id: items.length,
               value: Math.floor(Math.random() * 10) + 1,
           }
       ])
    }
    console.log(items);
  return (
    <div>
      <button onClick={addItem}
          className="border px-2 py-1">
          Add a number
      </button>
        <ul className="list-disc ml-5">
            {items.map((item)=>(
                <li key={item.id}>{item.value}</li>
            ))}
    </ul>
    </div>

  );
};

export default HookBasedCounterThree;
