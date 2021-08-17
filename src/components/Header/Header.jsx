import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

let Header = (props) => {
  return (
    <header className={s.header}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbNUo7Du0AiYeNKcBocbWzvDluUYkt6ABMSg&usqp=CAU" />

      <div className={s.loginBlock}>
      {props.isAuth === true ? props.login :  <NavLink to='/login'> Login </NavLink>}
        
      </div>
    </header>
  )
}

export default Header;