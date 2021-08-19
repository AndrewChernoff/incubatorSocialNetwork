import React from 'react';
import Header from './Header';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserAuthData } from '../../redux/authReducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, email, login } = response.data.data;
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