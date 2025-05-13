import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { openCategoryMenu } from '../store/slices/uiSlice';
import { closeCategoryMenu } from '../store/slices/uiSlice';

import Navbar from './Navbar';
import HorizontalMenu from './HorizontalMenu';
import BurgerCategoryMenu from './BurgerCategoryMenu';


import burger from '../assets/burger.svg';
import logo from '../assets/logo.svg';
import bucket from '../assets/bucket.svg';
import bucketPink from '../assets/bucket-pink.svg';

const Header = () => {

    const cart = useSelector((state) => state.cart);
    const countBucket = cart.reduce((total, item) => total + item.amount, 0);
    const categoryMenuOpened = useSelector((state) => state.ui.isCategoryMenuOpen);

    const dispatch = useDispatch();

    const handleOpenMenu = () => {
      dispatch(openCategoryMenu());
    };

    return (
        <header className='header'>
            <div className="header__wrapp">
                <Navbar/>
                <button className='category__menu-btn' onClick={handleOpenMenu}>
                    <img src={burger} alt="burger" />
                </button>
                <Link   onClick={() => {window.location.href = '/'; }} className='logo'>
                    <img src={logo} alt="" />
                </Link>
                <HorizontalMenu />
                <div 
                    className='bucket__btn'
                    >
                    <div className="count__bucket">{countBucket}</div>
                    {countBucket > 0 ? ( 
                        <Link to="/bucket">
                            <img src={bucketPink} alt="bucket__btn" /> 
                        </Link>
                    ) : ( <img src={bucket} alt="bucket__btn" /> )}
                </div> 
            </div>
            {categoryMenuOpened && (
            <BurgerCategoryMenu onClose={() => dispatch(closeCategoryMenu())} />
            )}
        </header>
    )
}

export default Header;
