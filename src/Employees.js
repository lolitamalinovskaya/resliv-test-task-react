import {useEffect, useState} from "react";

import EmployeeList from "./EmployeeList";

import './Employees.css';

function Employees() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://reqres.in/api/users?per_page=12')
            .then((res) => res.json())
            .then((res) => setData(res.data))
            .catch((e) => console.log(e))
    }, []);

    const addEmployee = () => {
       let name = prompt('Enter name new employee');
       let newEmployee = {id: name, first_name: name, last_name: '',};
        setData([...data, newEmployee]);
    };

    return (
        <>
            <h3 className={'Employees-title'}>OUR EMPLOYEES</h3>
            <EmployeeList data={data} setData={setData}/>
            <button className={'Employees-btn'} onClick={addEmployee}>Add new employee</button>
        </>
    );
}

export default Employees;
