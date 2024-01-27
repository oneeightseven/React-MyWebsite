import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu/Menu";
import React, {useState} from "react";
import { CSSTransition } from "react-transition-group";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contanct";
import Button from "bootstrap/js/src/button";
import Home from "./Home/Home";
import {motion} from "framer-motion";


const leftAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [activeComponent, setComponentToShow] = useState('Home');

    const handleButtonClick = (component) => {
        setComponentToShow(component);
        setMenuActive(false);
    };

    return (
        <div className={'app'}>
            <nav>
                <div className={menuActive ? "burger-btn-active" : "burger-btn"}
                     onClick={() => setMenuActive(!menuActive)}>
                    <span/>
                </div>
            </nav>
            <CSSTransition in={menuActive}
                           timeout={500}
                           classNames='alert'
                           unmountOnExit
                           onExited={() => setMenuActive(false)}
            >
                <motion.div initial="hidden"
                            whileInView="visible"
                            viewport={{once: true}} className="menu" onClick={e => e.stopPropagation()}>
                    <ul className='mt-5'>
                        <li>
                            <motion.button custom={1.5} variants={leftAnimation} onClick={() => handleButtonClick('Home')}>HOME</motion.button>
                        </li>
                        <li>
                            <motion.button custom={2} variants={leftAnimation} onClick={() => handleButtonClick('AboutMe')}>ABOUT ME</motion.button>
                        </li>
                        <li>
                            <motion.button custom={2.5} variants={leftAnimation} onClick={() => handleButtonClick('Portfolio')}>PORTFOLIO</motion.button>
                        </li>
                        <li>
                            <motion.button custom={3} variants={leftAnimation} onClick={() => handleButtonClick('Contact')}>CONTACT</motion.button>
                        </li>
                    </ul>
                </motion.div>
            </CSSTransition>
            <main>
                <div className={"col-xl-12"}>
                    {activeComponent === 'Home' && <Home/>}
                    {activeComponent === 'AboutMe' && <AboutMe/>}
                    {activeComponent === 'Portfolio' && <Portfolio/>}
                    {activeComponent === 'Contact' && <Contact/>}
                </div>
            </main>
        </div>
    );
}

export default App;
