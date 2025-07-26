import React, {useCallback, useState} from 'react';
import Title from "./sub-components/title.jsx";
import Count from "./sub-components/count.jsx";
import Button from "./sub-components/button.jsx";


const ParentComponent = () => {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(20000);

    const incrementAge = useCallback(() => {
        setAge(age + 1);
    }, [age])
    const incrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary]);
  return (
    <div>
      <Title/>
        <Count text="Age" count={age}/>
        <Button onClick={incrementAge}>Increment Age</Button>
        <Count text="Salary" count={salary}/>
        <Button onClick={incrementSalary}>Increment Salary</Button>


    </div>
  );
};

export default ParentComponent;
