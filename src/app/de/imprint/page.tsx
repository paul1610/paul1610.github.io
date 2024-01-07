export default function Download() {
    return (
        <>
            <div className={"flex justify-center"}>
                <div className={"flex flex-col mt-20"}>
                    <div className={"flex flex-col items-center"}>
                        <h2>Imprint</h2>
                    </div>

                    <div className={"flex justify-center mt-8"}>
                        <div>
                            <p>Entwickler und Medieninhaber: <b>Nell Paul</b></p>
                            <p>Panholzerweg 30, 4030 Linz</p>
                            <p>Tel. +43 (0)664 1668805</p>
                            <p>nellpaul@icloud.com, (TODO add URL)</p>
                        </div>
                    </div>

                    <div className={"flex flex-col items-center mt-10"}>
                        <h2>Privacy Policy</h2>
                    </div>

                    <div className={"flex flex-col mt-8"}>
                        <p>Der Schutz Ihrer persönlichen Daten ist uns ein besonderes Anliegen.
                            Wir verarbeiten Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen (DSGVO, TKG 2003).
                            In diesen Datenschutzinformationen informieren wir Sie über die wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer Website.

                            Wenn Sie per Formular auf der Website oder per E-Mail Kontakt mit uns aufnehmen,
                            werden Ihre angegebenen Daten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen
                            sechs Monate bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.</p>
                    </div>

                    <div className={"flex flex-col items-center mt-5"}>
                        <h3>Your Rights</h3>
                    </div>

                    <div className={"flex flex-col mt-5"}>
                        <p>Ihnen stehen bezüglich Ihrer bei uns gespeicherten Daten grundsätzlich die Rechte auf Auskunft,
                            Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerruf und Widerspruch zu.
                            Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder
                            Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind,
                            können Sie sich bei der uns nellpaul@icloud.com oder der Datenschutzbehörde beschweren.</p>
                    </div>

                    <div className={"flex flex-col items-center mt-10"}>
                        <h4 className={"mt-5"} style={{"fontSize": "1.5em"}}><a href={"/en"}>Go Back</a></h4>
                    </div>
                </div>
            </div>
        </>
    );
}