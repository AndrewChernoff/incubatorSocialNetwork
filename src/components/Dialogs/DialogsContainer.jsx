import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthContainer';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return { 
        dialogsComponent: state.dialogsComponent,
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

export default compose ( 
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)