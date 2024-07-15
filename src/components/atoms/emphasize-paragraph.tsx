
export interface EmphasizeParagraphProps {
    content: string;
}

function EmphasizeParagraph(props: EmphasizeParagraphProps){
    return (
     <p className="text-center text-stone-500 font-normal text-4xl">{props.content}</p>
           
    );
}



export default EmphasizeParagraph;