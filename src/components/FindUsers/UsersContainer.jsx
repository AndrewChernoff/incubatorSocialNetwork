import React from 'react';
import { connect } from 'react-redux';
import { setUsers, unfollow, follow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from '../../redux/usersReducer';
import * as axios from 'axios';
import Users from './Users';
import Prelouder from '../common/Prelouder';
import { usersAPI } from '../../API/api';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.pageSize, this.props.currentPge)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        }
        )
    }

    onPageChange = (pageNumber) => {
        
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        
        usersAPI.getUsers(this.props.pageSize, pageNumber)
        .then(data => {
            
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
}) (UsersContainer)