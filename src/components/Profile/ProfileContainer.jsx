import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, setUserProfile, updateStatus } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthContainer';

class ProfileContainer extends React.Component {
    componentDidMount() {

        let userId = this.props.match.params.userId;
debugger
        if (!userId) {
            userId = this.props.id;
        }

        if (!userId) {
            userId = this.props.history.push('/login');
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    render() {
        
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileComponent.userProfile,
        status: state.profileComponent.status,
        id: state.authPage.id
    }
}

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)