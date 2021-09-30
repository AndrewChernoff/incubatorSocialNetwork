import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getUserStatus, setUserProfile, updateStatus, uploadPhoto } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthContainer';

class ProfileContainer extends React.Component {

    updateProfile() {
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = this.props.autherizedUser;
        }

        if (!userId) {
            userId = this.props.history.push('/login');
        }

        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.updateProfile();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
            this.updateProfile();
        }
    }

    render() {
        return (
            <Profile {...this.props} status={this.props.status} updateStatus={this.props.updateStatus} isOwner={!this.props.match.params.userId} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileComponent.userProfile,
        status: state.profileComponent.status,
        autherizedUser: state.authPage.id
    }
}

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateStatus, uploadPhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)