
export interface EmphasizeParagraphProps {
    content: string;
}

function EmphasizeParagraph(props: EmphasizeParagraphProps){
    return (
     <p className="text-center max-w-full sm:max-w-3xl p-4 sm:p-6 md:p-8 lg:p-10 
     text-base sm:text-lg md:text-2xl lg:text-3xl text-stone-500 font-normal text-4xl
     w-40 sm:w-80 md:w-full lg:w-full max-w-full 
     
      ">{props.content}</p>
           
    );
}



export default EmphasizeParagraph;

