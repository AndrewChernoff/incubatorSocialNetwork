import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { usersAPI } from '../../API/api';

class ProfileContainer extends React.Component {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 2;
        }
        debugger
/*         usersAPI.getProfile(userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            }
            )*/
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
        profile: state.profileComponent.userProfile
    }
}

let WithUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(WithUrlDataContainerComponent)