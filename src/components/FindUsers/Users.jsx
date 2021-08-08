import * as axios from "axios";
import React from "react";
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPge}`).then(response => {
            this.props.setUsers(response.data.items)
        }
        )
    }

    onPageChange = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)
        }
        )
    }

    
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    
        return (
            <div className={s.findUsersPage}>
            {pages.map(p => {
            return    <span onClick={(e) => {this.onPageChange(p)}} className={this.props.currentPage === p && s.selectedPage}> {p} </span>
            }
            )}
                
                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} /></div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>
                )}
            </div>
        )
    }
}

export default Users;