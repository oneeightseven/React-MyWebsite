import React, {useState} from 'react';
import {motion} from "framer-motion";
import './Porfolio.css'
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";
import WebTech from "../WebTech/WebTech";
import Mgeek from "../Mgeek/Mgeek";

const Portfolio = () => {

    const [activeComponent, setComponentToShow] = useState('');

    const handleButtonClick = (component) => {
        setComponentToShow(component);
    };

    return (
        <>
            <div className='container mt-5 mt-xl-3'>
                <div className='col-xl-12'>
                    <div className='row'>
                        <div className='col-xl-4 col-6 offset-xl-1 text-center'>
                            <img className='cardImage'
                                 src={"https://imagess.hb.ru-msk.vkcs.cloud/WebTech.png"}/>
                        </div>
                        <div className='col-xl-4 col-6 offset-xl-2 text-center'>
                            <img className='cardImage'
                                 src={"https://imagess.hb.ru-msk.vkcs.cloud/Mgeek.png"}/>
                        </div>
                        <div className='col-xl-1 text-center'>
                        </div>
                        <div className='col-xl-4 col-6 offset-xl-1 text-center'>
                            <button onClick={() => handleButtonClick('WebTech')}>
                                <p className='cardName'>.NET8-MinimalAPI-React</p>
                            </button>
                        </div>
                        <div className='col-xl-4 col-6 offset-xl-2 text-center'>
                            <button onClick={() => handleButtonClick('Mgeek')}>
                                <p className='cardName'>.NET8-WebAPI-Blazor </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <div className='col-xl-12'>
                    <div className='row'>
                        {activeComponent === 'WebTech' && <WebTech/>}
                        {activeComponent === 'Mgeek' && <Mgeek/>}
                    </div>
                </div>
            </div>
        </>


    );
};

export default Portfolio;
