import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';

let mapStateToProps = (state) => {
    return { 
        dialogsComponent: state.dialogsComponent 
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (text) => {
            dispatch(updateMessageBodyActionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;