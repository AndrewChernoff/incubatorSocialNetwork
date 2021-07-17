import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogReducer';

const Dialogs = (props) => {
    let state = props.state;
    let dialogElements = state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
    let messageElements = state.message.map(message => <Message message={message.message} />);
    let newMessageText = props.store.getState().dialogsComponent.newMessageText;
    debugger
    let onNewMessageChange = (e) => {
       debugger
       let text = e.target.value;
       //props.dispatch(updateMessageBodyActionCreator(text));
       props.updateNewMessageBody(text);
    }
    
    let onSendButtonClick = () => {
        //props.dispatch(sendMessageActionCreator());
        props.sendMessage();
    }

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogItems}>
                    {dialogElements}
                </div>

                <div className={s.messages}>
                    {messageElements}
                    <div>
                        <div>
                            <textarea
                            onChange={onNewMessageChange} 
                            placeholder='Enter your message' 
                            value={newMessageText}></textarea>
                        </div>

                        <div>
                            <button onClick={onSendButtonClick}>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;