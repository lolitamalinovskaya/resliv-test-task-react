import './Employee.css';

function Employee({ employee, data, setData }) {
    const removeEmployee = () => {
        setData(data.filter((el) => el.id !== employee.id));
    }

    return (
        <div className={'Employee-wrapper'} key={employee.id}>
            <li>{employee.first_name}&nbsp;{employee.last_name}</li>
            <button className={'Employee-btn'} onClick={removeEmployee}>Remove</button>
        </div>
        )
}

export default Employee;
