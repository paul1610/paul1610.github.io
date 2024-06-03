export default function Download() {
    return (
        <>
            <div className={"flex justify-center"}>
                <div className={"flex flex-col mt-20"}>
                    <div className={"flex flex-col items-center"}>
                        <h2>Imprint</h2>
                    </div>

                    <div className={"flex justify-center mt-8"} id={"privacy-policy"}>
                        <div>
                            <p>Entwickler und Medieninhaber: <b>Nell Paul</b></p>
                            <p>Panholzerweg 30, 4030 Linz</p>
                            <p>Tel. +43 (0)664 1668805</p>
                            <p>nellpaul@icloud.com,
                                <a href={"https://paul1610.github.io"} className={"link"}> https://paul1610.github.io</a>
                            </p>
                        </div>
                    </div>

                    <div className={"flex flex-col items-center mt-10"}>
                        <h2>Privacy Policy</h2>
                    </div>

                    <div className={"flex flex-col mt-8"}>
                        <p>The protection of your personal data is of special concern to us. Therefore, we process your
                            data exclusively in accordance with the legal regulations (GDPR, TKG 2003).
                            In this data protection information, we inform you about the most important aspects
                            of data processing on our website.

                            When you contact us via the form on the website or by email, your provided data will be
                            stored by us for the purpose of processing the request and in case of follow-up questions
                            for a period of six months. We do not disclose this data without your consent.</p>
                    </div>

                    <div className={"flex flex-col items-center mt-5"}>
                        <h3>Your Rights</h3>
                    </div>

                    <div className={"flex flex-col mt-5"}>
                        <p>Regarding the data stored with us, you generally have the rights to information, correction,
                            deletion, restriction, data portability, revocation, and objection.
                            If you believe that the processing of your data violates data protection laws or if your
                            data protection rights have otherwise been violated, you can complain to us at
                            nellpaul@icloud.com or to the data protection authority.</p>
                    </div>

                    <div className={"flex flex-col items-center mt-10"}>
                        <h4 className={"mt-5"} style={{"fontSize": "1.5em"}}><a href={"/en"}>Go Back</a></h4>
                    </div>
                </div>
            </div>
        </>
    );
}