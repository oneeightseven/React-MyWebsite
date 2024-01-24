import React, {useEffect, useState} from 'react';
import './Home.css'
import {motion} from "framer-motion";

const upDownAnimation = {
    hidden: {
        y: -100,
        opacity: 0,
    },
    visible: custom => ({
        y: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}

const Home = () => {

    const [index, setIndex] = useState(0);
    const blocks = ['Backend', 'Web', '.NET'];

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % blocks.length);
        }, 1500);

        return () => clearInterval(interval);
    }, [index]);


    return (
        <>
            <motion.div
                        className='container'
                        initial="hidden"
                        whileInView="visible">
                <div className={'row'}>
                    <motion.div custom={2} variants={upDownAnimation} className={'col-12 text-center'}>
                        <p className='fioHome'>ALEXANDER VOLKOV</p>
                    </motion.div>
                    <motion.div initial="hidden"
                                whileInView="visible" key={blocks[index]} custom={1} variants={upDownAnimation} className={'col-6 text-end'}>
                        <p style={{color: 'blueviolet'}} className='descriptionJob nemngoRight'>{blocks[index]}</p>
                    </motion.div>
                    <motion.div custom={0.5} variants={upDownAnimation} className={'col-6 text-start'}>
                        <p className='descriptionJob nemnogoLeft'>Developer</p>
                    </motion.div>
                </div>
            </motion.div>
        </>
    )
        ;
};

export default Home;
