import React from 'react';
import FriendItem from './FriendItem';
import s from './FriendItems.module.css';

const FriendItems = (props) => {
  
  let friendsElements = props.sidebar.map(friend => <FriendItem name={friend.name} ava={friend.ava} />)

  return (
    <div className={s.friendProfiles}>
      {friendsElements}
    </div>
  )
}

export default FriendItems;