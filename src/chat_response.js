import axios from 'axios';

async function chatResponse(messagesList, newMessage){
    let chatMessageList = [{"role": "system", "content": "You are a helpful assistant."}, ...messagesList.flat()];

    const config = { apiKey: import.meta.env.VITE_OPENAI_API_KEY };
    const openai = axios.create({
        baseURL: 'https://api.openai.com/v1',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${config.apiKey}`,
        },
    });

    let completion = await openai.post('/chat/completions', {
        messages: chatMessageList,
        model: "gpt-4o-mini",
    });
    completion = completion.data;

    if(completion.choices[0] && completion.choices[0].message){
        newMessage.push(completion.choices[0].message);
        const index = messagesList.length - 1;
        messagesList[index] = newMessage;
    }

    return messagesList;
}

export default chatResponse;
