const Send_Message = 'Send-Message';
const Update_Message_Body = 'Update-Message-Body';

const dialogReducer = (state, action) => {
    if (action.type === Send_Message) {
        let newMessage = {
            message: state.newMessageText,
            id: '6'
        }
        state.message.push(newMessage);
        state.newMessageText = '';
    }
    else if (action.type === Update_Message_Body) {
        state.newMessageText = action.newText;
    }
    return state
}

export default dialogReducer;