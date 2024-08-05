import React, { useState } from "react";
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import { CssBaseline, Paper, Grid } from '@mui/material';
import customStyles from '../styles';
import MessageInputField from "./MessageInputField";
import MessageBody from "./MessageBody";
import chatResponse from "../chat_response";

function App(){

  const darkTheme = createTheme(customStyles.darkTheme);
  const PaperContainer = styled(Paper)(() => (customStyles.paperContainer));

  const [messageList, setMessageList] = useState([]);
  const [loadingResponseMessage, setLoadingResponseMessage] = useState(false);

  function addMessageRequest(newMessageRequest){
    setLoadingResponseMessage(true);

    const newMessage = [{ role: 'user', content: newMessageRequest }];
    let newMessageList = [...messageList, newMessage];
    setMessageList(newMessageList);

    addResponseFromOpenAI(newMessageList, newMessage);
  }

  async function addResponseFromOpenAI(newMessageList, newMessage){
    let newChatMessagesList = await chatResponse(newMessageList, newMessage);
    setMessageList(newChatMessagesList);
    setLoadingResponseMessage(false);
  }

  return (<div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline enableColorScheme/>
          <Grid container direction="column" alignItems="center" justifyContent="center">
              <PaperContainer variant="outlined" square={false}>
                  <MessageBody messages={messageList} loadingResponseMessage={loadingResponseMessage} />
                  <MessageInputField onAdd={addMessageRequest} disableBtn={loadingResponseMessage} />
              </PaperContainer>
          </Grid>
      </ThemeProvider>
  </div>);
}

export default App;