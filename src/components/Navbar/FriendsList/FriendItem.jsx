import React from 'react';
import s from './FriendItem.module.css';

const FriendItem = (props) => {
  return (
      <div className={s.a}>
        <img src={props.ava} />
        <div> {props.name} </div>
      </div>
  )
}

export default FriendItem;