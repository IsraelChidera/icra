'use client'
import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';

export const TypingText = ({ title }) => (
    <motion.p
        variants={textContainer}
        style={{ color: "white", fontSize: "36px", fontWeight: "700" }}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
);

export const ExploreText = ({ title }) => (
    <motion.p
        variants={textContainer}
        style={{ color: "white" }}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
);

export const TitleText = ({ title }) => (
    <motion.p
        variants={textVariant2}
        style={{ color: "white" }}
    >
        {Array.from(title).map((letter, index) => (
            <motion.span variants={textVariant2} key={index}>
                {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
        ))}
    </motion.p>
);


// export const TitleText = ({ title }) => {
//     <motion.h2
//         variants={textContainer}
//         initial="hidden"
//         whileInView="show"
//         style={{ color: "white", height:"50px", width:"40px", fontSize: "36px", fontWeight: "700" }}
//     >
//         {title}
//     </motion.h2>
// }