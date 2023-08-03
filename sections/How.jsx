'use client'
import React from 'react';
import { motion } from "framer-motion";
import { TypingText } from '@/components/CustomTexts';
import { staggerContainer } from "@/utils/motion";
import arrow from '../public/images/arrow.svg';
import Image from 'next/image';
import howVector from '../public/images/how-vector.svg';
import smallArrow from '../public/images/small-arrow.svg';

const How = () => {
    return (
        <section className='about spacing-btw-elements '>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='flexed about-heading'
            >
                <div>
                    <TypingText title="HOW WE BUILD" />
                    <div className='flexed-to-center space-x-4'>
                        <h3>WITH ICRA VR?</h3>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>

                <div className='about-heading-details flexed-and-justified'>
                    Vitae sapien pellentesque habitant morbi tristique
                    senectus et netus et. Feugiat nibh sed pulvinar
                    proin gravida hendrerit lectus.


                </div>


            </motion.div>

            <div className='how-container'>
                <Image src={howVector} alt="line vector" className='how-vector' />
                <div className='how-container-grid'>
                    <div>
                        <div className='how1'>
                            <p> 1 </p>
                        </div>

                        <div className='flexed'>
                            <Image src={smallArrow} alt="small arrow icon" />
                            <p className='how1-heading'>
                                3D Conception & Design
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='how1'>
                            <p> 2 </p>
                        </div>

                        <div className='flexed'>
                            <Image src={smallArrow} alt="small arrow icon" />
                            <p className='how1-heading'>
                                Interaction Design
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='how1'>
                            <p> 3 </p>
                        </div>

                        <div className='flexed'>
                            <Image src={smallArrow} alt="small arrow icon" />
                            <p className='how1-heading'>
                                VR World User Testing
                            </p>
                        </div>
                    </div>

                    <div>
                        <div className='how1'>
                            <p> 4 </p>
                        </div>

                        <div className='flexed'>
                            <Image src={smallArrow} alt="small arrow icon" />
                            <p className='how1-heading'>
                                ICRA VR Deploy
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default How