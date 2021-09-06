const Send_Message = 'Send-Message';

let initialState = {
  dialogs: [
    { name: 'Dimych', id: 1 },
    { name: 'Andrey', id: 2 },
    { name: 'Sveta', id: 3 },
    { name: 'Sasha', id: 4 },
    { name: 'Victor', id: 5 },
    { name: 'Valera', id: 6 },
  ],
  message: [
    { message: 'Hi', id: 1 },
    { message: 'How is your React', id: 2 },
    { message: 'Yo', id: 3 },
    { message: 'Yo', id: 4 },
    { message: 'Yo', id: 5 },
  ]
}

const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case Send_Message:
      let text = action.messageText;
      return {
        ...state,
        newMessageText: '',
        message: [...state.message, { message: text, id: 6 }]
      };

    default: return state;
  }
}

export const sendMessageActionCreator = (messageText) => ({ type: Send_Message, messageText });

export default dialogReducer;