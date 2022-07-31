
import './First_Header.css';
import logo from './Images/First_Header_Image.jpg';

export default function First_Header() 
{

    return(

        <header className='main-header'>
            <div className='first-header-container'>
                <p className='first-header-content-1-0'>Welcome to Prime Video</p>
                <p className='first-header-content-2-0'>Join Prime to watch the latest movies, TV shows and award-winning Amazon Originals</p>
                <button >Start your 30-day free trial</button>
                <p className='first-header-content-3-0'>With select credit or debit cards</p>
            </div>
            <img className='main-header-image' src={logo} alt='first-header-logo'/>
        </header>
        
    );
}