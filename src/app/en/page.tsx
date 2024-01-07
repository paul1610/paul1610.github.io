"use client"
import MainContent from "@/app/en/main-content";
import AboutMe from "@/app/en/about-me";
import Projects from "@/app/en/projects";
import Services from "@/app/en/services";
import Contact from "@/app/en/contact";
import Footer from "@/app/en/components/footer/Footer";

export default function En() {
    return (
        <>
            <MainContent />
            <AboutMe />
            <Projects />
            <Services />
            <Contact />
        </>
    );
}
