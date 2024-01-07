import "./animated-button.css";

interface Props {
    text: string
    href?: string
}

export default function AnimatedButton(props: Props) {
    return (
        <a id={"animated-btn"} href={props.href ?? ""} target={"_blank"}>
            <span />
            <span />
            <span />
            <span />
            {props.text}
        </a>
    );
}