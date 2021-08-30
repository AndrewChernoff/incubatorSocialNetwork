import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthContainer';

class ProfileContainer extends React.Component {
    componentDidMount() {
       
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }
            this.props.getUserProfile(userId);
            }

    render() {
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileComponent.userProfile,
    }
}

export default compose (
    connect(mapStateToProps, { setUserProfile, getUserProfile }),
    withRouter,
    withAuthRedirect
) (ProfileContainer)