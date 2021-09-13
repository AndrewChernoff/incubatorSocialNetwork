import React from 'react';
import { connect } from 'react-redux';
import {  unfollow, follow, setCurrentPage, toggleFollowingProgress, getUserThunk } from '../../redux/usersReducer';
import Users from './Users';
import Prelouder from '../common/Prelouder';
import { withAuthRedirect } from '../../HOC/withAuthContainer';
import { compose } from 'redux';
import { getCurrentPage, getFollowingInProgress, getIsFetching, getPageSize, getTotalUsersCount, getUsers } from '../../redux/usersSelectors';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUserThunk(this.props.pageSize, this.props.currentPage);
    }

    onPageChange = (pageNumber) => {
        this.props.getUserThunk(this.props.pageSize, pageNumber);
    }

    render() {
        console.log('users')
        return <>
            {this.props.isFetching === true ?
                <Prelouder/> :
                null}

            <Users onPageChange={this.onPageChange}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                getUserThunk={this.props.getUserThunk} />
        </>
    }
}

let mapStateToProps = (state) => {
    console.log('mapStateToPropsUsers')
    return { 
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state)
    }
}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {follow,unfollow, setCurrentPage, toggleFollowingProgress, getUserThunk}) 
) (UsersContainer)