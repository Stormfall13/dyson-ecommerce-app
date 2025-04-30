import React from 'react';

const SectionForms = () => {
  return (
    <section className='forms'>
        <div className="forms__wrapper">
            <form>
                <p className="form__title">Свяжитесь с нами</p>
                <div className="form__body">
                    <input className='main__input' type="text" placeholder='Ваше имя' />
                    <input className='main__input' type="text" placeholder='Ваш номер телефона' />
                </div>
                <button type='submit'>Оставить заявку</button>
            </form>
            <form>
                <p className="form__title">Подпишитесь на новости</p>
                <div className="form__body">
                    <input className='main__input' type="text" placeholder='Ваш e-mail' />
                    <div className="policy__check">
                        <input type="checkbox" className='check__policy'/>
                        <p className='text__policy'>
                            Я ознакомлен(а) с политикой 
                            конфиденциальности и согласен(а) с 
                            обработкой персональных данных
                        </p>
                    </div>
                </div>
                <button type='submit'>Подписаться</button>
            </form>
        </div>
    </section>
  )
}

export default SectionForms
