import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserAuthData } from '../../redux/authReducer';
import { logIn } from '../../API/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        logIn()
            .then(data => {
                if (data.resultCode === 0) {
                    let { id, email, login } = data.data;
                    this.props.setUserAuthData(id, email, login)
                }

            }
            )
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

export default connect(mapsStateToProps, { setUserAuthData })(HeaderContainer);