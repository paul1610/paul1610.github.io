"use client"
import React from "react";
import "./footer.css";
import {faGithub, faLinkedinIn, faDiscord} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Footer () {
    return (
        <>
            <div className="footer">
                <h1 className={"text-2xl"}>Paul Nell</h1>
                <p>Software Developer</p>

                <div className="flex mb-10 mt-10">
                    <div className="w-1/3">
                        <a href={"https://github.com/paul1610"} target={"_blank"}>
                            <FontAwesomeIcon icon={faGithub} className={"icon"} size={"3x"}/>
                        </a>
                    </div>
                    <div className="w-1/3">
                        <a href={"https://www.linkedin.com/in/paul-nell-0a7748280/"} target={"_blank"}>
                            <FontAwesomeIcon icon={faLinkedinIn} className={"icon"} size={"3x"} />
                        </a>
                    </div>
                    <div className="w-1/3">
                        <a href={"https://discord.com/users/293400628749664266"} target={"_blank"}>
                            <FontAwesomeIcon icon={faDiscord} className={"icon"} size={"3x"}/>
                        </a>
                    </div>
                </div>

                <br/>

                <p>Phone: <a href={"tel:+43 664 1668805"} className={"link"} target={"_blank"}>
                    +43 664 1668805
                </a></p>
                <p>Email: <a href={"mailto: nellpaul@icloud.com"} className={"link"} target={"_blank"}>
                    nellpaul@icloud.com
                </a></p>

                <br/>

                <p><a href={"/en/imprint"} className={"link"}>Imprint</a></p>
                <p><a href={""} className={"link"}>Privacy Policy</a></p>

                <br/>

                <p>©2024 - All rights reserved</p>
                <p><i>Made with love by Paul Nell ❤️</i></p>
            </div>
        </>
    );
}