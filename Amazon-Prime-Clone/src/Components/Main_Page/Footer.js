
import './Footer.css';
import footerlogo from './Images/footer_logo.png';
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'


export default function Footer() {
    return (
        <div className='footer-section'>
            <div className='footer-content-section'>
                <img src={footerlogo} className='footer-image' />
                <p className='terms-privacy'>
                    <span>Terms and Privacy Notice  </span>
                    <span>Send us feedback  </span>
                    <span>Help</span>
                </p>
                <p className='copyright'>© 1996-2022, Amazon.com, Inc. or its affiliates</p>
            </div>
            <div className='icons'>
                <a href='https://www.instagram.com/sabarivasan_20/' target="_blank" rel="noopener noreferrer"><BsInstagram size={'35px'} className='icon' color={'white'} /></a>
                <a href='https://github.com/Sabarivasan-Velayutham' target="_blank" rel="noopener noreferrer"><BsGithub size={'35px'} className='icon' color={'white'} /></a>
                <a href='https://www.linkedin.com/in/sabarivasan-velayutham-06a696210/
' target="_blank" rel="noopener noreferrer"><BsLinkedin size={'35px'} className='icon' color={'white'} /></a>
            </div>
        </div>
    )
} 