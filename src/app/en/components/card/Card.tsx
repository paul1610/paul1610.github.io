import "./card.css";
import {ReactElement} from 'react'
import '@fortawesome/free-solid-svg-icons'

interface Props {
    title: string;
    description: () => ReactElement;
    image: string;
    links: Array<Array<string>>;
}

export default function Card(props: Props) {
    let linkCnt: number = 0;
    return (<>
            <div className="w-full sm:w-1/1 md:w-1/1 flex flex-col p-3">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex-1 flex flex-col">
                    {props.image === "" ?
                        <></> :
                        <div className="bg-cover h-48 img-bg" style={{"backgroundImage": "url(" + props.image + ")"}}></div>
                    }
                    <div className="p-4 flex-1 flex flex-col">
                        <h3 className="mb-4 text-2xl">{props.title}</h3>
                        <div className="mb-4 text-grey-darker text-sm flex-1">
                            {props.description()}
                        </div>
                        {props.links.length === 0 ?
                            <></> :
                            <div className={"border-t border-grey-light flex"}>
                                {props.links.map((link) => {
                                    return <a key={linkCnt++} href={link[1]} className="link ml-1 pt-2 text-xs uppercase no-underline tracking-wide" target={"_blank"}>{link[0]}{props.links.length - 1 > linkCnt ? " | " : ""}</a>;
                                })}
                            </div>
                        }
                    </div>
                </div>
            </div>
        </>
    );
}