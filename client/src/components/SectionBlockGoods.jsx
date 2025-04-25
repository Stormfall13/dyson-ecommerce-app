import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAmount, increment, decrement } from '../store/slices/amountsSlice';

import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';
import arrowLeft from '../assets/arrow-left.svg';
import arrowRight from '../assets/arrow-right.svg'

import goodsData from './goodsData';
import categoryArray from './categoryArray';


const SectionBlockGoods = () => {

  const [expanded, setExpanded] = useState(false);
  const [sectionGoodsHidden, setSectionGoodsHidden] = useState(true);

  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);

  // Вычисляем общее количество страниц
  const totalPages = Math.ceil(goodsData.length / itemsPerPage);

  // Получаем товары для текущей страницы
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentGoods = goodsData.slice(startIndex, startIndex + itemsPerPage);


  const dispatch = useDispatch();
  const amounts = useSelector((state) => state.amounts);

  const handleChange = (id, e) => {
    const value = parseInt(e.target.value, 10);
    dispatch(setAmount({ id, value: isNaN(value) ? 1 : value }));
  };
  
  const handleBlur = (id) => {
    const value = amounts[id];
    dispatch(setAmount({ id, value: value < 1 ? 1 : value }));
  };
  
  const handleIncrement = (id) => dispatch(increment(id));
  const handleDecrement = (id) => dispatch(decrement(id));

  // Показываем первые 4 или все в зависимости от expanded
  const visibleCategories = expanded
  ? categoryArray
  : categoryArray.slice(0, 4);


  return (
    <section className="section__goods" style={{
      display: sectionGoodsHidden ? 'block' : 'none'
    }}>
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
              {currentGoods.map((goods) => {
                  return (
                      <div className="goods__wrapper-item" key={goods.id}>
                          <div className="goods__image">
                            <img src={goods.goodsImage} alt="image" />
                          </div>
                          <a href="#" className="goods__name">{goods.goodsName}</a>
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
                            <div className="goods__old-price">{goods.oldPrice} Р</div>
                          </div>
                          <div className="goods__btn-wrapp">
                          <div className="goods__amount">
                            <button onClick={() => handleDecrement(goods.id)}>
                              <img src={minus} alt="" />
                            </button>
                            <input
                              type="text"
                              value={amounts[goods.id] || 1}
                              onChange={(e) => handleChange(goods.id, e)}
                              onBlur={() => handleBlur(goods.id)}
                              min={1}
                            />
                            <button onClick={() => handleIncrement(goods.id)}>
                                <img src={plus} alt="" />
                            </button>
                          </div>
                            <button className='inBucket'>В корзину</button>
                          </div>
                      </div>
                  )
              })}
          </div>
          <div className="pagination">
              <div className="pagination__wrapp-button">
                <button 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  <img src={arrowLeft} alt="" />
                </button>

                <button 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  <img src={arrowRight} alt="" />
                </button> 
              </div>
              <span style={{ margin: '0 10px' }}>
                {currentPage} из {totalPages}
              </span>
          </div>
      </div>
    </section>
  )
}

export default SectionBlockGoods
