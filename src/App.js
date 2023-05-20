import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/service/Service';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Pricing from './components/pricing/Pricing';
import Testimonials from './components/testimonials/Testimonials';
import Contact from './components/contact/Contact';

const App = () => {
    return (
        <>
            <Sidebar/>
                <main className='main'>
                    <Home/>
                    <About/>
                    <Service/>
                    <Resume/>
                    <Portfolio/>
                    <Pricing/>
                    <Testimonials/>
                    <Contact/>        
                </main>
        </>
    )
}

export default App;
