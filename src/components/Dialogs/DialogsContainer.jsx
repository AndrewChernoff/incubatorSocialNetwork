import { connect } from 'react-redux';
import { sendMessageActionCreator, updateMessageBodyActionCreator } from '../../redux/dialogReducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from '../../HOC/withAuthContainer';

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

let AuthRedirectComponent = withAuthRedirect(Dialogs);

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (AuthRedirectComponent);

export default DialogsContainer;