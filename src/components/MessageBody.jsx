import React from "react";
import { styled } from '@mui/material/styles';
import { Paper, Grid, Box, LinearProgress } from '@mui/material';
import customStyles from '../styles';

function MessageBody(props){
    const PaperBody = styled(Paper)(() => (customStyles.paperBody));
    const RequestItem = styled('div')(() => (customStyles.requestItem));
    const ResponseItem = styled('div')(() => (customStyles.responseItem));
    const ProgressDiv = styled('div')(() => (customStyles.progressDiv));

    let messages = props.messages;
    let loadingResponseMessage = props.loadingResponseMessage;

    return (
            <PaperBody variant="outlined" square={false}>
                <Box sx={{ overflowY: 'auto' }}>
                    { messages && messages.map((messageItem, index) => {
                        return (
                            <div key={index}>
                                <Grid container direction='row' justifyContent='end'>
                                    <Grid item xs={8} key={index}>
                                        <RequestItem>{messageItem[0].content}</RequestItem>
                                    </Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={8} key={index}>
                                        { messageItem[1] === undefined && loadingResponseMessage ? 
                                            <ProgressDiv><LinearProgress /></ProgressDiv> : 
                                            <ResponseItem>{messageItem[1].content}</ResponseItem> 
                                        }
                                    </Grid>
                                </Grid>
                            </div>
                            );
                    })}
                </Box>
            </PaperBody>
    );
}

export default MessageBody;