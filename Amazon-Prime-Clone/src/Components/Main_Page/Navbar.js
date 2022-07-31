import { Link, Outlet } from "react-router-dom";
import logo from './Images/logo.png';
import './Navbar.css';

export default function Navbar() {

    return (
        <div className='maindiv-of-navbar'>
            <div className="logo-area">
                <img className="logo-img" src={logo} alt="Logo" />
            </div>
            <div className='span-areas'>
                <div className='dropdown'>
                    <span >&#x1f310; EN</span>
                </div>
                <div className='signin'>
                    <Link to="/login"><span >Sign In</span></Link>
                    <Outlet />

                </div>
                <a class='fas'>
                    <Link to="/login"><i class='fas'>&#xf406;</i></Link>
                    <Outlet />
                </a>
            </div>
        </div>

    )
}