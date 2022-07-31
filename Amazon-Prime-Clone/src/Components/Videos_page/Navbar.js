import { Link, Outlet } from "react-router-dom";
import logo from './Images/logo.png';
import './Navbar.css';
import { FaUserCircle } from 'react-icons/fa'
import { getUsername } from "../Login/Login_page";

export default function Navbar() {

    let username = getUsername()
    console.log(username)

    return (
        <div className='maindiv-of-navbar'>
            <div className="logo-area">
                <Link to="/"><img className="logo-img" src={logo} alt="Logo" /></Link>
                <Outlet />
            </div>
            <div className='span-areas'>
                <FaUserCircle size={'32px'} className='icon' />
                <span>{username}</span>
            </div>

        </div>

    )
}
