import React from 'react';
import '../WebTech/WebTech.css'
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

const WebTech = () => {
    return (
        <>
            <motion.div className='container' initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}>
                <motion.hr custom={1} variants={leftAnimation} className='mt-4'
                           style={{backgroundColor: "gray", height: "0.1px"}}/>
                <div className='row'>
                    <motion.div custom={2} variants={leftAnimation} className='col-12 text-center '>
                        <p className={'projectName'}>BLOG OF ARTICLES USING REACT AND .NET</p>
                    </motion.div>
                    <motion.div custom={2} variants={leftAnimation} className='col-12 text-center'>
                        <p className='projectDescription'>This site provides the opportunity to publish your articles,
                            scientific works or news.
                            Article authors can track user engagement with their articles. In your personal account, you
                            can view the history of articles that were rated (like/dislike), or see a list of your
                            articles.In the notification history, you can get information about the
                            likes of the article. Alerts
                            are sent instantly using a web socket.</p>
                    </motion.div>
                </div>
            </motion.div>
            <motion.div className='container' initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}>
                <motion.hr custom={1.5} variants={leftAnimation} className='mt-xl-4'
                           style={{backgroundColor: "black", height: "0.1px"}}/>


                    <div className='col-12'>
                        <div className='row'>
                            <div className='col-6'>
                                <div className="col-12">
                                    <motion.div custom={3} variants={leftAnimation}
                                                className='col-12 text-xl-start  mt-xl-4'>
                                        <p className={'projectApis'}>The web application consists of 5 API:</p>
                                    </motion.div>
                                    <motion.div custom={4} variants={leftAnimation}
                                                className='col-12 text-xl-start '>
                                        <p className={'projectApi'}>- Authentication API(JWT bearer)</p>
                                    </motion.div>
                                    <motion.div custom={5} variants={leftAnimation}
                                                className='col-12 text-xl-start '>
                                        <p className={'projectApi'}>- Article API, all CRUD operations of interaction
                                            with user
                                            articles</p>
                                    </motion.div>
                                    <motion.div custom={6} variants={leftAnimation}
                                                className='col-12 text-xl-start '>
                                        <p className={'projectApi'}>- A regular gateway using Ocelot</p>
                                    </motion.div>
                                    <motion.div custom={7} variants={leftAnimation}
                                                className='col-12 text-xl-start '>
                                        <p className={'projectApi'}>- Feedback API, this api is responsible for all user
                                            activity related to articles </p>
                                    </motion.div>
                                    <motion.div custom={8} variants={leftAnimation}
                                                className='col-12 text-xl-start '>
                                        <p className={'projectApi'}>- Notification API, well, this API already sends
                                            notifications to
                                            article authors</p>
                                    </motion.div>
                                </div>
                            </div>
                            <div className='col-6'>
                                <div className="col-12">
                                    <motion.div custom={9} variants={rightAnimation}
                                                className='col-12 mt-xl-4'>
                                        <p className={'projectApis'}>Technology stack used on the server side:</p>
                                    </motion.div>
                                    <motion.div custom={10} variants={rightAnimation}
                                                className='col-12 text-start '>
                                        <p className={'projectApi'}>- .NET 8, EF 8, SignalR 7</p>
                                    </motion.div>
                                    <motion.div custom={11} variants={rightAnimation}
                                                className='col-12 text-start'>
                                        <p className={'projectApi'}>- MSSQL + mongoDB</p>
                                    </motion.div>
                                    <motion.div custom={12} variants={rightAnimation}
                                                className='col-12 text-start'>
                                        <p className={'projectApi'}>- Ocelot API Gateway</p>
                                    </motion.div>
                                    <motion.div custom={13} variants={rightAnimation}
                                                className='col-12 text-start'>
                                        <p className={'projectApi'}>- Minimal API with clean architecture</p>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>

                <motion.hr custom={8} variants={leftAnimation} className='mt-xl-5'
                           style={{backgroundColor: "black", height: "0.1px"}}/>
            </motion.div>
            <motion.div className='container' initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}>
                <div className='row'>
                    <motion.div custom={8} variants={leftAnimation} className='col-12 offset-xl-2 col-xl-8  mt-xl-4'>
                        <img className='diagram'
                             src={"https://imagess.hb.ru-msk.vkcs.cloud/Пустой%20диаграммой.png"}/>
                    </motion.div>
                </div>
                <motion.hr custom={8} variants={leftAnimation} className='mt-xl-5'
                           style={{backgroundColor: "black", height: "0.1px"}}/>
            </motion.div>


            <motion.div className='container'>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <motion.div className={'col-6 mt-xl-2'} custom={3} variants={leftAnimation}>
                        <p className={'videoDescription text-center'}>A JWT token is used for authorization. The token
                            and payload are stored in browser cookies.
                            Additionally, all payloads are first encrypted and only then added to cookies.</p>
                    </motion.div>
                    <motion.div className={'col-6 mt-xl-5'} custom={3} variants={rightAnimation}>
                            <video className={'video-player'} controls loop src = "https://imagess.hb.ru-msk.vkcs.cloud/Authroize.mp4"
                                />
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={leftAnimation}>
                        <video className={'video-player'} controls loop src = "https://imagess.hb.ru-msk.vkcs.cloud/PersonalArea.mp4"/>
                    </motion.div>
                    <motion.div className={'col-6 mt-2 align-items-center'} custom={3} variants={rightAnimation}>
                        <p className={'videoDescription text-center'}>In the personal account, the user can view
                            the
                            list of his posts or the list of posts that he rated.</p>
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible" viewport={{once: true}}>
                    <motion.div className={'col-6 mt-2'} custom={3} variants={leftAnimation}>
                        <p className={'videoDescription text-center'}>When adding an article, the user can add up to 4
                            photos, a title, header and body. To add an article, you must log in to the site.</p>
                    </motion.div>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop src = "https://imagess.hb.ru-msk.vkcs.cloud/AddNews.mp4"/>
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/Liked.mp4"/>
                    </motion.div>
                    <motion.div className={'col-6 mt-2 align-items-center'} custom={3} variants={rightAnimation}>
                    <p className={'videoDescription text-center'}>The user can rate the article. The author of the
                            article will receive a notification in real time. The author can also view a list of all
                            alerts. After viewing an alert, it will be marked as viewed.</p>
                    </motion.div>
                </motion.div>

            </motion.div>
        </>
    )
        ;
};

export default WebTech;
