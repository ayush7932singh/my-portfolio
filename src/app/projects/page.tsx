"use client";

import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import {
    SiPython,
    SiJavascript,
    SiHtml5,
    SiCss,
    SiOpenai,
    SiFlask,
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiMysql,
    SiReact,
    SiSpringboot,
    SiPostgresql,
    SiJsonwebtokens
} from "react-icons/si";
import { FaJava, FaGithub, FaExternalLinkAlt, FaHeart, FaEnvelope, FaLinkedin, FaTwitter } from "react-icons/fa";
import { GiChemicalDrop } from "react-icons/gi";
import { motion } from "framer-motion";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RootState } from "@/redux/store";
import { ProjectItems, StackItems } from "@/types/pages/Projects";
import getProjectsFieldNames from "@/utils/pages/projectsHelpers";

import Link from "next/link";
import Image from "next/image";
import Disclaimer from "@/components/Disclaimer";

const Projects: React.FC = () => {
    const language = useSelector((state: RootState) => state.language.preferred);
    const isEnglish = language.includes("en-us");

    // @ts-ignore - Temporarily ignore type checking
    const projects = useMemo(() => [
        {
            index: 1,
            num: '', // Add empty string for num
            title: getProjectsFieldNames(language, "first", "title"),
            category: getProjectsFieldNames(language, "first", "category"),
            description: getProjectsFieldNames(language, "first", "description"),
            type: 'Fullstack',
            stack: [
                { index: 1, name: "Python", icon: <SiPython /> },
                { index: 2, name: "Flask", icon: <GiChemicalDrop /> },
                { index: 3, name: "MySQL", icon: <SiMysql /> },
                { index: 4, name: "HTML5", icon: <SiHtml5 /> },
                { index: 5, name: "CSS3", icon: <SiCss /> },
                { index: 6, name: "JavaScript", icon: <SiJavascript /> }
            ],
            image: "/assets/projects/Pokecut(1).jpg",
            github: "https://github.com/ayush7932singh/HealthEase",
            liveDemo: "https://healthease-a0gz.onrender.com"
        },
        {
            index: 2,
            num: '',
            title: getProjectsFieldNames(language, "second", "title"),
            category: getProjectsFieldNames(language, "second", "category"),
            description: getProjectsFieldNames(language, "second", "description"),
            type: 'AI',
            stack: [
                { index: 1, name: "React", icon: <SiReact /> },
                { index: 2, name: "TypeScript", icon: <SiTypescript /> },
                { index: 3, name: "Tailwind", icon: <SiTailwindcss /> },
                { index: 4, name: "OpenAI API", icon: <SiOpenai /> },
                { index: 5, name: "Next.js", icon: <SiNextdotjs /> }
            ],
            image: "/assets/projects/Pokecut (2).png",
            github: "https://github.com/ayush7932singh/myBot",
            liveDemo: null
        },
        {
            index: 3,
            num: '',
            title: getProjectsFieldNames(language, "third", "title"),
            category: getProjectsFieldNames(language, "third", "category"),
            description: getProjectsFieldNames(language, "third", "description"),
            type: 'Console',
            stack: [
                { index: 1, name: "Java", icon: <FaJava /> }
            ],
            image: "/assets/projects/Pokecut(3).jpg",
            github: "https://github.com/ayush7932singh/RockPaperScissors",
            liveDemo: null
        },
        {
            index: 4,
            num: '',
            title: getProjectsFieldNames(language, "fourth", "title"),
            category: getProjectsFieldNames(language, "fourth", "category"),
            description: getProjectsFieldNames(language, "fourth", "description"),
            type: 'Fullstack',
            stack: [
                { index: 1, name: "React", icon: <SiReact /> },
                { index: 2, name: "Java", icon: <FaJava /> },
                { index: 3, name: "Spring Boot", icon: <SiSpringboot /> },
                { index: 4, name: "PostgreSQL", icon: <SiPostgresql /> },
                { index: 5, name: "JWT", icon: <SiJsonwebtokens /> }
            ],
            image: "/assets/projects/examdna.png",
            github: "https://github.com/ayush7932singh/examdna",
            liveDemo: "https://exam-dna-ten.vercel.app"
        }
    ], [language]);

    return (
        <>
            <section className="min-h-screen pt-12 pb-4 bg-gradient-to-br from-[#0a0a0f] via-[#15151a] to-[#1a1a22] relative flex flex-col justify-between">
                {/* Animated Background */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Header - Compact */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                            My{" "}
                            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
                                Projects
                            </span>
                        </h1>

                        <p className="text-white/60 max-w-2xl mx-auto text-sm md:text-base">
                            {isEnglish
                                ? "Explore my recent work in full-stack development, AI integrations, and creative problem-solving"
                                : "Explore meus trabalhos recentes em desenvolvimento full-stack, integrações de IA e solução criativa de problemas"}
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <ScrollArea className="h-[70vh] pr-4">
                        <div className="space-y-5">
                            {projects.map((item, index) => (
                                <motion.div
                                    key={item.index}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="bg-[#232329] rounded-xl overflow-hidden hover:border-accent/40 transition-all duration-300"
                                >
                                    <div className="flex flex-col lg:flex-row">
                                        {/* Image Section */}
                                        <div className="lg:w-2/5 relative h-[200px] lg:h-auto bg-gradient-to-br from-black/30 to-black/50">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                className="object-contain p-4"
                                                sizes="(max-width: 1024px) 100vw, 40vw"
                                            />
                                        </div>

                                        {/* Content Section */}
                                        <div className="lg:w-3/5 p-5 lg:p-6">
                                            <div className="flex flex-wrap justify-between items-start gap-3 mb-3">
                                                <div>
                                                    <div className="flex items-center gap-2 mb-1">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                                                        <span className="text-accent text-[11px] font-semibold uppercase tracking-wider">
                                                            {item.type}
                                                        </span>
                                                    </div>
                                                    <h3 className="text-accent text-lg font-semibold mb-0.5">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-white/60 text-xs">
                                                        {item.category}
                                                    </p>
                                                </div>

                                                <Link
                                                    href={item.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <TooltipProvider delayDuration={100}>
                                                        <Tooltip>
                                                            <TooltipTrigger className="w-9 h-9 rounded-full bg-white/5 flex justify-center items-center group transition-all duration-300 hover:bg-accent/20">
                                                                <FaGithub className="text-white text-base group-hover:text-accent transition-colors" />
                                                            </TooltipTrigger>
                                                            <TooltipContent>
                                                                {isEnglish ? "View Code" : "Ver Código"}
                                                            </TooltipContent>
                                                        </Tooltip>
                                                    </TooltipProvider>
                                                </Link>
                                            </div>

                                            <p className="text-white/70 text-[13px] leading-relaxed text-justify mb-4 overflow-hidden text-ellipsis" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                                {item.description}
                                            </p>

                                            {/* Tech Stack */}
                                            <div>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <div className="w-6 h-[1.5px] bg-accent rounded-full"></div>
                                                    <span className="text-white/50 text-[10px] uppercase tracking-wider font-semibold">
                                                        {isEnglish ? "Tech Stack" : "Tecnologias"}
                                                    </span>
                                                </div>
                                                <div className="flex flex-wrap gap-1.5">
                                                    {item.stack.map((tech: any) => (
                                                        <TooltipProvider key={tech.index} delayDuration={100}>
                                                            <Tooltip>
                                                                <TooltipTrigger>
                                                                    <div className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-white/70 text-xs flex items-center gap-1.5 transition-all duration-300 hover:bg-accent/10 hover:border-accent/30 hover:text-accent">
                                                                        <span className="text-sm">{tech.icon}</span>
                                                                        <span>{tech.name}</span>
                                                                    </div>
                                                                </TooltipTrigger>
                                                                <TooltipContent>
                                                                    {tech.name}
                                                                </TooltipContent>
                                                            </Tooltip>
                                                        </TooltipProvider>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Live Demo Notice */}
                                    {item.liveDemo && (
                                        <div className="border-t border-white/10 px-5 py-2 bg-white/5">
                                            <Link href={item.liveDemo} target="_blank" rel="noopener noreferrer" className="text-accent text-[11px] flex items-center gap-1.5 hover:underline">
                                                <FaExternalLinkAlt className="text-[9px]" />
                                                {isEnglish ? "View Live Demo" : "Ver Demo ao Vivo"}
                                            </Link>
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </ScrollArea>
                </div>
                
                {/* Local Disclaimer so it shares the gradient background */}
                <Disclaimer isLocal />
            </section>
        </>
    );
}

export default Projects;