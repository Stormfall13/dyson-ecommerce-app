import React, { useState } from 'react';

import d1 from '../assets/d1.png';
import d2 from '../assets/d2.png';
import d3 from '../assets/d3.png';


const SectionBlockGoods = () => {

  const [expanded, setExpanded] = useState(false);
  const [amount, setAmount] = useState(1);

  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value < 1) {
      setAmount(1);
    } else {
      setAmount(value);
    }
  };

  const handleBlur = () => {
    if (!amount || amount < 1) {
      setAmount(1);
    }
  };

  const increment = () => {
    setAmount((prev) => prev + 1);
  };

  const decrement = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const goodsData = [
    {
      id: 1,
      goodsImage: d1,
      goodsName: 'Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческамия',
      inStock: true,
      flags: [
        { id: 1, value: '-15%', active: false },
        { id: 2, value: '-20%', active: true },
        { id: 3, value: '-50%', active: false },
      ],
      mainPrice: '59 990',
      oldPrice: '69 990',
    },
    {
      id: 2,
      goodsImage: d2,
      goodsName: 'Фен Dyson Supersonic HD07 с 5 насадками и подставкой',
      inStock: false,
      flags: [
        { id: 1, value: '-15%', active: false },
        { id: 2, value: '-20%', active: false },
        { id: 3, value: '-50%', active: true },
      ],
      mainPrice: '47 990',
      oldPrice: '51 990',
    },
    {
      id: 3,
      goodsImage: d3,
      goodsName: 'Фен Dyson Supersonic 4 насадки HD03 с чехлом для хранения цвет сирень',
      inStock: true,
      flags: [
        { id: 1, value: '-15%', active: true },
        { id: 2, value: '-20%', active: false },
        { id: 3, value: '-50%', active: false },
      ],
      mainPrice: '46 990',
      oldPrice: '51 990',
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
              {goodsData.map((goods) => {
                  return (
                      <div className="goods__wrapper-item" key={goods.id}>
                          <div className="goods__image">
                            <img src={goods.goodsImage} alt="image" />
                          </div>
                          <p className="goods__name">{goods.goodsName}</p>
                          <div className="stock__flags">
                            {goods.inStock ? ( 
                              <div className='stock'>В наличии</div> 
                            ) : ( 
                              <div className='in__stock'>Нет в наличии</div> 
                            )}
                            {(() => {
                              const activeFlag = goods.flags.find(flag => flag.active);
                              return activeFlag ? <div className='flag'>{activeFlag.value}</div> : null;
                            })()}
                          </div>
                          <div className="goods__price-wrapp">
                            <div className="goods__main-price">{goods.mainPrice} Р</div>
                            <div className="goods__old-orice">{goods.oldPrice} Р</div>
                          </div>
                          <div className="goods__btn-wrapp">
                          <div className="goods__amount">
                            <button onClick={decrement}>−</button>
                            <input
                              type="text"
                              value={amount}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              min={1}
                            />
                            <button onClick={increment}>+</button>
                          </div>
                            <button className='inBucket'>В корзину</button>
                          </div>
                      </div>
                  )
              })}
          </div>
      </div>
    </section>
  )
}

export default SectionBlockGoods
