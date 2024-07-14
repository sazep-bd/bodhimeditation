import Button from "../atoms/button";
import EmphasizeParagraph from "../atoms/emphasize-paragraph";

export interface ContactCardProps {
    label?: string;
    href: string;
    content: string;

}

function ContactCard(props:ContactCardProps){
    return (
        <div>
            <EmphasizeParagraph content={props.content}></EmphasizeParagraph>
            <Button label={props.label} href={props.href}></Button>
        </div>
    )
}

export default ContactCard;
