

import Navbar from './Navbar';
import Banner from './Banner';
import Section from './Section';
import requests from './requests';
import Footer from './Footer'

export default function VideosPage() {
    return (
        <div className='whole-page'
            style={{ backgroundColor: '#0f171e' }}
        >
            <Navbar />
            <Banner />
            <Section title={'LATEST MOVIES'} fetchUrl={requests.fetchLatestMovies} />
            <Section title={'TRENDING NOW'} fetchUrl={requests.fetchTrending}/>
            <Section title={'TOP RATED'} fetchUrl={requests.fetchTopRated}/>           
            <Section title={'DOCUMENTRY MOVIES'} fetchUrl={requests.fetchDocumentaries}/>
            <Section title={'HORROR MOVIES'} fetchUrl={requests.fetchHorrorMovies}/>
            <Section title={'COMEDY MOVIES'} fetchUrl={requests.fetchComedyMovies}/>
            <Section title={'ROMANCE MOVIES'} fetchUrl={requests.fetchRomanceMovies}/>
            <Section title={'ACTION MOVIES'} fetchUrl={requests.fetchActionMovies}/>
            <Footer/>
        </div>
    );
}

