import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeCategoryMenu } from '../store/slices/uiSlice';

import categoryMenuFooter from './categoryMenuFooter';

import close from '../assets/close.svg';

import dataHorMenu from './dataHorMenu';

const BurgerCategoryMenu = () => {

    const [isMobile, setIsMobile] = useState(null);
    const dispatch = useDispatch();
    
    const handleClose = () => {
        dispatch(closeCategoryMenu());
    };

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth > 991);
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    if (isMobile === null) return null;

    return (
        <div className='burger__category-menu'>
            <div className="burger__category-wrapp">
                <button className="close__btn" onClick={handleClose}>
                    <img src={close} alt="" />
                </button>
                <div className="burger__menu-wrapp">
                    <nav className='category__menu'>
                        <ul>
                        {categoryMenuFooter.map((categoryFooter) => {
                            return (
                                <li key={categoryFooter.id}>
                                    <Link 
                                        to={`/products/${categoryFooter.slug}`} 
                                        onClick={handleClose}>
                                        {categoryFooter.nameParagParag}
                                    </Link>
                                </li>
                            )
                        })}
                        </ul>
                    </nav>
                    {!isMobile && (
                        <nav className="hor__menu-burger">
                            <ul>
                            {dataHorMenu.map((horMenuItems) => {
                                return (
                                    <li key={horMenuItems.id}>
                                        <a href={horMenuItems.linkMenu}>{horMenuItems.nameMenu}</a>
                                    </li> 
                                )
                            })} 
                            </ul>
                        </nav>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BurgerCategoryMenu
