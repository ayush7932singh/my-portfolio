"use client";

import React, { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { RootState } from "@/redux/store";
import headerStrings from "@/strings/components/Header";
import getHeaderFieldNames from "@/utils/components/headerHelpers";

import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Nav from "./Nav";

import Link from "next/link";

const Header:React.FC = () => {
    const language = useSelector((state:RootState) => state.language.preferred);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`sticky top-0 z-50 w-full transition-all duration-500 text-white ${
            isScrolled 
                ? "py-4 bg-primary/80 backdrop-blur-md border-b border-white/5 shadow-lg shadow-black/10" 
                : "py-8 xl:py-12 bg-transparent"
        }`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold group cursor-pointer">
                        <span>AS</span>
                        <span className="text-accent transition-all duration-300 inline-block group-hover:scale-125 group-hover:translate-x-1">.</span>
                    </h1>
                </Link>
                
                {/* Status Badge */}
                <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm shadow-sm hover:bg-white/10 transition-all duration-300">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                    </span>
                    <span className="text-xs xl:text-sm font-medium text-white/90 tracking-wide">
                        Available for Work
                    </span>
                </div>
                
                {/* Desktop Navbar & Hire button */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav language={language} headerStrings={headerStrings} />
                    <Link href="/hire">
                        <Button>{getHeaderFieldNames(language, headerStrings, "hire")}</Button>
                    </Link>
                </div>
                
                {/* Mobile Navbar */}
                <div className="xl:hidden">
                    <MobileNav language={language} headerStrings={headerStrings} />
                </div>
            </div>
        </header>
    );
}

export default Header;