import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { setAmount, increment, decrement } from '../store/slices/amountsSlice';
import { addToCart } from '../store/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

import categoryDataMap from '../data/categoryDataMap';

import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';

import '../App.css';

const ProductPage = () => {
  const { slug } = useParams();
  const categoryGoods = categoryDataMap[slug];

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
  
  if (!categoryGoods) {
    return (
      <div className='not__prod'>
        <Header />
        <h2>Товары не найдены</h2>
      </div>
    );
  }

  return (
    <>
    <div className='prod__wrapp'>
      <Header />
      <div className="goods__wrapp">
        <h1 className='prod__title'>{slug}</h1>
        <div className="goods__wrapper-content">
            {categoryGoods.map((goods) => {
              const handleAddToCart = () => {
                const amount = amounts[goods.id] || 1;
                dispatch(addToCart({ id: goods.id, amount, product: goods }));
              };
                return (
                    <div className="goods__wrapper-item" key={goods.id}>
                        <div className="goods__image">
                          <img src={goods.goodsImage} alt="image" />
                        </div>
                        <Link to={`/product/${goods.id}`} className="goods__name">{goods.goodsName}</Link>
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
                        <button
                          className={`inBucket ${!goods.inStock ? 'disabled' : ''}`}
                          onClick={handleAddToCart}
                          disabled={!goods.inStock}
                        >
                          В корзину
                        </button>
                        </div>
                    </div>
                )
            })}
        </div> 
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ProductPage;
