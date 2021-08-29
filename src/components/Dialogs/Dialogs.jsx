import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';

const Dialogs = (props) => {
    let state = props.dialogsComponent;
    let dialogElements = state.dialogs.map(dialogs => <DialogItem key={dialogs.id} name={dialogs.name} id={dialogs.id} />);
    let messageElements = state.message.map(message => <Message message={message.message} key={message.id} />);
    let newMessageText = state.newMessageText;

    let onNewMessageChange = (e) => {
        let text = e.target.value;
        props.updateNewMessageBody(text);
    }

    let onSendButtonClick = () => {
        props.sendMessage();
    }

    if (!props.isAuth) return <Redirect to='/login' />

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