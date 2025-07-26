import React, {useState} from 'react';

const SimpleForm = () => {
    const [name, setName] = useState({
        firstName: "",
        lastName: "",
    })
    const handleChange = (e) => {
        e.preventDefault()
        console.log(name)
    }
    return (
        <div>
            <form>
                <input type="text"
                       value = {name.firstName}
                       onChange = {(e) =>setName({...name, firstName: e.target.value})}
                       className="border px-2 py-1"
                />
                <input type={"text"}
                       value = {name.lastName}
                       onChange = {(e)=>setName({...name,lastName: e.target.value})}
                       className="border px-2 py-1"
                />
                <button className="border px-2 py-1" onClick={handleChange}>Submit</button>
            </form>
        </div>
    );
};

export default SimpleForm;