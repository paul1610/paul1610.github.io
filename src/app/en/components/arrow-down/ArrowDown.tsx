import "./arrow-down.css";

interface Props {
    href: string
}

export default function ArrowDown(props: Props) {
    return (
        <a href={props.href}>
            <svg className="arrows">
                <path className="a1" d="M0 0 L30 32 L60 0"></path>
            </svg>
        </a>
    );
}