import React from 'react';
import { sendMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    let state = props.state;
    
    let onNewMessageChange = (text) => {
        props.dispatch(updateMessageBodyActionCreator(text));
    }
    
    let onSendButtonClick = () => {
        props.dispatch(sendMessageActionCreator());
    }

    return (
        <Dialogs updateNewMessageBody={onNewMessageChange}
        sendMessage={onSendButtonClick}
        state={state} store={props.store}/>
        )
}

export default DialogsContainer;