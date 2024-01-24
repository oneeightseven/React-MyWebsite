import React from 'react';
import {motion} from "framer-motion";
import '../Contact/Contact.css'


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

const rightAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: custom => ({
        x: 0,
        opacity: 1,
        transition: {delay: custom * 0.2},
    }),
}
const Contact = () => {
    return (
        <motion.div className='container'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
        >
            <div className='col-xl-12'>
                <div className='row'>
                    <motion.div custom={1} variants={leftAnimation}  className='col-3 col-xl-6 mt-5 text-end'>
                        <img className={'ia'}
                            src={"https://imagess.hb.ru-msk.vkcs.cloud/phone.svg"}/>
                    </motion.div>
                    <motion.div custom={5.5} variants={rightAnimation} className='col-9 col-xl-4 mt-5 aaa'>
                        <p>+7 (904)-14-22-577</p>
                    </motion.div>
                    <motion.div custom={2} variants={leftAnimation}  className='col-3 col-xl-6 mt-5 text-end'>
                        <img className={'ia'}
                            src={"https://imagess.hb.ru-msk.vkcs.cloud/gmail.svg"}/>
                    </motion.div>
                    <motion.div custom={6} variants={rightAnimation} className='col-9 col-xl-4 mt-5 aaa'>
                        <p>d1s8h7h@vk.com</p>
                    </motion.div>
                    <motion.div custom={3} variants={leftAnimation} className='col-3 col-xl-6 mt-5 text-xl-end'>
                        <img className={'hh'}
                             src={"https://imagess.hb.ru-msk.vkcs.cloud/hh.png"}/>
                    </motion.div>
                    <motion.div custom={6.5} variants={rightAnimation} className='col-9 col-xl-4 mt-5 aaa'>
                        <p>HH.RU</p>
                    </motion.div>
                    <motion.div custom={4} variants={leftAnimation} className='col-3 col-xl-6 mt-5 text-end'>
                        <img className={'ia'}
                            src={"https://imagess.hb.ru-msk.vkcs.cloud/tg.svg"}/>
                    </motion.div>
                    <motion.div custom={7} variants={rightAnimation} className='col-9 col-xl-4 mt-5 aaa'>
                        <p>@d1s8h7h</p>
                    </motion.div>
                    <motion.div custom={5} variants={leftAnimation} className='col-3 col-xl-6 mt-5 text-end'>
                        <img className={'ia'}
                            src={"https://imagess.hb.ru-msk.vkcs.cloud/git.svg"}/>
                    </motion.div>
                    <motion.div custom={7.5} variants={rightAnimation} className='col-9 col-xl-4 mt-5 aaa'>
                        <p>github.com/oneeightseven</p>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
