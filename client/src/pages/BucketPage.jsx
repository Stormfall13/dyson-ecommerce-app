import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, changeAmount } from '../store/slices/cartSlice';

import Header from '../components/Header';
import Footer from '../components/Footer';

import minus from '../assets/minus.svg';
import plus from '../assets/plus.svg';
import deleteGoods from '../assets/delete.svg';

const BucketPage = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.amount * parseInt(item.mainPrice.replace(/\s/g, '')), 0);

  const handleIncrement = (id) => {
    const item = cart.find(item => item.id === id);
    if (item) {
      dispatch(changeAmount({ id, amount: item.amount + 1 }));
    }
  };
  
  const handleDecrement = (id) => {
    const item = cart.find(item => item.id === id);
    if (item && item.amount > 1) {
      dispatch(changeAmount({ id, amount: item.amount - 1 }));
    }
  };


  return (
    <>
      <Header />
      <section className="bucket">
        {cart.length === 0 ? (
          <div className='bucket__empty'>
          <h1>Корзина пуста</h1>
          <Link onClick={() => {window.location.href = '/'; }} >Вернуться на главную</Link>
          </div>
        ) : (
          <>
          <h1 className='bucket__title'>Корзина</h1>
          <div className="bucket__main-wrapp">
          <div className="bucket__items">
            {cart.map(item => (
              <div key={item.id} className="bucket__item">
                <div className="bucket__item-img">
                  <img src={item.goodsImage} alt={item.goodsName} />
                </div>
                <p className='goods__name'>{item.goodsName}</p>
                {/* {(() => {
                  const activeFlag = item.flags.find(flag => flag.active);
                  return activeFlag ? <div className='flag'>{activeFlag.value}</div> : null;
                })()} */}
                <div className='cart__amount'>
                    <div className="goods__amount">
                      <button onClick={() => handleDecrement(item.id)}>
                        <img src={minus} alt="уменьшить" />
                      </button>
                      <input
                        type="text"
                        value={item.amount}
                        onChange={(e) => {
                          const value = parseInt(e.target.value, 10);
                          if (!isNaN(value) && value >= 1) {
                            dispatch(changeAmount({ id: item.id, amount: value }));
                          }
                        }}
                      />
                      <button onClick={() => handleIncrement(item.id)}>
                        <img src={plus} alt="увеличить" />
                      </button>
                    </div>
                    <button className='delete__btn' onClick={() => handleRemove(item.id)}>
                      <img src={deleteGoods} alt="delete icon" />
                    </button>
                </div>
              </div>
            ))}
          </div>
            <div className="bucket__total-wrapp">
              <div className="bucket__total">
                <strong>Итого: {totalPrice.toLocaleString()} Р</strong>
              </div>
            </div>
          </div>
          </>
        )}
      </section>
      <Footer />
    </>
  );
};

export default BucketPage;
