import React from 'react';
import { connect } from 'react-redux';
import {  unfollow, follow, setCurrentPage, toggleFollowingProgress, getUserThunk } from '../../redux/usersReducer';
import Users from './Users';
import Prelouder from '../common/Prelouder';
import { withAuthRedirect } from '../../HOC/withAuthContainer';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUserThunk(this.props.pageSize, this.props.currentPage);
    }

    onPageChange = (pageNumber) => {
        this.props.getUserThunk(this.props.pageSize, pageNumber);
    }

    render() {
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
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose (
    withAuthRedirect,
    connect(mapStateToProps, {follow,unfollow, setCurrentPage, toggleFollowingProgress, getUserThunk}) 
) (UsersContainer)