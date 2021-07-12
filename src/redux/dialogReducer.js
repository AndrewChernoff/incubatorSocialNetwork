const Send_Message = 'Send-Message';
const Update_Message_Body = 'Update-Message-Body';

const dialogReducer = (state, action) => {
    switch (action.type) {
        case Send_Message:
            let newMessage = {
                message: state.newMessageText,
                id: '6'
            }
            state.message.push(newMessage);
            state.newMessageText = '';
            return state;
        case Update_Message_Body:
            state.newMessageText = action.newText;
            return state;
            default: return state;
    }
}

export const sendMessageActionCreator = () => ({type: Send_Message});
export const updateMessageBodyActionCreator = (text) => ({type:Update_Message_Body, newText: text });


export default dialogReducer;