import ShadowButton from "@/app/en/components/shadow-button/ShadowButton";
import AnimatedButton from "@/app/en/components/animated-button/animated-button";
import ArrowDown from "@/app/en/components/arrow-down/ArrowDown";

export default function MainContent() {
    return (
        <>
            <div className="flex justify-between">
                <div className="mt-14" id={"main-text"}>
                    <h1 id="gradient-text">I shape digital worlds</h1>
                    <h1>with code and creativity,</h1>
                    <h1>inspiring and solving problems.</h1>

                    <h2 className="mt-10">Your IT professional for web development and support.</h2>

                    <div className="flex">
                        <ShadowButton text="Contact Me" href="#contact"/>
                        <AnimatedButton text="Download CV →" href="/en/download"/>
                    </div>
                </div>
                <div id="portrait">
                    <div className="image-containe">
                        <img src={"portrait.png"} id={"blurred-edge-image"} width={600} height={600} alt="My portrait"/>
                        <div className={"blur-overlay"}></div>
                    </div>
                </div>
            </div>
            <div className="flex justify-center arrow">
                <ArrowDown href="#about"/>
            </div>
        </>
    );
}