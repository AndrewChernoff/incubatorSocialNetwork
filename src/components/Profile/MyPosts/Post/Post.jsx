import React from 'react';
import s from './Post.module.css';

let Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img className={s.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNslP7-_P7jz5MrT5yhW14y_IzBDbZZT0ag&usqp=CAU" alt='ava' />
                {props.message}
                <div>
                    <span>like {props.likeCount}</span>
                </div>
            </div>
        </div>
    )
}

export default Post;