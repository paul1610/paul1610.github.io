import "./shadow-button.css";

interface Props {
    text: string,
    href?: string
}

export default function ShadowButton(props: Props) {
    return <>
        <a href={props.href ?? ""} >
            <button id={"shadow-button"}>{props.text}</button>
        </a>
    </>
}