import React from 'react';
import { connect } from 'react-redux';
import { setUsersAC, unfollowAC, followAC, setCurrentPageAC, setTotalUsersCountAC, toggleIsFetchingAC } from '../../redux/usersReducer';
import * as axios from "axios";
import Users from './Users';
import loadingGif from '../../assets/images/loading2.gif';
import Prelouder from '../common/Prelouder';

class UsersContainer extends React.Component {
    componentDidMount() {
        debugger
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPge}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        }
        )
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        }
        )
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
                unfollow={this.props.unfollow} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userID) => { dispatch(followAC(userID)) },
        unfollow: (userID) => { dispatch(unfollowAC(userID)) },
        setUsers: (users) => { dispatch(setUsersAC(users)) },
        setCurrentPage: (pageNumber) => { dispatch(setCurrentPageAC(pageNumber)) },
        setTotalUsersCount: (totalCount) => { dispatch(setTotalUsersCountAC(totalCount)) },
        toggleIsFetching: (isFetching) => { dispatch(toggleIsFetchingAC(isFetching)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)