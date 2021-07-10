import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/state';

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
    let messageElements = props.state.message.map(message => <Message message={message.message} />);
    let newMessageText = props.newMessageText;

    let onNewMessageChange = (e) => {
       let text = e.target.value;
        props.dispatch(updateMessageBodyActionCreator(text));
    }
    
    let onSendButtonClick = () => {
        props.dispatch(sendMessageActionCreator());
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