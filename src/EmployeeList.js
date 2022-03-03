import Employee from "./Employee";

function EmployeeList({ data, setData }) {

    return <ul className={'Employee-list'}> {data && data.map((employee) =>
             <Employee employee={employee} data={data} setData={setData}/>)}
           </ul>
}

export default EmployeeList;
