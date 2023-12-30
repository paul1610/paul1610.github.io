import ShadowButton from "@/app/en/components/shadow-button/ShadowButton";
import AnimatedButton from "@/app/en/components/animated-button/animated-button";
import ArrowDown from "@/app/en/components/arrow-down/ArrowDown";

export default function MainContent() {
    return (
        <>
            <div className={"flex justify-between"}>
                <div className={"mt-20"}>
                    <h1 id={"gradient-text"}>I shape digital worlds</h1>
                    <h1>with code and creativity,</h1>
                    <h1>inspiring and solving problems.</h1>

                    <h2 className={"mt-10"}>Your IT professional for web development and support.</h2>
                    <ShadowButton text={"Contact Me"} />
                    {
                        // animation with sourrounding animation boarder black for cv btn
                    }
                    <AnimatedButton text={"Download CV →"} />
                </div>
                <div>
                    <img src={"portrait.png"}
                         width={600} height={600} alt={"My portrait"}/>
                </div>
            </div>
            <div className={"flex justify-center"}>
                <ArrowDown href={"#main-content"} />
            </div>
        </>
    );
}