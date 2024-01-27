import React, {useState} from 'react';
import {motion} from "framer-motion";
import './Porfolio.css'
import WebTech from "../WebTech/WebTech";
import Mgeek from "../Mgeek/Mgeek";
import * as Animations from "../Animations/Animations";

const Portfolio = () => {

    const [activeComponent, setComponentToShow] = useState('');

    const handleButtonClick = (component) => {
        setComponentToShow(component);
    };

    return (
        <>
            <motion.div
                className='container mt-5 mt-xl-3'
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}>
                <div className='col-xl-12'>
                    <div className='row'>
                        <motion.div custom={1} variants={Animations.leftAnimation} className='col-xl-4 col-6 offset-xl-1 text-center'>
                            <img className='cardImage'
                                 src={"https://imagess.hb.ru-msk.vkcs.cloud/WebTech.png"}/>
                        </motion.div>
                        <motion.div custom={1} variants={Animations.rightAnimation} className='col-xl-4 col-6 offset-xl-2 text-center'>
                            <img className='cardImage'
                                 src={"https://imagess.hb.ru-msk.vkcs.cloud/Mgeek.png"}/>
                        </motion.div>
                        <div className='col-xl-1 text-center'>
                        </div>
                        <motion.div custom={2} variants={Animations.leftAnimation} className='col-xl-4 col-6 offset-xl-1 text-center'>
                            <button onClick={() => handleButtonClick('WebTech')}>
                                <p className='cardName'>.NET8-MinimalAPI-React</p>
                            </button>
                        </motion.div>
                        <motion.div custom={2} variants={Animations.rightAnimation} className='col-xl-4 col-6 offset-xl-2 text-center'>
                            <button onClick={() => handleButtonClick('Mgeek')}>
                                <p className='cardName'>.NET8-WebAPI-Blazor </p>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>
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
