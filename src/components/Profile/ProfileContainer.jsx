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

        if (!userId) {
            userId = 19005;
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
        status: state.profileComponent.status
    }
}

export default compose(
    connect(mapStateToProps, { setUserProfile, getUserProfile, getUserStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)