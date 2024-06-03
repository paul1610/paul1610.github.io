import Card from "@/app/en/components/card/Card";
import React from 'react';
import {
    SiAdobeaftereffects,
    SiAdobeillustrator,
    SiAdobephotoshop,
    SiAdobexd,
    SiBlazor,
    SiC, SiClion,
    SiCsharp,
    SiDatagrip, SiDotnet,
    SiEclipseide, SiExpress, SiFigma, SiHibernate,
    SiIntellijidea, SiJquery,
    SiKotlin, SiMicrosoftsqlserver,
    SiNextdotjs, SiPhpstorm, SiPostgresql, SiPycharm, SiQuarkus, SiTypescript, SiVisualstudio, SiVisualstudiocode, SiWebstorm
} from "react-icons/si";
import {
    FaAndroid, FaAngular,
    FaCss3Alt,
    FaDocker, FaGitAlt,
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
                                    <p><b>Languages / Scripts</b></p>
                                    <div className={"icon-container"}>
                                        <SiC color={"#A8B9CC"}/> <SiCsharp color={"#512BD4"}/> <FaCss3Alt color={"#1572B6"}/>
                                        <FaHtml5 color={"#E34F26"}/> <FaJs color={"#F7DF1E"}/> <SiTypescript color={"#3178C6"}/>
                                    </div>
                                    <div className={"icon-container"}>
                                        <SiKotlin color={"#7F52FF"}/> <FaPhp color={"#777BB4"}/> <SiMicrosoftsqlserver color={"#CC2927"}/>
                                        <FaPython color={"#3776AB"}/> <FaJava color={"#F7DF1E"}/> <SiPostgresql color={"#4169E1"} />
                                    </div>
                                    <p><b>Frameworks</b></p>
                                    <div className={"icon-container"}>
                                        <SiBlazor color={"#512BD4"}/> <SiExpress color={"#000000"}/> <SiHibernate color={"#59666C"}/>
                                        <SiDotnet color={"#512BD4"}/> <SiNextdotjs color={"#000000"}/>
                                    </div>
                                    <div className={"icon-container"}>
                                        <FaNodeJs color={"#5FA04E"}/> <SiQuarkus color={"#4695EB"}/> <FaReact color={"#61DAFB"}/>
                                        <FaAngular color={"#de002d"}/> <SiJquery color={"#0769AD"}/>
                                    </div>
                                    <p><b>Tools</b></p>
                                    <div className={"icon-container"}>
                                        <FaAndroid color={"#34A853"}/> <FaDocker color={"#2496ED"}/> <FaLinux color={"#FCC624"}/>
                                        <FaWindows color={"#0078D4"}/> <SiVisualstudio color={"#5C2D91"}/>
                                        <SiVisualstudiocode color={"#007ACC"}/> <FaGitAlt color={"#F05032"}/>
                                    </div>
                                    <div className={"icon-container"}>
                                        <SiIntellijidea color={"#000000"}/> <SiDatagrip color={"#000000"}/> <SiPhpstorm color={"#000000"}/>
                                        <SiPycharm color={"#000000"}/> <SiWebstorm color={"#000000"}/>
                                        <SiClion color={"#000000"} /> <SiEclipseide color={"#2C2255"}/>
                                    </div>
                                </div>
                            </>
                        </>}
                              links={[]}
                              image={""}/>

                        <Card title={"Design"} description={() => <>
                            <div className={"icon-container"}>
                                <SiFigma color={"#F24E1E"} /> <SiAdobexd color={"#FF61F6"} /> <SiAdobephotoshop color={"#31A8FF"} />
                                <SiAdobeillustrator color={"#FF9A00"}/> <SiAdobeaftereffects color={"#9999FF"} />
                            </div>
                        </>}
                              links={[]}
                              image={""}/>

                        <Card title={"Languages"} description={() => <>
                            <div className={"icon-container"}>
                                <ReactCountryFlag countryCode="AT" svg/>
                                <ReactCountryFlag countryCode="DE" svg/>
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