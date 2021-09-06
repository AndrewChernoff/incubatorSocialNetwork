import { connect } from 'react-redux';
import { sendMessageActionCreator } from '../../redux/dialogReducer';
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
        sendMessage: (messageText) => {
            dispatch(sendMessageActionCreator(messageText));
        }
    }
}

export default compose ( 
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
) (Dialogs)