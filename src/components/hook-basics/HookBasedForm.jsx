import React, {useState} from 'react';

const HookBasedForm = () => {
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    })
  return (
   <form>
      <input className="border px-2 py-1 mr-2"
             type="text"
             value={name.firstName}
             onChange={(e) => setName({...name, firstName: e.target.value})}/>
        <input
            className="border px-2 py-1"
            value={name.lastName}
            onChange={(e) => setName({...name, lastName: e.target.value})}
        />
<h2>First Name: {name.firstName}</h2>
        <h2>Last Name: {name.lastName}</h2>
       <h2>{JSON.stringify(name)}</h2>
   </form>
  );
};

export default HookBasedForm;
