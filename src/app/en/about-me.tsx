import Card from "@/app/en/components/card/Card";

export default function AboutMe() {
    return (
        <>
            <div className={"scroll-padding"} id={"about"}>
                <div className={"flex justify-center mt-28"}>
                    <h2>About Me</h2>
                </div>

                <h4>Hey, I am Paul, a student and tech lover from Linz, Austria. I create and design websites and help
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
                        <a href={"https://www.htl-leonding.at/"} className={"link"} target={"_blank"}>HTL Leonding</a>
                        <text> for computer science.</text>
                    </>}
                          links={[["Kreuzschwestern", "https://www.schulen.kreuzschwestern.at/"], ["HTL Leonding", "https://www.htl-leonding.at/"]]}
                          image={"education.png"}/>

                    <Card title={"Experience"} description={() => <>
                        Summer of 2023: <a href={"https://www.keba.com"} className={"link"} target={"_blank"}>Keba Industrial
                            Automation GmbH</a>
                        <p> (Programming Intern)</p>
                        <br/>
                        Summer of 2022: <a href={"https://www.transbritannia.at/"} className={"link"} target={"_blank"}>Transbritannia
                            Transport GmbH</a>
                        <p> (Accounting Intern)</p>
                    </>}
                          links={[["Keba", "https://www.keba.com"], ["Transbritannia", "https://www.transbritannia.at/"]]}
                          image={"experience.png"}/>

                    <Card title={"Hobbies"} description={() =>
                        <p>I love to program and ski.</p>

                    } links={[]} image={"hobbies.png"}/>

                </div>

                <div className={"flex justify-center mt-36"}>
                    <h3>My Skills</h3>
                </div>
                <div className={"card-container"}>
                    <Card title={"Programming"} description={() => <>
                        <>
                            <b>Languages / Scripts</b>
                            <p>C, C#, CSS, HTML, Java, JavaScript, Kotlin, PHP, PL/SQL, Prolog, Python, SQL, TypeScript</p>
                            <b>Frameworks</b>
                            <p>ASP.NET, Blazor, Express.js, Hibernate, .NET Core, Nest.js, Next.js, Node.js, Quarkus, React</p>
                            <b>Tools</b>
                            <p>Android Studio, DataGrip, Docker, Eclipse, Git, IntelliJ, Kubernetes, Linux, PhpStorm, Postman,
                                PyCharm, Visual Studio, Visual Studio Code, WebStorm, Windows</p>
                        </>
                    </>}
                          links={[]}
                          image={""}/>

                    <Card title={"Design"} description={() => <>
                        <p>Figma, Adobe XD, Adobe Photoshop, Adobe Illustrator and basic: Adobe After Effects, Adobe Premiere
                            Pro</p>
                    </>}
                          links={[]}
                          image={""}/>

                    <Card title={"Languages"} description={() => <>
                        <p>German (native), English (fluent)</p>
                    </>}
                          links={[]}
                          image={""}/>
                </div>
            </div>
        </>
    );

}