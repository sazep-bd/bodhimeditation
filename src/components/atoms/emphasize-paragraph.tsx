
export interface EmphasizeParagraphProps {
    content: string;
}

function EmphasizeParagraph(props: EmphasizeParagraphProps){
    return (
     <p className="text-stone-500 font-normal text-2xl">{props.content}</p>
           
    );
}



export default EmphasizeParagraph;