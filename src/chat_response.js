import OpenAI from "openai";

async function chatResponse(messagesList, newMessage){
    const config = { apiKey: import.meta.env.VITE_OPENAI_API_KEY, dangerouslyAllowBrowser: true };
    const openai = new OpenAI(config);

    let chatMessageList = [{"role": "system", "content": "You are a helpful assistant."}, ...messagesList.flat()]
    const completion = await openai.chat.completions.create({
        messages: chatMessageList,
        model: "gpt-4o-mini",
    });
  
    if(completion.choices[0] && completion.choices[0].message){
        newMessage.push(completion.choices[0].message);
        const index = messagesList.length - 1;
        messagesList[index] = newMessage;
    }

    return messagesList;
}

export default chatResponse;