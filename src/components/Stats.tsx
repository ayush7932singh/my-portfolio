"use client";

import React, { useState, useEffect } from "react";

import CountUp from "react-countup";

import { StatItems } from "@/types/components/Stats";
import getStatsText from "@/utils/components/statsHelpers";

import { gitHubService, UserInfoItems } from "../services";

import Link from "next/link";

const Stats: React.FC<{ language: string }> = ({ language }) => {
    const [ghubProjectsCount, setGhubProjectsCount] = useState<number>(14);
    const [ghubCommitCount, setGhubCommitCount] = useState<number>(450);
    const [stats, setStats] = useState<StatItems[]>([
        {
            index: 1,
            value: 0,
            text: getStatsText(language, "experience")
        },
        {
            index: 2,
            value: 12,
            text: getStatsText(language, "technologies")
        },
        {
            index: 3,
            value: 14,
            text: getStatsText(language, "projects")
        },
        {
            index: 4,
            value: 450,
            text: getStatsText(language, "commits")
        }
    ]);

    useEffect(() => {
        (async function fetchData() {
            let projects = 0;
            let commitsCount = 0;

            try {
                const userInfo = await (gitHubService().getGitHubUserInfo());
                const { publicRepos, privateRepos } = userInfo as UserInfoItems;
                const pub = Number(publicRepos);
                const priv = Number(privateRepos);

                projects = (!isNaN(pub) ? pub : 0) + (!isNaN(priv) ? priv : 0);
            } catch (error) {
                console.error("Error fetching GitHub user info:", error);
            }

            try {
                const commits = await (gitHubService().getGitHubCommitInfo());
                if (commits && commits.length > 0) {
                    commitsCount = commits.reduce((acc, count) => acc + count, 0);
                }
            } catch (error) {
                console.error("Error fetching GitHub commits:", error);
            }

            // Use fetched counts if they are > 0, otherwise fall back to realistic defaults
            setGhubProjectsCount(projects > 0 ? projects : 14);
            setGhubCommitCount(commitsCount > 0 ? commitsCount : 450);
        })();
    }, []);

    useEffect(() => {
        // Experience and Technologies are always set, Projects and Commits use fetched or fallbacks
        setStats([
            {
                index: 1,
                value: 0,
                text: getStatsText(language, "experience")
            },
            {
                index: 2,
                value: 12,
                text: getStatsText(language, "technologies")
            },
            {
                index: 3,
                value: ghubProjectsCount || 14,
                text: getStatsText(language, "projects")
            },
            {
                index: 4,
                value: ghubCommitCount || 450,
                text: getStatsText(language, "commits")
            }
        ]);
    }, [language, ghubProjectsCount, ghubCommitCount]);

    return (
        <section className="-mt-16 pt-12 xl:pt-0">
            <div className="container max-auto">
                <div className="grid grid-cols-2 xl:flex xl:flex-wrap gap-10 max-w-[80vw] mx-auto xl:max-w-none">
                    {stats.map((stat: StatItems, index: number) => {
                        return (
                            <div className="group flex flex-1 justify-center items-center xl:justify-start cursor-default" key={stat.index}>
                                <Link
                                    href={index === 0 ? "/experiences" : index === 1 ? "/skills" : index === 2 ? "https://github.com/ayush7932singh?tab=repositories" : index === 3 ? "https://github.com/ayush7932singh" : ""}
                                    target={index === 2 || index === 3 ? "_blank" : ""}
                                    className="group-hover:text-accent transition-all duration-500"
                                >
                                    <div className="flex justify-between">
                                        <CountUp
                                            end={stat.value}
                                            duration={5}
                                            delay={2}
                                            className="text-3xl xl:text-6xl font-extrabold"
                                        />
                                        {index === 0 && stat.value > 0 && <p className="relative left-1 text-xl top-1 xl:text-4xl xl:top-2 font-bold">+</p>}
                                        <p className={`${stat.text.length <= 15 ? "max-w-[100px]" : "max-w-[150px]"} flex flex-col xl:flex-row justify-center leading-snug text-white/80 relative left-5 xl:top-2 xl:left-6 text-[13px] xl:text-[16px] group-hover:text-accent transition-all duration-500`}>{stat.text}</p>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

export default Stats;