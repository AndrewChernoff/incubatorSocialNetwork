import React from "react";
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';
import { NavLink } from "react-router-dom";
import axios from "axios";
import { followUser, unfollowUser } from "../../API/api";

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    
    return (
        <div className={s.findUsersPage}>
            {pages.map(p => {
                return <span onClick={(e) => { props.onPageChange(p) }} className={props.currentPage === p && s.selectedPage}> {p} </span>
            }
            )}

            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} />
                        </NavLink>
                    </div>

                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                unfollowUser(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.unfollow(u.id);
                                    }
                                    props.toggleFollowingProgress(false, u.id)
                                })

                            }}>
                                unfollow
                            </button>
                            : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                followUser(u.id).then(data => {
                                    if (data.resultCode == 0) {
                                        props.follow(u.id)
                                    }
                                    props.toggleFollowingProgress(false, u.id);
                                })

                            }}>
                                follow
                            </button>}
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

export default Users;