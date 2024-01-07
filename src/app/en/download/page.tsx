export default function Download() {
    return (
        <>
            <div className={"flex justify-center"}>
                <div className={"flex flex-col mt-20"}>
                    <div className={"flex flex-col items-center"}>
                        <h2>Download</h2>
                    </div>
                    <h4>Thank you for your interest, you can download my CV here:</h4>

                    <div className={"flex flex-col items-center"}>
                        <h4 style={{"fontSize": "1.8em"}} className={"mt-8 mb-2"}><a href={"/files/CV-English-Nell_Paul.pdf"} className={"link"} target={"_blank"}>
                            CV English
                        </a></h4>
                        <h4 style={{"fontSize": "1.8em"}}><a href={"/files/CV-Nell_Paul.pdf"} className={"link"} target={"_blank"}>
                            CV Deutsch
                        </a></h4>

                        <h4 className={"mt-5"} style={{"fontSize": "1.5em"}}><a href={"/en"}>Go Back</a></h4>
                    </div>
                </div>
            </div>
        </>
    );
}