'use client'

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Link from "next/link";
import Image from "next/image";
import bars from '../public/images/bars.svg';

const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="flex md:justify-around justify-between items-center md:px-0 px-6 pt-4 pb-6"
        >
            <h1 className="text-2xl">Icra</h1>

            <ul className="md:flex hidden space-x-4 items-center text-xs">
                <li>
                    <Link href="#">
                        About
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        Services
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        Technologies
                    </Link>
                </li>

                <li>
                    <Link href="#">
                        How to
                    </Link>
                </li>
            </ul>

            <Link href="#" className="hidden md:block text-xs rounded-2xl border-2 border-white py-2 px-8">
                Contact us
            </Link>

            <Image style={{ width: "33px", height: "26px" }} src={bars} alt="bars" className="md:hidden block" />

        </motion.nav>
    )
}

export default Navbar