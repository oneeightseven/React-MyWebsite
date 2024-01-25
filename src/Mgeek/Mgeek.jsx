import React from 'react';
import {motion} from "framer-motion";
import '../Mgeek/Mgeek.css'

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

const Mgeek = () => {
    return (
        <>
            <motion.div className='container' initial="hidden"
                        whileInView="visible"
                        viewport={{once: true}}>
                <motion.hr custom={1} variants={leftAnimation} className='mt-4'
                           style={{backgroundColor: "gray", height: "0.1px"}}/>
                <div className='row'>
                    <motion.div custom={2} variants={leftAnimation} className='col-12 text-center '>
                        <p className={'projectName'}>ONLINE STORE USING BLAZOR AND .NET</p>
                    </motion.div>
                    <motion.div custom={2} variants={leftAnimation} className='col-12 text-center'>
                        <p className='projectDescription'>The site user can go through the entire process from selecting
                            a product to viewing the order in the order history.The user can filter products and compare
                            characteristics. After the final selection, products can be added to the cart.Items in the
                            cart will be saved in the database, and items from the cart can be accessed outside the
                            current browser. You can use a discount coupon in your shopping cart to reduce the cost of
                            your order. After placing an order, the order validation process occurs. In any case, within
                            5 minutes the order and its status will be displayed in your personal account. The admin
                            panel allows you to perform all CRUD operations with goods, remaining goods in warehouses,
                            and promotional codes.You can also use the admin panel to find an order by customer phone
                            number.</p>
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
                                    <p className={'projectApis'}>The web application consists of 6 API:</p>
                                </motion.div>
                                <motion.div custom={4} variants={leftAnimation}
                                            className='col-12 text-xl-start '>
                                    <p className={'projectApi'}>- Authentication API(JWT bearer)</p>
                                </motion.div>
                                <motion.div custom={5} variants={leftAnimation}
                                            className='col-12 text-xl-start '>
                                    <p className={'projectApi'}>- Product API, it is where the interaction of products
                                        and their residues occurs..</p>
                                </motion.div>
                                <motion.div custom={6} variants={leftAnimation}
                                            className='col-12 text-xl-start '>
                                    <p className={'projectApi'}>- Promocode API, well, these are just promotional
                                        codes...</p>
                                </motion.div>
                                <motion.div custom={7} variants={leftAnimation}
                                            className='col-12 text-xl-start '>
                                    <p className={'projectApi'}>- ShoppingCart API, storing products, storing
                                        promotional codes inside the cart, etc </p>
                                </motion.div>
                                <motion.div custom={8} variants={leftAnimation}
                                            className='col-12 text-xl-start '>
                                    <p className={'projectApi'}>- Order API, all validated orders are stored and
                                        processed here..</p>
                                </motion.div>
                                <motion.div custom={9} variants={leftAnimation}
                                            className='col-12 text-xl-start '>
                                    <p className={'projectApi'}>- Orchestrator, a service that validates the user’s
                                        order. Initially, it receives a “dirty” order, validates it using other APIs,
                                        and returns a “clean” order to the queue</p>
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
                                    <p className={'projectApi'}>- .NET 8, EF 8</p>
                                </motion.div>
                                <motion.div custom={11} variants={rightAnimation}
                                            className='col-12 text-start'>
                                    <p className={'projectApi'}>- MSSQL + Redis (cache)</p>
                                </motion.div>
                                <motion.div custom={12} variants={rightAnimation}
                                            className='col-12 text-start'>
                                    <p className={'projectApi'}>- AutoMapper</p>
                                </motion.div>
                                <motion.div custom={13} variants={rightAnimation}
                                            className='col-12 text-start'>
                                    <p className={'projectApi'}>- RabbitMQ</p>
                                </motion.div>
                                <motion.div custom={14} variants={rightAnimation}
                                            className='col-12 text-start'>
                                    <p className={'projectApi'}>- Serilog</p>
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
                        <img className='diagramSecond'
                             src={"https://imagess.hb.ru-msk.vkcs.cloud/Blaze.png"}/>
                    </motion.div>
                </div>
                <motion.hr custom={8} variants={leftAnimation} className='mt-xl-5'
                           style={{backgroundColor: "black", height: "0.1px"}}/>
            </motion.div>


            <motion.div className='container'>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-xl-2'} custom={3} variants={leftAnimation}>
                        <p className={'videoDescription text-center'}>A JWT token is used for authorization. The token
                            and payload are stored in browser cookies.
                            Additionally, all payloads are first encrypted and only then added to cookies.</p>
                    </motion.div>
                    <motion.div className={'col-6 mt-xl-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/videos/AuthorizeMgeek.mp4"
                        />
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={leftAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/videos/addCart.mp4"/>
                    </motion.div>
                    <motion.div className={'col-6 mt-2 align-items-center'} custom={3} variants={rightAnimation}>
                        <p className={'videoDescription text-center'}>Demonstration of filtering, sorting, adding
                            products to the basket. The functionality of displaying the absence of a product in stock
                            was also demonstrated, so adding it to your shopping cart will not be possible.</p>
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-2'} custom={3} variants={leftAnimation}>
                        <p className={'videoDescription text-center'}>Promo codes. Their activation and their
                            absence.</p>
                    </motion.div>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/videos/Promo.mp4"/>
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/videos/OrderCreate.mp4"/>
                    </motion.div>
                    <motion.div className={'col-6 mt-2 align-items-center'} custom={3} variants={rightAnimation}>
                        <p className={'videoDescription text-center'}>If there are enough promotional codes and goods in
                            stock to place an order, the user will be able to place it and receive the appropriate
                            confirmation in his personal account, in the order history.</p>
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-2'} custom={3} variants={leftAnimation}>
                        <p className={'videoDescription text-center'}>But, if the promotional code runs out when placing
                            an order, the user will see a corresponding message in their order history.</p>
                    </motion.div>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/videos/ProductIsOutOfStock.mp4"/>
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/videos/PromoHasExpired.mp4"/>
                    </motion.div>
                    <motion.div className={'col-6 mt-2 align-items-center'} custom={3} variants={rightAnimation}>
                        <p className={'videoDescription text-center'}>Or, when placing an order, the goods in the
                            warehouse suddenly ran out... This will also be displayed to the user.</p>
                    </motion.div>
                </motion.div>

                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-2'} custom={3} variants={leftAnimation}>
                        <p className={'videoDescription text-center'}>The site administrator can find placed user orders
                            using the specified phone number when placing an order.</p>
                    </motion.div>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/videos/AdminFoundOrder.mp4"/>
                    </motion.div>
                </motion.div>


                <motion.div className='row align-items-center ' initial="hidden" whileInView="visible"
                            viewport={{once: true}}>
                    <motion.div className={'col-6 mt-5'} custom={3} variants={rightAnimation}>
                        <video className={'video-player'} controls loop
                               src="https://imagess.hb.ru-msk.vkcs.cloud/videos/Adminka.mp4"/>
                    </motion.div>
                    <motion.div className={'col-6 mt-2'} custom={3} variants={leftAnimation}>
                        <p className={'videoDescription text-center'}>Demonstration of the admin panel.</p>
                    </motion.div>

                </motion.div>

            </motion.div>
        </>
    );
};

export default Mgeek;
