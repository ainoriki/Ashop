import { NavLink } from 'react-router-dom';
import './style.css'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode';
import { useState, useEffect} from 'react';
import firebase from 'firebase/compat/app';
import user from '../../images/icons/user2.svg'
import basket from '../../images/icons/basket2-fill.svg'
import like from '../../images/icons/heart-fill.svg'
import delivery from '../../images/icons/truck.svg'


const Navbar = () => {
    const activeLink = 'nav-list__link--active';
    const normalLink = 'nav-list__link'

    return ( 
        <nav className="nav">
                <div className="container">

                   <div className="nav-row">
                    <NavLink to="/home" className="logo">
                        <strong>Shop</strong> 
                    </NavLink>

                    <ul className="nav-list">
                        <li className="nav-list__item">
                            <NavLink to="/home" className={({isActive}) => {return isActive ? activeLink:normalLink}}>Home</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/contacts" className={({isActive}) => {return isActive ? activeLink:normalLink}}>Contacts</NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/clothes" className={({isActive}) => {return isActive ? activeLink:normalLink}}>Clothes</NavLink>
                        </li>

                        <li className="nav-list__item"i>
                            <BtnDarkMode />
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/login" className={({isActive}) => {return isActive ? activeLink:normalLink}}>
                            <button type="button" className='btn-log'>Log In</button>
                            </NavLink>
                        </li>
                        <li className="nav-list__item">
                            <NavLink to="/register">
                            <button type="button" className="btn-sign">Sign In</button>
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/account">
                            <a href="/account"><img src={user} /></a>
                            </NavLink>
                        </li>
                        
                        <li className="nav-list__item">
                            <NavLink to="/basket">
                            <a href="/basket"><img src={basket} /></a>
                            </NavLink>
                        </li>
                           
                        <li className="nav-list__item">
                            <NavLink to="/favorites">
                            <a href="/favorites"><img src={like} /></a>
                            </NavLink>
                        </li>

                        <li className="nav-list__item">
                            <NavLink to="/delivery">
                            <a href="/delivery"><img src={delivery} /></a>
                            </NavLink>
                        </li>

                    </ul>
                   </div>
                </div>
        </nav>
     );
}
 
export default Navbar;