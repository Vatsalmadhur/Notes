import React from "react";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const Note =({id,text,date,handelDelNote})=>{
    return(
        <>
        <div className="noteBox ">
            <p className="noteHeading">{text}</p>
            <p className="date">{date}</p>
            <DeleteForeverIcon className="delIcon" size='1.3em' onClick={()=>handelDelNote(id)}/>
        </div>
        </>
    )
}
export default Note;