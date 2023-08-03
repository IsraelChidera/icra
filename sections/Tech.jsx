'use client'

import Image from "next/image";
import techBg from '../public/images/tech-bg.svg';
import tech1 from '../public/images/tech-1.svg';
import tech2 from '../public/images/tech-2.svg';
import tech3 from '../public/images/tech-3.svg';
import tech4 from '../public/images/tech-4.svg';

const Tech = () => {
    return (
        <section className="about spacing-btw-elements ">
            <div className="tech-bg-container">
                <Image src={techBg} alt="background image" />
                <div className="tech-bg-heading">
                    <h2>
                        TECHNOLOGIES & HARDWARE
                    </h2>
                    <h3>
                        USED BY HYDRA VR.
                    </h3>
                </div>
            </div>

            <div className="tech-support-container ">
                <Image src={tech1} alt="tech support logo" />

                <Image src={tech2} alt="tech support logo" />

                <Image src={tech3} alt="tech support logo" />

                <Image src={tech4} alt="tech support logo" />
            </div>
        </section>
    )
}

export default Tech