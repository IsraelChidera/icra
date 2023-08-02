'use client'

import React, { useState } from 'react';
import arrow from '../public/images/arrow.svg';
import Image from 'next/image';
import { motion } from "framer-motion";
import { TitleText, TypingText } from '@/components/CustomTexts';
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";
import { ExploreText } from '@/components/CustomTexts';
import { exploreWorlds } from '@/constants';
import ExploreCard from '@/components/ExploreCard';


const Explore = () => {
    const [active, setActive] = useState('world-2');

    const handleClick = () => {

    }

    return (
        <section style={{ height: "100vh" }} className='about'>
            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='flexed about-heading'
            >
                <div>
                    <TypingText title="WHY BUILD?" />
                    <div className='flexed-to-center space-x-4'>
                        <h3>WITH ICRA</h3>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>

                <div className='about-heading-details flexed-and-justified'>
                    Vitae sapien pellentesque habitant morbi tristique
                    senectus et netus et. Feugiat nibh sed pulvinar
                    proin gravida hendrerit lectus.


                </div>


            </motion.div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='explore'
            >                

                <div className='explore-card space-x-4'>
                    {
                        exploreWorlds.map((world, index) => (
                            <ExploreCard
                                key={world.id}
                                {...world}
                                active={active}
                                handleClick={setActive}
                            />
                        ))
                    }
                </div>
            </motion.div>
        </section>
    )
}

export default Explore