import React, { useState } from 'react';

import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';



const SectionFaq = () => {

    const [activeId, setActiveId] = useState(null); // ID открытого аккордеона

    const dataFaqAccordeon = [
        {
            id: 1,
            accordeonTitle: 'Главное отличие фена Dyson в быстром и безопасном высушивании волос?',
            accordeonContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 2,
            accordeonTitle: 'В рукоятку встроен датчик температуры, благодаря которому она не поднимается выше 100 градусов?',
            accordeonContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            accordeonTitle: 'Главное отличие фена Dyson в быстром и безопасном высушивании волос?',
            accordeonContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 4,
            accordeonTitle: 'В рукоятку встроен датчик температуры, благодаря которому она не поднимается выше 100 градусов?',
            accordeonContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },        {
            id: 5,
            accordeonTitle: 'Главное отличие фена Dyson в быстром и безопасном высушивании волос?',
            accordeonContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 6,
            accordeonTitle: 'В рукоятку встроен датчик температуры, благодаря которому она не поднимается выше 100 градусов?',
            accordeonContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
    ]

    const toggleAccordion = (id) => {
        setActiveId(prevId => (prevId === id ? null : id)); // Если нажали на открытый — закрыть
      };


    return (
        <section className='faq'>
            <h2 className='title__faq'>FAQ - Часто задаваемые вопросы</h2>
            <div className="faq__wrapper">
                {dataFaqAccordeon.map(item => (
                <div key={item.id} className="faq__item">
                    <div className="faq__header" onClick={() => toggleAccordion(item.id)}>
                    <h3 className="faq__title">{item.accordeonTitle}</h3>
                    <div className="faq__icon">
                        {activeId === item.id ? <img src={minus} alt="minus" /> : <img src={plus} alt="plus" /> }
                    </div>
                    </div>
                    {activeId === item.id && (
                    <div className="faq__content">
                        <p>{item.accordeonContent}</p>
                    </div>
                    )}
                </div>
                ))}
            </div>
        </section>
    )
}

export default SectionFaq
