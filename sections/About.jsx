'use client'
import Image from 'next/image';
import React from 'react';
import arrow from '../public/images/arrow.svg';
import aboutImage from '../public/images/about-image.svg';
import vector1 from '../public/images/about-vector-1.svg';
import vector2 from '../public/images/about-vector-2.svg';
import { motion } from "framer-motion";
import { TypingText } from '@/components';
import { fadeIn, slideIn, staggerContainer, textVariant } from "@/utils/motion";

const About = () => {
    return (
        <section className='about'>
            <div className='flexed about-heading'>
                <div>
                    <h2>Introduction</h2>
                    <div className='flexed-to-center space-x-4'>
                        <h3>To ICRA VR</h3>
                        <Image src={arrow} alt="arrow" />
                    </div>
                </div>

                <div className='about-heading-details flexed-and-justified'>
                    Vitae sapien pellentesque habitant morbi tristique
                    senectus et netus et. Feugiat nibh sed pulvinar
                    proin gravida hendrerit lectus. Mi sit amet mauris
                    commodo quis imperdiet massa tincidunt nunc.
                    Viverra aliquet eget sit amet tellus. Ornare lectus
                    sit amet est placerat in. Lectus magna fringilla
                    urna porttitor rhoncus vitae.
                </div>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.25 }}
                className='flexed flexed-about-div relative'
            >
                <Image
                    src={aboutImage} alt="man wearing vr" className='flexed-about-div-img' />

                <Image src={vector1} alt="vector 1" id='vector1' />
                <motion.img 
                    variants={fadeIn('up', 'tween', 0.3, 1)} 
                    src="/images/about-vector-2.svg" alt="vector 2" id='vector2' />

                <motion.div variants={fadeIn('up', 'tween', 0.3, 1)} className='flexed-about'>
                    <h2>
                        About
                    </h2>
                    <h3> ICRA VR </h3>

                    <p>
                        Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus
                        urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida
                        dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in.
                        Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet
                        sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam
                        etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet
                        cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
                        retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
                        n tempor.
                    </p>

                    <button id='about-btn'>
                        Let's get in touch
                    </button>
                </motion.div>
            </motion.div>
        </section>
    )
}

export default About