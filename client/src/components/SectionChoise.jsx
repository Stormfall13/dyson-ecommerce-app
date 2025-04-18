import React from 'react';


import x1 from '../assets/x1.svg';
import x2 from '../assets/x2.svg';
import x3 from '../assets/x3.svg';
import x4 from '../assets/x4.svg';
import x5 from '../assets/x5.svg';
import x6 from '../assets/x6.svg';

const SectionChoise = () => {

    const choiseData = [
        {
            id: 1,
            choiseImg: x1,
            choiseWrappTitle: 'Широйкий ассортимент',
            choiseDescription: 'Большой выбор техники и аксессуаров',
        },
        {
            id: 2,
            choiseImg: x2,
            choiseWrappTitle: 'Быстрая доставка',
            choiseDescription: 'По москве - 2-3часа; По России - 2-4дня',
        },
        {
            id: 3,
            choiseImg: x3,
            choiseWrappTitle: 'Специальное предложение',
            choiseDescription: 'Только для клиентов нашего сайта',
        },
        {
            id: 4,
            choiseImg: x4,
            choiseWrappTitle: 'Гарантия производителя',
            choiseDescription: 'Гарантия 2 года на устройства и аксессуары',
        },
        {
            id: 5,
            choiseImg: x5,
            choiseWrappTitle: 'Безопасная оплата',
            choiseDescription: 'Оплата после получения товара',
        },
        {
            id: 6,
            choiseImg: x6,
            choiseWrappTitle: 'Бесплатная консультация',
            choiseDescription: 'В любом удобном для вас формате, 7 лней в неделю',
        },
    ]

    return (
        <section className='section__choise'>
            <div className="section__choise-wrapp">
                <h2 className="choise__title">Почему выбирают нас</h2>
                <div className="choise__wrapp">
                    {choiseData.map((choise) => {
                        return (
                            <div className="choise__wrapper" key={choise.id}>
                                <div className="choise__img">
                                    <img src={choise.choiseImg} alt="" />
                                </div>
                                <div className="choise__wrapp-text">
                                    <h3>{choise.choiseWrappTitle}</h3>
                                    <p>{choise.choiseDescription}</p>
                                </div>
                            </div>
                        )
                    })}
                </div> 
            </div>
        </section>
    )
}

export default SectionChoise
