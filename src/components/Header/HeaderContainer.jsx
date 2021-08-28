import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData, setUserAuthData } from '../../redux/authReducer';
import { authAPI } from '../../API/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData();
    }

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

export default connect(mapsStateToProps, { getAuthUserData })(HeaderContainer);