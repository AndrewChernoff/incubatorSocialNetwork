import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { sendMessageActionCreator, textNewMessageActionCreator } from '../../redux/state';

const Dialogs = (props) => {
    let dialogElements = props.state.dialogs.map(dialogs => <DialogItem name={dialogs.name} id={dialogs.id} />);
    let messageElements = props.state.message.map(message => <Message message={message.message} />);
    let newMessageText = props.newMessageText.newMessageText;
    
    let newMessageElement = React.createRef();

    let textNewMessage = (e) => {
        let text = newMessageElement.current.value;
        //props.textNewMessage(text);
        props.dispatch(textNewMessageActionCreator(text))
    }

    let onMessageChange = () => {
        //let text = newMessageElement.current.value;
        //props.updateMessageText(text);
        props.dispatch(sendMessageActionCreator())
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
                            <textarea ref={newMessageElement} onChange={onMessageChange} 
                            placeholder="Enter your message"
                            value={newMessageText}></textarea>
                        </div>

                        <div>
                            <button onClick={textNewMessage}>send</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;