import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import FriendList from './FriendsList/FriendList';
import StoreContext from '../../storeContext';

const Navbar = (props) => {

    return (
        <StoreContext.Consumer>
          {(store) => (  
            <nav className={s.nav}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messeges</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/music' activeClassName={s.active}>Music</NavLink>
                </div>

                <div className={s.item}>
                    <NavLink to='/settings' activeClassName={s.active}>Settings</NavLink>
                </div>

                <FriendList /* sidebar={store.getState().sidebar} */ />
            </nav>
          )    
        }
        </StoreContext.Consumer>
    )
}

export default Navbar;