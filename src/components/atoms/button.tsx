'use client';

export interface ButtonProps {
    label?: string;
    href: string;
}
const handleClick = (href: string) => {
    window.location.href=href;
};

const Button = (props: ButtonProps) => {
    
    return (
        <button onClick={() => handleClick(props.href)}> click {props.label}</button>
    )
}

export default Button;
