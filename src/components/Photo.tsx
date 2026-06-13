"use client";

import React from "react";

import { motion } from "framer-motion";

import Image from "next/image";

const Photo: React.FC = () => {
    return (
        <div className="w-full h-full relative flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { delay: 1.0, duration: 0.4, ease: "easeIn" }
                }}
                className="relative flex items-center justify-center"
            >
                {/* Circle */}
                <motion.svg
                    className="w-[300px] xl:w-[480px] h-[300px] xl:h-[480px]"
                    fill="transparent"
                    viewBox="0 0 506 506"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle
                        cx="253"
                        cy="253"
                        r="250"
                        stroke="#00ff99"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{
                            strokeDasharray: "24 10 0 0"
                        }}
                        animate={{
                            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                            rotate: [120, 360]
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />
                </motion.svg>

                {/* Image - circle ke upar centered */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.2, duration: 0.4, ease: "easeInOut" }
                    }}
                    className="absolute w-[250px] h-[250px] xl:w-[400px] xl:h-[400px] rounded-full overflow-hidden mix-blend-lighten"
                >
                    <Image
                        src="/assets/others/avatar.png"
                        priority
                        quality={80}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 33vw"
                        alt="profile-image"
                        className="object-cover object-top"
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default Photo;