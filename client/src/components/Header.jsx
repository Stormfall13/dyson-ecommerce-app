import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import HorizontalMenu from './HorizontalMenu';


import burger from '../assets/burger.svg';
import logo from '../assets/logo.svg';
import bucket from '../assets/bucket.svg';
import bucketPink from '../assets/bucket-pink.svg';

const Header = () => {

    const [ countBucket, setIsCountBucket ] = useState(1);

    return (
        <header className='header'>
            <div className="header__wrapp">
                <Navbar/>
                <button className='category__menu-btn'>
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
                    ) 
                    : 
                    ( <img src={bucket} alt="bucket__btn" /> )

                    }
                    
                </div> 
            </div>
        </header>
    )
}

export default Header;
