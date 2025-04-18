import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import c1 from '../assets/c1.png';
import c2 from '../assets/c2.png';
import c3 from '../assets/c3.png';
import c4 from '../assets/c4.png';

import arrowLink from '../assets/arrow-link.svg';
import arrowLinkWhite from '../assets/arrow-link-white.svg';

const SectionCategory = () => {

    const [hoveredId, setHoveredId] = useState(null);

    const dataCategory = [
      {
        id: 1,
        imageCategory: c1,
        categoryName: 'Акции',
        linkUrl: '/product',
      },
      {
        id: 2,
        imageCategory: c2,
        categoryName: 'Фены',
        linkUrl: '/product',
      },
      {
        id: 3,
        imageCategory: c3,
        categoryName: 'Стайлеры',
        linkUrl: '/product',
      },
      {
        id: 4,
        imageCategory: c4,
        categoryName: 'Выпрямители',
        linkUrl: '/product',
      },
    ];

  return (
    <section className='section__category'>
        <div className="category__wrapp">
            {dataCategory.map((category) => {
                const isHovered = hoveredId === category.id;

                return (
                    <div className="category__wrapper" 
                    key={category.id}
                    onMouseEnter={() => setHoveredId(category.id)}
                    onMouseLeave={() => setHoveredId(null)}>
                        <div className="category__img">
                            <img src={category.imageCategory} alt="image category" />
                        </div>
                        <div className={`category__text ${isHovered ? 'hovered' : ''}`}>
                            <p className="category__name">{category.categoryName}</p>
                            <Link to={category.linkUrl} className='link__category'>
                                Подробнее 
                                <img src={isHovered ? arrowLinkWhite : arrowLink} alt="" />
                            </Link>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default SectionCategory
