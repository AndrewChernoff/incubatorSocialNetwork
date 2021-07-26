import React from 'react';
import FriendItems from './FriendItems';
import s from './FriendList.module.css';

const FriendList = (props) => {
    return <div className={s.friendsList}>
        <div className={s.friendTitle}>
            Friends
        </div>

        <FriendItems /* sidebar={props.sidebar} *//>
    </div>
}

export default FriendList;