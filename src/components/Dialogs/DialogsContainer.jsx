import React from 'react';
import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogReducer';
import StoreContext from '../../storeContext';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer> 
            {
            (store) => {

                let onNewMessageChange = (text) => {
                    store.dispatch(updateMessageBodyActionCreator(text));
                }

                let onSendButtonClick = () => {
                    store.dispatch(sendMessageActionCreator());
                }
                return <Dialogs updateNewMessageBody={onNewMessageChange}
                    sendMessage={onSendButtonClick}
                    dialogsComponent={store.getState().dialogsComponent} />
            }
        }
        </StoreContext.Consumer>
    )
} 

/* const mapStateToProps = (state) => {
    return { dialogsComponent: state.dialogsComponent }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: () => {
            dispatch(sendMessageActionCreator());
         },
        sendMessage: (text) => {
            dispatch(updateMessageBodyActionCreator(text));
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs); */

export default DialogsContainer;