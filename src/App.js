import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./Menu/Menu";
import React, {useState} from "react";
import { CSSTransition } from "react-transition-group";
import AboutMe from "./AboutMe/AboutMe";
import Resume from "./Resume/Resume";
import Portfolio from "./Portfolio/Portfolio";
import Contact from "./Contact/Contanct";
import Button from "bootstrap/js/src/button";
import Home from "./Home/Home";

function App() {
    const [menuActive, setMenuActive] = useState(false);
    const [activeComponent, setComponentToShow] = useState('Portfolio');

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
                <div className="menu" onClick={e => e.stopPropagation()}>
                    <ul>
                        <li>
                            <button onClick={() => handleButtonClick('Home')}>Home</button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick('AboutMe')}>About Me</button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick('Resume')}>Resume</button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick('Portfolio')}>Portfolio</button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick('Contact')}>Contact</button>
                        </li>
                    </ul>
                </div>
            </CSSTransition>
            <main>
                <div className={"col-xl-12"}>
                    {activeComponent === 'Home' && <Home/>}
                    {activeComponent === 'AboutMe' && <AboutMe/>}
                    {activeComponent === 'Resume' && <Resume/>}
                    {activeComponent === 'Portfolio' && <Portfolio/>}
                    {activeComponent === 'Contact' && <Contact/>}
                </div>
            </main>
        </div>
    );
}

export default App;
