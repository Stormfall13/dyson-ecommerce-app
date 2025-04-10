import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './header.css'

import burger from '../assets/burger.svg';
import logo from '../assets/logo.svg';
import bucket from '../assets/bucket.svg';
import bucketPink from '../assets/bucket-pink.svg';

const Header = () => {

    const [ countBucket, setIsCountBucket ] = useState(100);

    return (
        <div className='header'>
            <div className="header__wrapp">
                <Navbar/>
                <button className='category__menu-btn'>
                    <img src={burger} alt="burger" />
                </button>
                <a href="/" className='logo'>
                    <img src={logo} alt="" />
                </a>
                <nav className='top__menu'>
                    <Link to="#">О нас</Link>
                    <Link to="#">Доставка и оплата</Link>
                    <Link to="#">Регистрация продукта</Link>
                    <Link to="#">Сервис</Link>
                    <Link to="#">Сертификаты и лицензии</Link>
                </nav>
                <Link 
                    className='bucket__btn'
                    
                    >
                    <div className="count__bucket">{countBucket}</div>
                    {countBucket > 0 ? ( <img src={bucketPink} alt="bucket__btn" /> ) 
                    : 
                    ( <img src={bucket} alt="bucket__btn" /> )

                    }
                    
                </Link> 
            </div>
        </div>
    )
}

export default Header;
