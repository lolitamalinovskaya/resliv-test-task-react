import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar() {
    return (
        <div className={'Navbar'}>
            <li className={'Navbar-item'}>
                <Link className={'Navbar-link'} to={'/'}>Главная</Link>
            </li>
            <li className={'Navbar-item'}>
                <Link className={'Navbar-link'} to={'/employees'}>Сотрудники</Link>
            </li>
        </div>
    );
}

export default Navbar;
