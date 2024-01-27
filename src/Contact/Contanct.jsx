import React from 'react';
import {motion} from "framer-motion";
import '../Contact/Contact.css'
import * as Animations from "../Animations/Animations";

const Contact = () => {
    return (
        <motion.div className='container'
                    initial="hidden"
                    whileInView="visible"
                    viewport={{once: true}}
        >
            <div className='col-xl-12'>
                <div className='row'>
                    <motion.div custom={1} variants={Animations.leftAnimation} className='col-3 col-xl-6 mt-5 text-end'>
                        <img className={'contactImage'}
                             src={"https://imagess.hb.ru-msk.vkcs.cloud/phone.svg"}/>
                    </motion.div>
                    <motion.div custom={5.5} variants={Animations.rightAnimation} className='col-9 col-xl-4 mt-5 contactDescription'>
                        <p>+7 (904)-14-22-577</p>
                    </motion.div>
                    <motion.div custom={2} variants={Animations.leftAnimation} className='col-3 col-xl-6 mt-5 text-end'>
                        <img className={'contactImage'}
                             src={"https://imagess.hb.ru-msk.vkcs.cloud/gmail.svg"}/>
                    </motion.div>
                    <motion.div custom={6} variants={Animations.rightAnimation} className='col-9 col-xl-4 mt-5 contactDescription'>
                        <p>d1s8h7h@vk.com</p>
                    </motion.div>

                    <motion.div custom={3} variants={Animations.leftAnimation} className='col-3 col-xl-6 mt-5 text-xl-end'>
                        <a href="https://hh.ru/resume/37ac8d79ff0b31cbfb0039ed1f76576535626d?hhtmFrom=resume_list"
                           target="_blank">
                            <img className={'hh'}
                                 src={"https://imagess.hb.ru-msk.vkcs.cloud/hh.png"}/>
                        </a>
                    </motion.div>
                    <motion.div custom={6.5} variants={Animations.rightAnimation} className='col-9 col-xl-4 mt-5 contactDescription'>
                        <a href="https://hh.ru/resume/37ac8d79ff0b31cbfb0039ed1f76576535626d?hhtmFrom=resume_list"
                           target="_blank">
                            <p style={{textDecoration: "underline"}}>HH.RU/resume/...</p>
                        </a>
                    </motion.div>


                    <motion.div custom={4} variants={Animations.leftAnimation} className='col-3 col-xl-6 mt-5 text-end'>
                        <a href="https://web.telegram.org/k/#@d1s8h7h" target="_blank">
                            <img className={'contactImage'}
                                 src={"https://imagess.hb.ru-msk.vkcs.cloud/tg.svg"}/>
                        </a>
                    </motion.div>
                    <motion.div custom={7} variants={Animations.rightAnimation} className='col-9 col-xl-4 mt-5 contactDescription'>
                        <a href="https://web.telegram.org/k/#@d1s8h7h" target="_blank">
                            <p>@d1s8h7h</p>
                        </a>
                    </motion.div>

                    <motion.div custom={5} variants={Animations.leftAnimation} className='col-3 col-xl-6 mt-5 text-end'>
                        <a href="https://github.com/oneeightseven" target="_blank">
                            <img className={'contactImage'}
                                 src={"https://imagess.hb.ru-msk.vkcs.cloud/git.svg"}/>
                        </a>
                    </motion.div>
                    <motion.div custom={7.5} variants={Animations.rightAnimation} className='col-9 col-xl-4 mt-5 contactDescription'>
                        <a href="https://github.com/oneeightseven" target="_blank">
                            <p>github.com/oneeightseven</p>
                        </a>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
};

export default Contact;
