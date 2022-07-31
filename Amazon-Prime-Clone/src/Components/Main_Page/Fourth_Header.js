

import { Link, Outlet } from "react-router-dom";
import './Fourth_Header.css';
import cartoon from './Images/cartoons.png';


export default function Fourth_Header() {
    return (
        <div className='fourth-header-whole-container'>
            <div className='fourth-header-images-container'>
                <img src={cartoon} alt='Cartoon' />
            </div>
            <div className='fourth-header-container'>
                <p className='fourth-header-content-1-0'>Family Friendly</p>
                <p className='fourth-header-content-2-0'>With easy to use Parental Controls and a dedicated kids page, enjoy secure, ad-free kids entertainment. Kids can enjoy popular TV shows like Peppa Pig, Powerpuff Girls, and Chhota Bheem.</p>
                
                <Link to="/login"><button >Get Started</button></Link>
                <Outlet />
            </div>
            

        </div>
    )
} 