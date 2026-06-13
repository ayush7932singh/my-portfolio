"use client";

import React from "react";
import { motion } from "framer-motion";

import { HeaderStrings, LinkItems } from "@/types/components/Header";
import getHeaderFieldNames from "@/utils/components/headerHelpers";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Nav:React.FC<{ language: string; headerStrings:Record<"en" | "br", HeaderStrings> }> = ({ language, headerStrings}) => {
    const pathname = usePathname();
    
    const links:LinkItems[] = [
        {
            index: 1,
            name: getHeaderFieldNames(language, headerStrings, "home"),
            path: "/"
        },
        {
            index: 2,
            name: getHeaderFieldNames(language, headerStrings, "education"),
            path: "/education"
        },
        {
            index: 3,
            name: getHeaderFieldNames(language, headerStrings, "experiences"),
            path: "/experiences"
        },
        {
            index: 4,
            name: getHeaderFieldNames(language, headerStrings, "skills"),
            path: "/skills"
        },
        {
            index: 5,
            name: getHeaderFieldNames(language, headerStrings, "projects"),
            path: "/projects"
        },
        {
            index: 6,
            name: getHeaderFieldNames(language, headerStrings, "about"),
            path: "/about"
        }
    ];

    return (
        <nav className="flex gap-8 items-center">
            {links.map((link:LinkItems) => {
                const isActive = link.path === pathname;
                return (
                    <Link 
                        href={link.path}
                        key={link.index}
                        className={`relative py-2 font-medium transition-colors duration-300 ${
                            isActive ? "text-accent" : "text-white/80 hover:text-accent"
                        }`}
                    >
                        {link.name}
                        {isActive && (
                            <motion.span 
                                layoutId="activeUnderline"
                                className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent rounded-full"
                                transition={{ type: "spring", stiffness: 380, damping: 30 }}
                            />
                        )}
                    </Link>
                );
            })}
        </nav>
    );
}

export default Nav;