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
        <button className=" text-sm md:text-lg  border-transparent px-3 py-2 rounded-lg cursor-pointer bg-stone-500 hover:bg-stone-700 " onClick={() => handleClick(props.href)} 
        >{props.label} <a className="w=10">{"--->"}</a> </button>
    )

}


export default Button;


