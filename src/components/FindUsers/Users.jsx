import * as axios from "axios";
import React from "react";
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return (
            <div className={s.findUsersPage}>
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

/* import * as axios from "axios";
import React from "react";
import s from './Users.module.css';
import userPhoto from './../../assets/images/user.png';

const Users = (props) => {
    let getUSers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                props.setUsers(response.data.items);
            })
        }
    }

    return (
        <div className={s.findUsersPage}>
            <button onClick={getUSers}>Get users</button>

            {props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto} /></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
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

export default Users; */