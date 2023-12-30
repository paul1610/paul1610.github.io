import "./animated-button.css";

interface Props {
    text: string
}

export default function AnimatedButton(props: Props) {
    return (
        <a id={"animated-btn"}>
            <span />
            <span />
            <span />
            <span />
            {props.text}
        </a>
    );
}