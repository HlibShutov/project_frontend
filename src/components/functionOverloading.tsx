import type {JSX} from "react";

type ButtonAsButton = {
    onClick: () => void;
    href?: never;
};

type ButtonAsLink = {
    href: string;
    onClick?: never;
};

function MyButton(props: ButtonAsButton): JSX.Element;
function MyButton(props: ButtonAsLink): JSX.Element;

function MyButton(props: ButtonAsButton | ButtonAsLink) {
    if ("href" in props) {
        return <a href={props.href}>Link</a>;
    }

    return <button onClick={props.onClick}>Button</button>;
}

export default MyButton;