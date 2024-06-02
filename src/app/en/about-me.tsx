import Card from "@/app/en/components/card/Card";
import React from 'react';
import {
    SiAdobeaftereffects,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobexd,
    SiBlazor,
    SiC,
    SiCsharp,
    SiDatagrip, SiDotnet,
    SiEclipseide, SiExpress, SiFigma, SiHibernate,
    SiIntellijidea,
    SiKotlin,
    SiNextdotjs, SiPhpstorm, SiPycharm, SiQuarkus,
    SiTypescript, SiVisualstudio, SiVisualstudiocode, SiWebstorm
} from "react-icons/si";
import {
    FaAndroid, FaAngular,
    FaCss3Alt,
    FaDatabase,
    FaDocker, FaFlask,
    FaGitAlt,
    FaHtml5,
    FaJava,
    FaJs, FaLinux, FaNodeJs,
    FaPhp,
    FaPython, FaReact, FaWindows
} from "react-icons/fa";
import ReactCountryFlag from "react-country-flag";

export default function AboutMe() {
    return (
        <>
            <div className={"scroll-padding"} id={"about"}>
                <div className={"flex flex-col items-center mt-28"}>
                    <h2>About Me</h2>
                    <div className={"mt-4"} id={"portrait-mobile"}>
                        <img src={"portrait.png"}
                             width={300} height={300} alt={"My portrait"}/>
                    </div>
                </div>

                <h4 className={"mt-20"}>Hey, I am Paul, a student and tech lover from Linz, Austria. I create and design websites and
                    help
                    with all kinds of tech problems.</h4>

                <div className={"card-container"}>
                    <Card title={"Education"} description={() => <>
                        <text>In the years from 2011 until 2020 I visited the AHS and VS of the </text>
                        <a href={"https://www.schulen.kreuzschwestern.at/"} className={"link"}
                           target={"_blank"}>Kreuzschwestern</a>
                        <text> school in Linz.</text>
                        <br/>
                        <br/>
                        <text>I am currently studying at the </text>
                        <a href={"https://www.htl-leonding.at/"} className={"link"} target={"_blank"}>HTL
                            Leonding</a>
                        <text> for computer science.</text>
                    </>}
                          links={[["Kreuzschwestern", "https://www.schulen.kreuzschwestern.at/"], ["HTL Leonding", "https://www.htl-leonding.at/"]]}
                          image={"education.png"}/>

                    <Card title={"Experience"} description={() => <>
                        Summer of 2023: <a href={"https://www.keba.com"} className={"link"} target={"_blank"}>Keba
                        Industrial
                        Automation GmbH</a>
                        <p> (Programming Intern)</p>
                        <br/>
                        Summer of 2022: <a href={"https://www.transbritannia.at/"} className={"link"}
                                           target={"_blank"}>Transbritannia
                        Transport GmbH</a>
                        <p> (Accounting Intern)</p>
                    </>}
                          links={[["Keba", "https://www.keba.com"], ["Transbritannia", "https://www.transbritannia.at/"]]}
                          image={"experience.png"}/>

                    <Card title={"Hobbies"} description={() =>
                        <p>I love to code and ski. Additionally, I enjoy exploring new technologies,
                            participating in coding-contest, and working on private projects.
                            In my free time, I also like to hangout with friends and family.</p>

                    } links={[]} image={"hobbies.png"}/>

                </div>
                    <div className={"flex justify-center mt-36"}>
                        <h3>My Skills</h3>
                    </div>
                    <div className={"card-container"}>
                        <Card title={"Programming"} description={() => <>
                            <>
                                <div>
                                    <p>Languages / Scripts</p>
                                    <div className={"icon-container"}>
                                        <SiC/> <SiCsharp/> <FaCss3Alt/> <FaHtml5/> <FaJava/> <FaJs/> <SiKotlin/>
                                        <FaPhp/> <FaDatabase/> <FaPython/> <FaDatabase/> <SiTypescript/>
                                    </div>
                                    <p>Frameworks</p>
                                    <div className={"icon-container"}>
                                        <SiBlazor/> <SiExpress/> <SiHibernate/> <SiDotnet/> <SiNextdotjs/> <FaNodeJs/>
                                        <SiQuarkus/> <FaReact/> <FaAngular /> <FaFlask />
                                    </div>
                                    <p>Tools</p>
                                    <div className={"icon-container"}>
                                        <FaAndroid/> <SiDatagrip/> <FaDocker/> <SiEclipseide/> <FaGitAlt/>
                                        <SiIntellijidea/> <FaLinux/> <SiPhpstorm/>
                                        <SiPycharm/> <SiVisualstudio/> <SiVisualstudiocode/> <SiWebstorm/>
                                    </div>
                                </div>
                            </>
                        </>}
                              links={[]}
                              image={""}/>

                        <Card title={"Design"} description={() => <>
                            <div className={"icon-container"}>
                                <SiFigma /> <SiAdobexd /> <SiAdobephotoshop /> <SiAdobeillustrator />
                                <SiAdobeaftereffects />
                            </div>
                        </>}
                              links={[]}
                              image={""}/>

                        <Card title={"Languages"} description={() => <>
                            <div className={"icon-container"}>
                                <ReactCountryFlag countryCode="AT" svg/>
                                <ReactCountryFlag countryCode="GB" svg/>
                            </div>
                        </>}
                              links={[]}
                              image={""}/>
                    </div>
            </div>
        </>
    );
}