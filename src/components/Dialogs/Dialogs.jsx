import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import { Field, Form } from 'react-final-form';
import { maxValue, minValue, required, composeValidators } from '../../Validate/validator';
import { Textarea } from '../../Validate/FormsControl';

const Dialogs = (props) => {
    let state = props.dialogsComponent;
    let dialogElements = state.dialogs.map(dialogs => <DialogItem key={dialogs.id} name={dialogs.name} id={dialogs.id} />);
    let messageElements = state.message.map(message => <Message message={message.message} key={message.id} />);

    let onSendButtonClick = (e) => {
        
        let text = e.text;
        props.sendMessage(text);
        e.text = ''
    }

    //if (!props.isAuth) return <Redirect to='/login' />

    
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
                            <DialogsForm onSendButtonClick={onSendButtonClick} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    return (
        <Form
            onSubmit={props.onSendButtonClick}

            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}> 
                    <div>
                        <Field name={'text'} component={Textarea} placeholder={"Enter your message"} value={'hello'}
                         validate={composeValidators(required, maxValue(50), minValue(1))}/>
                        <button>Submit</button>
                    </div>
                </form>)} />
    )
}


export default Dialogs;