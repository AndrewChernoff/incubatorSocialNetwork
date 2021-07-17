const Send_Message = 'Send-Message';
const Update_Message_Body = 'Update-Message-Body';

let initialState = {
    dialogs: [
      { name: 'Dimych', id: '1' },
      { name: 'Andrey', id: '2' },
      { name: 'Sveta', id: '3' },
      { name: 'Sasha', id: '4' },
      { name: 'Victor', id: '5' },
      { name: 'Valera', id: '6' },
    ],
    message: [
      { message: 'Hi', id: '1' },
      { message: 'How is your React', id: '2' },
      { message: 'Yo', id: '3' },
      { message: 'Yo', id: '4' },
      { message: 'Yo', id: '5' },
    ],
    newMessageText: ''
  }

const dialogReducer = (state = initialState, action) => {
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