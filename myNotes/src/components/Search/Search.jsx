import React, { useState } from "react";
import { FilledInput } from "@mui/material";

const search=({handelSearchNote})=>{
    return(

  <FilledInput autoComplete="true" autoFocus="true"placeholder="Search..." onChange={(event)=>{
    handelSearchNote(event.target.value)
  }}/>

    )
}
export default search;