import React, { useState } from 'react';

import d1 from '../assets/d1.png';


const SectionBlockGoods = () => {

  const [expanded, setExpanded] = useState(false);


  const goodsData = [
    {
      id: 1,
      goodsImage: d1,
      goodsName: 'Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческамия',
      inStock: true,
      flags: [
        {
          id: 1,
          flagFirst: '-15%',
        },
        {
          id: 2,
          flagSecond: '-20%', 
        },
        {
          id: 3,
          flagThird: '-50%',
        }
      ],
      mainPrice: '59990',
      oldPrice: '69990',
    },
  ]

  const categoryArray = [
    {
      id: 1,
      categoryName: 'dyson стайлер для длинных волос',
      categoryLink: '#',
    },
    {
      id: 2,
      categoryName: 'dyson стайлер красный',
      categoryLink: '#',
    },
    {
      id: 3,
      categoryName: 'dyson hs01 airwrap complete',
      categoryLink: '#',
    },
    {
      id: 4,
      categoryName: 'фен щетка дайсон',
      categoryLink: '#',
    },
    {
      id: 5,
      categoryName: 'dyson Фен Supersonic hd07',
      categoryLink: '#',
    }
  ]

    // Показываем первые 4 или все в зависимости от expanded
    const visibleCategories = expanded
    ? categoryArray
    : categoryArray.slice(0, 4);


  return (
    <section className='section__goods'>
      <div className="goods__wrapp">
          <div className="goods__wrapper-top">
            <div className="top__wrapper">
              <h2 className='title__goods'>
                Спецпредложения <span>{goodsData.length}</span>
              </h2> 
              <div className="category__goods">
                  {visibleCategories.map((category) => {
                    return (
                      <a href={category.categoryLink} key={category.id}>{category.categoryName}</a> 
                    )
                  })}
                  {categoryArray.length > 4 && (
                  <button onClick={() => setExpanded(!expanded)}>
                    {expanded ? 'Скрыть' : 'Показать ещё'}
                  </button>
                )}
              </div> 
              <select className="sorting">
                <option value="">Сначала популярные</option>
                <option value="">По возрастанию</option>
                <option value="">По убыванию</option>
                <option value="">По скидке</option>
              </select>
            </div>
          </div>
          <div className="goods__wrapper-content">
              {/* {goodsData.map((goods) => {
                  return (
                      
                  )
              })} */}
          </div>
      </div>
    </section>
  )
}

export default SectionBlockGoods
