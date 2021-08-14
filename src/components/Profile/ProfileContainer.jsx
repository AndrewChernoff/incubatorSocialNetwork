import React from 'react';
import Profile from './Profile';
import * as axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../redux/profileReducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                debugger
                this.props.setUserProfile(response.data);
            }
            )
    }

    render() {
        return (
            <Profile {...this.props} />
                    )
    {/* <Profile profile={this.props.profile} /> */}

                }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profileComponent.userProfile
    }
}

/* let mapDispatchToprops = (dispatch) => {
    return {
        setUserProfile: (userProfile) => dispatch(setUserProfile(userProfile))
    }
}
 */
export default connect (mapStateToProps, {setUserProfile}) (ProfileContainer)