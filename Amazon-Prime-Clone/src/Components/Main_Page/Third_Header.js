
import { Link, Outlet } from "react-router-dom";
import './Third_Header.css';
import remote from './Images/Remote.jpg';


export default function Third_Header() {
    return (
        <div className='third-header-whole-container'>
            <div className='third-header-images-container'>
                <img src={remote} alt='Remote' />
            </div>
            <div className='third-header-container'>
                <p className='third-header-content-1-0'>Even better with Fire TV Stick</p>
                <p className='third-header-content-2-0'>The biggest movies and TV shows are always better on a big screen. Simply plug in your Amazon Fire TV Stick and stream on any HDTV. Press the voice button on the remote and say the name of the title you want to watch to find it in seconds.</p>

                <Link to="/login"><button >Get Started</button></Link>
                <Outlet />
            </div>


        </div>
    )
} 