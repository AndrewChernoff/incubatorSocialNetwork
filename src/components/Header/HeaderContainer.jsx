import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}

let mapsStateToProps = (state) => {
    return {
        isAuth: state.authPage.isAuth,
        login: state.authPage.login
    }
}

export default connect(mapsStateToProps, { logoutUser })(HeaderContainer);