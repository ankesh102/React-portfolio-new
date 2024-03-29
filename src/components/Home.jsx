import React,{useEffect} from 'react';

import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

import Skills from './Skills';
import Contact from './Contact';

import Academics from './Academics';
import { withRouter } from 'react-router';
import { Wave} from 'react-animated-text';

const Home = () => {


    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

return <div >
    <div>

        <section id="header" className="home d-flex align-items-center" style={{paddingTop: '0',}}   >
            <div id="title" className="titleHeader col-md-6 pt-5 pt-lg-0 order-2 order-lg- d-flex justify-content-center flex-column" data-aos='zoom-in' >
              

                <h1>
                <div className='title-wave'>
                <Wave
                    text="Hello, I am Ankita Kumari!"
                    effect="stretch"
                    effectChange={2.0}/>
                </div>
                 <strong className="brand-name"> 
                <Typewriter options={{  strings: ["I am a Web Developer", "I am a Programmer", "I am a Debugger", "I am a Software Engineer"],  autoStart: true,  loop: true,changeDelay:2 }}/>

              </strong>
               </h1>
             
                <div className="mt-3">
            
                    <Link to='/certificates' className="btn-get-started btn btn-danger" style={{color:'white'}}>Certificates</Link>
                    <Link to='/projects' className="btn-get-started " style={{marginLeft: "5%"}}>Projects</Link>
            
                </div>
                </div>
        </section>
    </div>
    <Skills />
    {/* <Grades /> */}
    <Academics />
    <Contact />
    </div>
    
}

export default withRouter(Home);
