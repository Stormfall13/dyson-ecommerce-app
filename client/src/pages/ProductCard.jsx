import React from 'react';
import { useParams } from 'react-router-dom';
import { setAmount, increment, decrement } from '../store/slices/amountsSlice';
import { useSelector, useDispatch } from 'react-redux';

import Header from '../components/Header';
import Footer from '../components/Footer';

import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';

import categoryDataMap from '../data/categoryDataMap'; // ← подключай массив всех товаров

const ProductCard = () => {
  const { id } = useParams();
  
  // Объединяем все товары из всех категорий
  const allGoods = Object.values(categoryDataMap).flat();

  // Ищем товар по id
  const product = allGoods.find(item => item.id === Number(id));
  

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
  
  
  if (!product) {
    return (
      <div>
        <Header />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  return (
    <>
      <Header />
      <section className='prod__card-wrapp'>
        <h1 className='prod__card-title'>{product.goodsName}</h1>
        <div className="card__wrapp">
          <div className="prod__img">
            <img src={product.goodsImage} alt={product.goodsName} />
          </div>
            <div className="card__goods-wrapp">
              <div className="card__item-wrapp">
                <div className="price__wrapp">
                  <p className='main__price'>{product.mainPrice} Р</p>
                  <p className='old__price'>{product.oldPrice} Р</p> 
                </div>
                <div className="stock__flags">
                  {product.inStock ? ( 
                    <div className='stock'>В наличии</div> 
                  ) : ( 
                    <div className='in__stock'>Нет в наличии</div> 
                  )}
                  {(() => {
                    const activeFlag = product.flags.find(flag => flag.active);
                    return activeFlag ? <div className='flag'>{activeFlag.value}</div> : null;
                  })()}
                </div>
              </div>
              <div className="goods__btn-wrapp">
                <div className="goods__amount">
                  <button onClick={() => handleDecrement(product.id)}>
                    <img src={minus} alt="" />
                  </button>
                  <input
                    type="text"
                    value={amounts[product.id] || 1}
                    onChange={(e) => handleChange(product.id, e)}
                    onBlur={() => handleBlur(product.id)}
                    min={1}
                  />
                  <button onClick={() => handleIncrement(product.id)}>
                      <img src={plus} alt="" />
                  </button>
                </div>
                  <button className='inBucket'>В корзину</button>
              </div>   
            </div>
        </div>
        </section>
        <Footer/>
    </>
  );
};

export default ProductCard;
