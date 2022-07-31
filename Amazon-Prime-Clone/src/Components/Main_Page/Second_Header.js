
import './Second_Header.css';
import lionsgate from './Images/LionsgatePlay.jpg';
import discovery from './Images/Discovery.jpg';
import hayu from './Images/Hayu.jpg';
import manoramamax from './Images/MANORAMAMAX.jpg';
import mubi from './Images/Mubi.jpg';
import shortstv from './Images/ShortsTV.jpg';
import docubay from './Images/Docubay.jpg';
import hoichoi from './Images/hoichoi.jpg';
import erosnow from './Images/Erosnow.jpg';

export default function Second_Header() {
    return (
        <div className='second-header-whole-container'>
            <div className='second-header-container'>
                <p className='second-header-content-1-0'>Your favorite channels all in one place</p>
                <p className='second-header-content-2-0'>With Prime Video Channels, find shows and movies from your favorite channels all in one place. Enjoy with an add-on subscription to Channels of your choice</p>
            </div>
            <div className='second-header-images-container'>
                <img src={lionsgate} alt='LionsgatePLay' />
                <img src={discovery} alt='Discovery' />
                <img src={hayu} alt='Hayu' />
                <img src={manoramamax} alt='Manoramamax' />
                <img src={mubi} alt='Mubi' />
                <img src={shortstv} alt='ShortsTV' />
                <img src={docubay} alt='Docubay' />
                <img src={hoichoi} alt='Hoichoi' />
                <img src={erosnow} alt='Erosnow' />
            </div>

        </div>
    )
} 