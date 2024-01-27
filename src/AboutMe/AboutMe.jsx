import React from 'react';
import {motion} from "framer-motion";
import '../AboutMe/AboutMe.css';
import * as Animations from "../Animations/Animations";

const AboutMe = () => {
    return (
        <>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                className='container mb-xl-5'
            >
                <div className='col-xl-12 col-12 mt-xl-0 mt-2'>
                    <motion.div custom={1} variants={Animations.rightAnimation} className='row px-xl-3 pt-xl-4 mt-xl-4 carta'>
                        <div className='col-xl-3'>
                            <motion.img custom={1} variants={Animations.leftAnimation} className='avatar mb-xl-2 mt-xl-1'
                                        src={"https://imagess.hb.ru-msk.vkcs.cloud/me.png"}/>
                            <a href="/Resume.pdf" download>
                                <motion.button custom={1} variants={Animations.leftAnimation}
                                               className={'resumeButton mt-xl-5 mt-3'}>DOWNLOAD RESUME
                                </motion.button>
                            </a>

                        </div>
                        <div className='col-xl-9 col-12 tableCard'>
                            <motion.p custom={1} variants={Animations.rightAnimation} className='fio text-center text-xl-start'>
                                <span style={{color: "black", letterSpacing: '3px'}}>HI I'M </span>
                                <span style={{color: "blueviolet"}}>ALEXANDER VOLKOV</span>
                            </motion.p>
                            <motion.p custom={2} variants={Animations.rightAnimation} className={'jobTitle text-xl-start text-center'}>Backend Developer
                            </motion.p>
                            <motion.p custom={3} variants={Animations.rightAnimation} className={'description'}>Web developer with 4
                                years of development experience. During
                                this time, developed
                                various services, including authorization services, notifications, user feedback,
                                logging and gateway configurations. In addition, developed an asynchronous AMPQ
                                service-orchestrator for conducting transactions between several API.
                            </motion.p>
                            <motion.p custom={4} variants={Animations.rightAnimation} className={'description'}>My experience also
                                includes developing responsive front-end
                                design using React and Blazor.
                            </motion.p>
                            <motion.p custom={5} variants={Animations.rightAnimation} className={'description'}>I can communicate
                                effectively and work in a team. Willing to
                                perform a variety of tasks and always open to learning new technologies.
                            </motion.p>
                            <div className='col-xl-12 mt-xl-2 col-12'>
                                <div className='row'>
                                    <motion.div custom={6} variants={Animations.upDownAnimation} className='col-4 col-xl-2'>
                                        <p className='tableTitle'>Age:</p>
                                    </motion.div>
                                    <motion.div custom={6} variants={Animations.upDownAnimation} className='col-8 col-xl-4'>
                                        <p className='tableDes'>20</p>
                                    </motion.div>
                                    <motion.div custom={6.5} variants={Animations.upDownAnimation} className='col-4 col-xl-2'>
                                        <p className='tableTitle'>Phone:</p>
                                    </motion.div>
                                    <motion.div custom={6.5} variants={Animations.upDownAnimation} className='col-8 col-xl-4'>
                                        <p className='tableDes'>+7 (904) 14-22-577</p>
                                    </motion.div>
                                    <motion.div custom={7} variants={Animations.upDownAnimation} className='col-4 col-xl-2'>
                                        <p className='tableTitle'>Live in:</p>
                                    </motion.div>
                                    <motion.div custom={7} variants={Animations.upDownAnimation} className='col-8 col-xl-4'>
                                        <p className='tableDes'>Sochi/Moscow</p>
                                    </motion.div>
                                    <motion.div custom={7.5} variants={Animations.upDownAnimation} className='col-4 col-xl-2'>
                                        <p className='tableTitle'>Email:</p>
                                    </motion.div>
                                    <motion.div custom={7.5} variants={Animations.upDownAnimation} className='col-8 col-xl-4'>
                                        <p className='tableDes'>d1s8h7h@vk.com</p>
                                    </motion.div>
                                    <motion.div custom={8} variants={Animations.upDownAnimation} className='col-4 col-xl-2'>
                                        <p className='tableTitle'>Telegram:</p>
                                    </motion.div>
                                    <motion.div custom={8} variants={Animations.upDownAnimation} className='col-8 col-xl-4'>
                                        <p className='tableDes'>@d1s8h7h</p>
                                    </motion.div>
                                    <motion.div custom={8.5} variants={Animations.upDownAnimation} className='col-4 col-xl-2'>
                                        <p className='tableTitle'>GitHub:</p>
                                    </motion.div>
                                    <motion.div custom={8.5} variants={Animations.upDownAnimation} className='col-6 text-start col-xl-4'>
                                        <p className='tableDes'>github.com/oneeightseven</p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='col-xl-12'>
                                <div className='row'>
                                    <div className='col-4 col-xl-12 text-xl-start up'>
                                        <motion.p custom={9} variants={Animations.upDownAnimation} className='tableTitle'>
                                            Links:
                                        </motion.p>
                                    </div>
                                    <div className='col-4 mx-3 mt-xl-2'>
                                        <a href="https://github.com/oneeightseven" target="_blank">
                                            <motion.img custom={9} variants={Animations.upDownAnimation} className={'icos'}
                                                        src={"https://imagess.hb.ru-msk.vkcs.cloud/git.svg"}/>
                                        </a>
                                        <a href="https://web.telegram.org/k/#@d1s8h7h" target="_blank">
                                            <motion.img custom={10} variants={Animations.upDownAnimation}
                                                        className={'icos secondIcos'}
                                                        src={"https://imagess.hb.ru-msk.vkcs.cloud/tg.svg"}/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.div>

            <motion.div className='container' initial="hidden" viewport={{once: true}}
                        whileInView="visible">
                <div className='col-xl-12'>
                    <div className='row'>
                        <div className={"col-5 col-xl-6 text-end"}>
                            <motion.h2 custom={5} variants={Animations.rightAnimation}>C#</motion.h2>
                        </div>
                        <div className="col-6">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={5} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={5.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={6} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={6.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                                <motion.div custom={7} variants={Animations.rightAnimation} className="square5"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={7} variants={Animations.rightAnimation}>ASP.NET CORE 5-8</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={7} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={7.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={8} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={8.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                                <motion.div custom={9} variants={Animations.rightAnimation} className="square5"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={9} variants={Animations.rightAnimation}>EF CORE 5-8</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={9} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={9.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={10} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={10.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                                <motion.div custom={11} variants={Animations.rightAnimation} className="square5"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={11} variants={Animations.rightAnimation}>Redis(cache)</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={11} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={11.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={12} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={12.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                                <motion.div custom={13} variants={Animations.rightAnimation} className="square5"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={13} variants={Animations.rightAnimation}>Serilog</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={13} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={13.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={14} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={14.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                                <motion.div custom={15} variants={Animations.rightAnimation} className="square5"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={15} variants={Animations.rightAnimation}>SQL/noSQL</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={15} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={15.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={16} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={16.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={16.5} variants={Animations.rightAnimation}>ReactJS</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={16.5} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={17} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={17.5} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={18.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={18.5} variants={Animations.rightAnimation}>Blazor</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={18.5} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={19} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={20} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={20.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                            </div>
                        </div>


                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={20.5} variants={Animations.rightAnimation}>AutoMapper</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={21} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={21.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={22} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={22.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={22.5} variants={Animations.rightAnimation}>Git/GitHub</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={22.5} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={23} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={23.5} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={24} variants={Animations.rightAnimation} className="square4"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={24} variants={Animations.rightAnimation}>Nginx/Ocelot</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={24} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={24.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={25} variants={Animations.rightAnimation} className="square3"></motion.div>
                                <motion.div custom={25.5} variants={Animations.rightAnimation} className="square4"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={26} variants={Animations.rightAnimation}>Docker</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={26} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={26.5} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={27} variants={Animations.rightAnimation} className="square3"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={27} variants={Animations.rightAnimation}>RabbitMQ</motion.h2>
                        </div>
                        <div className="col-6  mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={27.5} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={28} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={28.5} variants={Animations.rightAnimation} className="square3"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3"}>
                            <motion.h2 custom={28.5} variants={Animations.rightAnimation}>SignalR</motion.h2>
                        </div>
                        <div className="col-6 mt-3">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={28.5} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={29} variants={Animations.rightAnimation} className="square2"></motion.div>
                                <motion.div custom={29.5} variants={Animations.rightAnimation} className="square3"></motion.div>
                            </div>
                        </div>
                        <div className={"col-5 col-xl-6 text-end mt-3 mb-4"}>
                            <motion.h2 custom={28.5} variants={Animations.rightAnimation}>Unix(Ubuntu)</motion.h2>
                        </div>
                        <div className="col-6 mt-3 mb-4">
                            <div className="d-flex justify-content-start">
                                <motion.div custom={28.5} variants={Animations.rightAnimation} className="square"></motion.div>
                                <motion.div custom={29} variants={Animations.rightAnimation} className="square2"></motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    );
};

export default AboutMe;
