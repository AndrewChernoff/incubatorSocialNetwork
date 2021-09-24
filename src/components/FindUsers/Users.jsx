import React from "react";
import s from './Users.module.css';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({ onPageChange, currentPage, totalUsersCount, pageSize, users, ...props }) => {

    return (
        <div className={s.findUsersPage}>

            <Paginator onPageChange={onPageChange} currentPage={currentPage} totalUsersCount={totalUsersCount} portionSize={pageSize} />
            <div>
                {users.map(u => <User user={u} key={u.id}
                    followingInProgress={props.followingInProgress}
                    unfollow={props.unfollow}
                    follow={props.follow} />
                )}
            </div>
        </div>
    )
}

export default Users;