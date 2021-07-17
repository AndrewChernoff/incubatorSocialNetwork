import React from 'react';
import { sendMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogReducer';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer> 
            {
            (store) => {
                //let state = props.state;
                let state = store.getState();  

                let onNewMessageChange = (text) => {
                    store.dispatch(updateMessageBodyActionCreator(text));
                }

                let onSendButtonClick = () => {
                    store.dispatch(sendMessageActionCreator());
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendButtonClick}
                    state={state} store={props.store} />
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;