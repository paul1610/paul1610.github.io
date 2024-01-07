import Card from "@/app/en/components/card/Card";

export default function Services() {
    return (
        <>
            <div className={"scroll-padding"} id={"services"}>
                <div className={"flex justify-center mt-28"}>
                    <h2>My Services</h2>
                </div>

                <h3 className={"mt-10"}>I offer a wide variety of services, including but not limited to:</h3>

                <div className={"card-container"}>
                    <Card title={"Custom App Development"} description={() => <></>}
                          links={[]}
                          image={"custom_app.png"}/>

                    <Card title={"Custom Software Development"} description={() => <></>}
                          links={[]}
                          image={"custom_software.png"}/>

                    <Card title={"Custom Website Development"} description={() => <></>}
                          links={[]}
                          image={"custom_website.png"}/>

                    <Card title={"Tech Support"} description={() => <></>}
                          links={[]}
                          image={"tech_support.png"}/>

                    <Card title={"PC Building / Repairing / Upgrading"} description={() => <></>}
                          links={[]}
                          image={"pc_building.png"}/>

                    <Card title={"Purchase Consulting"} description={() => <></>}
                          links={[]}
                          image={"purchase_consulting.png"}/>
                </div>
            </div>
        </>
    );
}