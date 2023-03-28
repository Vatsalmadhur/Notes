import React, { useState } from "react";
import { FilledInput } from "@mui/material";
import { red } from "@mui/material/colors";

const search=({handelSearchNote})=>{
    return(

  <FilledInput autoComplete="true" autoFocus="true"placeholder="Search..." onChange={(event)=>{
    handelSearchNote(event.target.value)
  }} className="search" sx={{borderRadius:5,
  position:"absolute",
right:2,top:40}}/>

    )
}
export default search;