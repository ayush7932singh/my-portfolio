"use client";

import React from "react";

import { useSelector } from "react-redux";
import Image from "next/image";

import { FaGraduationCap } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import { IoOpenOutline } from "react-icons/io5";
import { LiaGraduationCapSolid } from "react-icons/lia";

import { motion } from "framer-motion";

import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { RootState } from "@/redux/store";
import { EducationItems, CertificationItems } from "@/types/pages/Education";
import getDegreeFieldNames from "@/utils/pages/educationHelpers";

import Link from "next/link";

const Education:React.FC = () => {
    const language = useSelector((state:RootState) => state.language.preferred);

    const education:EducationItems<string>[] = [
        {
            index: 1,
            label: "01",
            course: getDegreeFieldNames(language, "first", "name"),
            website: "https://www.goel.edu.in/",
            university: "Goel Institute of Higher Studies",
            location: "Lucknow, Uttar Pradesh",
            cgpa: "7.4 CGPA",
            start: getDegreeFieldNames(language, "first", "start"),
            end: getDegreeFieldNames(language, "first", "end")
        },
        {
            index: 2,
            label: "02",
            course: getDegreeFieldNames(language, "second", "name"),
            website: "https://www.niet.co.in/",
            university: "Noida Institute of Engineering & Technology",
            location: "Greater Noida, Uttar Pradesh",
            cgpa: "7.5 CGPA",
            start: getDegreeFieldNames(language, "second", "start"),
            end: getDegreeFieldNames(language, "second", "end")
        }
    ];

    const certifications:CertificationItems<string>[] = [
        {
            index: 1,
            title: "AWS Cloud Practitioner",
            school: "Amazon Web Services",
            icon: "",
            issuance: "2024",
            credential: "https://aws.amazon.com/certification/certified-cloud-practitioner/",
            competences: [
                { index: 1, name: "AWS" },
                { index: 2, name: "|" },
                { index: 3, name: "Cloud Computing" }
            ]
        },
        {
            index: 2,
            title: "Android Developer Virtual Internship",
            school: "EduSkills (Google)",
            icon: "",
            issuance: `${language.includes("en-us") ? "March 2026" : "Março 2026"}`,
            credential: "https://eduskills.academy/",
            competences: [
                { index: 1, name: "Android" },
                { index: 2, name: "|" },
                { index: 3, name: "Java" }
            ]
        },
        {
            index: 3,
            title: "Salesforce Developer",
            school: "LearnNowX",
            icon: "",
            issuance: "2025",
            credential: "https://www.learnnowx.com/",
            competences: [
                { index: 1, name: "Salesforce" },
                { index: 2, name: "|" },
                { index: 3, name: "CRM" }
            ]
        },
        {
            index: 4,
            title: "Java Programming",
            school: "Infosys Springboard",
            icon: "",
            issuance: "2024",
            credential: "https://infyspringboard.onwingspan.com/",
            competences: [
                { index: 1, name: "Java" },
                { index: 2, name: "|" },
                { index: 3, name: "OOPs" }
            ]
        },
        {
            index: 5,
            title: "Python Programming",
            school: "Infosys Springboard",
            icon: "",
            issuance: "2024",
            credential: "https://infyspringboard.onwingspan.com/",
            competences: [
                { index: 1, name: "Python" },
                { index: 2, name: "|" },
                { index: 3, name: "Programming" }
            ]
        },
        {
            index: 6,
            title: "Linux Fundamentals",
            school: "Infosys Springboard",
            icon: "",
            issuance: "2024",
            credential: "https://infyspringboard.onwingspan.com/",
            competences: [
                { index: 1, name: "Linux" },
                { index: 2, name: "|" },
                { index: 3, name: "OS" }
            ]
        },
        {
            index: 7,
            title: "Web Development",
            school: "Aikam",
            icon: "",
            issuance: "2023",
            credential: "https://www.aikam.in/",
            competences: [
                { index: 1, name: "HTML" },
                { index: 2, name: "|" },
                { index: 3, name: "CSS" },
                { index: 4, name: "|" },
                { index: 5, name: "JavaScript" }
            ]
        }
    ];

    return (
        <section className="-mt-2 min-h-[80vh] flex flex-col justify-start py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.0, duration: 0.4, ease: "easeIn"}
                    }}
                >
                    <h3 className="w-full h-[70px] flex justify-center text-accent">
                        <span className="mx-3 text-[21px]">
                            { 
                                language.includes("en-us") ?
                                    "DEGREES"
                                :
                                    "GRADUAÇÕES"
                            }
                        </span>
                        <LiaGraduationCapSolid className="mt-2 text-2xl"/>
                    </h3>
                </motion.div>
                <motion.div 
                    initial={{ opacity: 0}} 
                    animate={{
                        opacity: 1, 
                        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
                >
                    {education.map((ed:EducationItems<string>) => (
                        <div className="flex flex-1 flex-col justify-center gap-6 group cursor-default" key={ed.index}>
                            {/* Top */}
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{ed.label}</div>
                                <div className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center">
                                    <FaGraduationCap className="text-primary text-3xl"/>
                                </div>
                            </div>
                            {/* Course */}
                            <h2 className="mt-3 text-[20px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{ed.course}</h2>
                            {/* University */}
                            <div className="flex justify-between font-bold text-white group-hover:text-accent transition-all duration-500">
                                <div className="flex flex-col gap-1">
                                    <span>{ed.university}</span>
                                    <span className="text-[13px] font-normal text-white/60">{ed.location}</span>
                                    <span className="text-[13px] font-normal text-accent">{ed.cgpa}</span>
                                </div>
                                <Link href={ed.website} target="_blank" rel="noopener noreferrer" className="relative left-4 bottom-10">
                                    <TooltipProvider delayDuration={150}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-full bg-white/5 flex justify-center items-center group">
                                                <IoOpenOutline className="text-white text-[16px] group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                Website
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                            {/* Start and End dates */}
                            <p className="text-white/60 flex justify-between items-start">
                                <span>
                                    { language.includes("en-us") ? "Start" : "Início" }: {ed.start}
                                </span>
                                <span>
                                    { language.includes("en-us") ? "End" : "Fim" }: {ed.end}
                                </span>
                            </p>
                            {/* Border */}
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    ))}
                </motion.div>
            </div>
            <br />
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.0, duration: 0.4, ease: "easeIn"}
                    }}
                >
                    <h3 className="w-full flex justify-center text-accent mt-4">
                        <span className="mx-3 text-[21px]">
                            {
                                language.includes("en-us") ?
                                    "CERTIFICATES"
                                :
                                    "CERTIFICADOS"
                            }
                        </span>
                        <Image
                            width={24}
                            height={35}
                            src="/assets/others/badge.svg"
                            alt={
                                language.includes("en-us") ?
                                    "certification-icon"
                                :
                                    "icone-certificado"
                            }
                        />
                    </h3>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0}}
                    animate={{
                        opacity: 1,
                        transition: { delay: 1.0, duration: 0.4, ease: "easeIn" }
                    }}
                    className="-mt-2 grid grid-cols-1 md:grid-cols-3 gap-[60px]"
                >
                    {certifications.map((certification:CertificationItems<string>) => {
                        return (
                            <div key={certification.index} className="flex flex-row justify-between mt-12 pb-4 border-b border-b-gray-600">
                                <div className="grid grid-cols-1 gap-2 cursor-default">
                                    <h4 className="w-full text-[13px] font-bold hover:text-accent">{certification.title}</h4>
                                    <p className="text-white/60">
                                        {language.includes("en-us") ? "Issued by " : "Emitido por "}
                                        {certification.school}
                                    </p>
                                    <p className="text-white/60">
                                        {language.includes("en-us") ? "Date" : "Data"}
                                        : {certification.issuance}
                                    </p>
                                    <div className="text-[14px] md:text-[12px] flex flex-row">
                                        <span className="mr-2">
                                            {
                                                language.includes("en-us") ?
                                                    "Skills"
                                                :
                                                    "Habilidades"
                                            }
                                            :
                                        </span>
                                        <div className="flex justify-between items-end">
                                            {certification.competences.map((competence:{index: number; name: string}) => {
                                                return (
                                                    <span key={competence.index}>
                                                        {
                                                            competence.name === "|" ?
                                                                <span className="text-accent mx-1">|</span>
                                                            :
                                                                competence.name
                                                        }
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                {/* School name badge - logo ki jagah */}
                                <div className="flex flex-col justify-between items-end ml-2">
                                    <div className="w-[75px] h-[60px] flex items-center justify-center rounded-md bg-white/5 p-2">
                                        <span className="text-accent font-bold text-[10px] text-center leading-tight">
                                            {certification.school}
                                        </span>
                                    </div>
                                    <a href={`${certification.credential}`} target="_blank" rel="noopener noreferrer" className="flex justify-center items-center">
                                        <Button size="sm">
                                            {
                                                language.includes("en-us") ?
                                                    "Open"
                                                :
                                                    "Abrir"
                                            }
                                            <FiExternalLink className="ml-1" />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    );
}

export default Education;