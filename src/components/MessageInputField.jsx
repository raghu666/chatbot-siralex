import React, { useState } from "react";
import { TextField, Button, Stack, Divider } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

function MessageInputField(props){
    const [textField, setTextField] = useState("");

    function handleChange(event){
        setTextField(event.target.value);
    }
  
    function handleClick(){
        if (textField.trim() !== '') props.onAdd(textField);
        setTextField('');
    }

    return (
        <Stack direction="row" justifyContent="flex-start" spacing={2} divider={<Divider orientation="vertical" flexItem />}>
            <TextField fullWidth id="text-field-id" label="Please Type here" value={textField} onChange={handleChange} />
            <Button variant="contained" onClick={handleClick} disabled={props.disableBtn}><SendIcon /></Button>
        </Stack>
    );
}

export default MessageInputField;