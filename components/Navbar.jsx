'use client'

import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Link from "next/link";

const Navbar = () => {
    return (
        <motion.nav
            variants={navVariants}
            initial="hidden"
            whileInView="show"
            className="flex justify-around items-center pt-4 pb-6"
        >
            <h1 className="text-2xl">Icra</h1>

            <ul className="flex space-x-4 items-center text-xs">
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

            <Link href="#" className="text-xs rounded-2xl border-2 border-white py-2 px-8">
                Contact us
            </Link>
            
        </motion.nav>
    )
}

export default Navbar