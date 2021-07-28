import React from "react";
import s from './Users.module.css';

const Users = (props) => {
debugger
   if (props.users.length === 0) { 
   props.setUsers ( [
        {
            id: 1,
            photoURL: 'https://yt3.ggpht.com/ytc/AAUvwnihEIew1x--ivyCNeGwa13y-FShBYm9rGl_sXxVEg=s800-c-k-c0x00ffffff-no-rj',
            followed: false,
            fullName: 'Andrew Chernoff',
            status: 'Everything is awesome',
            location: { country: 'USA', city: 'Chicago' }
        },

        {
            id: 2,
            photoURL: 'https://yt3.ggpht.com/ytc/AAUvwnihEIew1x--ivyCNeGwa13y-FShBYm9rGl_sXxVEg=s800-c-k-c0x00ffffff-no-rj',
            followed: true,
            fullName: 'Artemus Dolgin',
            status: 'Chudila from Zhytomir',
            location: { country: 'USA', city: 'Los Andgeles' }
        },

        {
            id: 3,
            photoURL: 'https://yt3.ggpht.com/ytc/AAUvwnihEIew1x--ivyCNeGwa13y-FShBYm9rGl_sXxVEg=s800-c-k-c0x00ffffff-no-rj',
            followed: true,
            fullName: 'Serega Rastorguev',
            status: 'That was it',
            location: { country: 'USA', city: 'Los Andgeles' }
        },

        {
            id: 4,
            photoURL: 'https://yt3.ggpht.com/ytc/AAUvwnihEIew1x--ivyCNeGwa13y-FShBYm9rGl_sXxVEg=s800-c-k-c0x00ffffff-no-rj',
            followed: false,
            fullName: 'Alisher Abdulloev',
            status: 'Assalam Aleikum, pharmasists',
            location: { country: 'Germany', city: 'Berlin' }
        }
    ]
    )
}
    return (
        <div className={s.findUsersPage}>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div> <img src={u.photoURL} className={s.userPhoto} /></div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>follow</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>
            )}
        </div>
    )
}

export default Users;