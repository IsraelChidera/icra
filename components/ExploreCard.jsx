'use client';

import { motion } from 'framer-motion';
import { navVariants, fadeIn } from "@/utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
    <motion.div
        variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
        className={`explore-card ${active === id ? 'exp1' : 'exp'} `}
        onClick={() => handleClick(id)}
    >
        <img
            src={imgUrl}
            style={{ borderRadius: "24px", position: "absolute", height: "100%", width: "100%", objectFit: "cover" }}
        />

        {
            active !== id ? (
                <h3 className='explore-heading' style={{ color: "white", position: "absolute", bottom: "10px", left: "5px", fontSize: "18px" }}>
                    {title}
                </h3>
            ) : (<div style={{ color: "white", position: "absolute", bottom: "10px", left: "50%", fontWeight: "700" }}>
                <h3 style={{fontSize: "28px"}}>
                    {title}
                </h3>
                <p style={{textDecoration: "underline", fontWeight:"300"}}>
                    Explore
                </p>
            </div>)
        }
    </motion.div>
);

export default ExploreCard;