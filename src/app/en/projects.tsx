export default function Projects() {
    return (
        <>
            <div className={"scroll-padding"} id={"projects"}>
                <div className={"flex justify-center mt-28"}>
                    <h2>My Projects</h2>
                </div>

                <div className="project-container">
                    <div className="project-image">
                        <img src={"coming_soon.png"} alt="Rezep"/>
                    </div>
                    <div className="project-description">
                        <h3>Rezep</h3>
                        <p className={"description"}>
                            Creating Rezep, an AI receptionist tailored for hotels.
                            The project focuses on delivering an efficient experience and
                            seamlessly handles guest interactions,
                            offering a modern solution to traditional reception services.
                            The system uses advanced AI technologies,
                            enabling natural language processing and adaptive learning for every usecase.
                            Rezep prioritizes optimal performance and user-friendliness.
                            This project redefines hotel reception services,
                            providing a cutting-edge, automated solution for
                            enhanced guest satisfaction and operational efficiency.
                        </p>
                        <a href={"https://github.com/RezepProject/"} className={"link"} target={"_blank"}>
                            More about Rezep here!
                        </a>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-image">
                        <img src={"drapfalter.png"} alt="Rezep"/>
                    </div>
                    <div className="project-description">
                        <h3>Homepage Dr. Apfalter</h3>
                        <p className={"description"}>
                            For this project, I designed and developed a website for a medical practice.
                            The primary goal was to create a user-friendly platform that effectively communicates
                            the practice’s services and values while ensuring ease of access for both new and returning patients.
                        </p>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-image">
                        <img src={"statscheck.png"} alt="StatsCheck"/>
                    </div>
                    <div className="project-description">
                        <h3>StatsCheck</h3>
                        <p className={"description"}>
                            Introducing StatsCheck, an award-winning project, which converts basic
                            excel-files and data from multiple companies into a unified platform.
                            StatsCheck simplifies data tracking, providing a seamless solution
                            for businesses and efficiently compiles and analyzes data from diverse sources.
                        </p>
                        <a href={"https://www.htl-leonding.at/2022/06/30/web-projekte-der-2-informatik-klasse-inkl-aufzeichnung/"}
                           className={"link"} target={"_blank"}>
                            More about StatsCheck & HTL Leonding here!
                        </a>
                    </div>
                </div>
                <div className="project-container">
                    <div className="project-image">
                        <img src={"portfolio.png"} className={"pt-6"} alt="My Personal Portfolio"/>
                    </div>
                    <div className="project-description">
                        <h3>My Portfolio</h3>
                        <p className={"description"}>Developing a personal portfolio,
                            my project showcases my skills and projects in a sleek design,
                            prioritizing optimal performance and user-friendliness.
                            The technical implementation involves utilizing cutting-edge frameworks
                            and technologies for seamless user interaction
                            and dynamic content presentation.
                            This ensures an impressive representation of my capabilities
                            and provides a smooth, engaging experience for visitors.
                        </p>
                        <a href={"/"} className={"link"} target={"_blank"}>
                            Visit my Portfolio here!
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}