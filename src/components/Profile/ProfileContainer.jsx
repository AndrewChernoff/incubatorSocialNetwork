import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, setUserProfile } from '../../redux/profileReducer';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
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

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);




let mapStateToProps = (state) => {
    return {
        profile: state.profileComponent.userProfile,
    }
}

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, { setUserProfile, getUserProfile })(WithUrlDataContainerComponent)