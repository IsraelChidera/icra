'use client'

import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import heroBanner from '../public/images/hero-banner-1.svg';
import heroBanner2 from '../public/images/hero-banner-2.svg';
import bgPattern from '../public/images/background-pattern.svg';
import heroImage from '../public/images/hero-image.svg';
import call from '../public/images/call.svg';
import location from '../public/images/location.svg';
import mail from '../public/images/mail.svg';
import Image from "next/image";

const Hero = () => {
    return (
        <>
            <section className="hero relative">
                <motion.div
                    className=" hero-div"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.25 }}
                >
                    <div className="hero-container">

                        <motion.div
                            variants={slideIn('top', 'tween', 0.4, 2)}
                            className="z-10 hero-image md:hidden block"
                        >
                            <Image src={heroImage} alt="icra hero image" />
                        </motion.div>

                        <motion.h1
                            variants={textVariant(1.1)}
                        >
                            <Image src={heroBanner} className="hero-text"  alt="search" />
                            <Image src={heroBanner2} className="hero-text"  alt="search" />
                        </motion.h1>

                        <motion.div
                            variants={textVariant(1.2)}
                            className="hero-desc "
                        >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            nisl tincidunt eget. Lectus mauris eros in vitae .
                        </motion.div>

                        <motion.div
                            variants={textVariant(1.4)}
                            className="hero-btn"
                        >
                            <button
                                variants={textVariant(1.4)}
                                className="text-xs rounded-2xl border-2 border-white py-2 px-8"
                            >

                                Build your world
                            </button>
                        </motion.div>
                    </div>

                    <motion.div
                        variants={slideIn('top', 'tween', 0.4, 2)}
                        className="z-10 hero-image md:block hidden"
                    >
                        <Image src={heroImage} alt="icra hero image" className="hero-image" />
                    </motion.div>
                </motion.div>

                <div >
                    <Image
                        src={bgPattern}
                        alt="icra pattern"
                        className="h-10 hero-pattern"
                    />
                </div>

                <div className="hero-contact md:pb-10">
                    <div className="hero-contact-div space-x-4">
                        <div className="hero-contact-border flexed md:space-x-2">
                            <Image src={location} alt="location" className=""/>
                            <div>
                                <h4>Pay us a Visit</h4>
                                <p className="text-xs">
                                    Union St, Seattle, WA 98101, United States
                                </p>
                            </div>
                        </div>

                        <div className=" hero-contact-border flexed md:space-x-4">
                            <Image src={call} alt="location" />
                            <div>
                                <h4>Give us a call</h4>
                                <p className="text-xs">
                                    (110) 1111-1010
                                </p>
                            </div>
                        </div>

                        <div className="flexed md:space-x-4">
                            <Image src={mail} alt="location" />
                            <div>
                                <h4>Send us a Message</h4>
                                <p className="text-xs">
                                    contact@icra.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero