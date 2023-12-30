import "./shadow-button.css";

interface Props {
    text: string
}

export default function ShadowButton(props: Props) {
    return <button id={"shadow-button"}>{props.text}</button>;
}