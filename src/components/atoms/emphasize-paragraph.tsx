
export interface EmphasizeParagraphProps {
    content: string;
}

function EmphasizeParagraph(props: EmphasizeParagraphProps){
    return (
     <p>{props.content}</p>
           
    );
}



export default EmphasizeParagraph;