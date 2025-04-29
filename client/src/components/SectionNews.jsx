import React from 'react'

const SectionNews = () => {

    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы с 0 начинаются
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const dataNews = [
        {
            id: 1,
            newsDate: formattedDate,
            newsTitle: 'Есть ли безопасные выпрямители для волос',
            newsContent: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.',
            newsLink: '#'
        },
        {
            id: 1,
            newsDate: formattedDate,
            newsTitle: 'Есть ли безопасные выпрямители для волос',
            newsContent: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.',
            newsLink: '#'
        },
        {
            id: 1,
            newsDate: formattedDate,
            newsTitle: 'Есть ли безопасные выпрямители для волос',
            newsContent: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.',
            newsLink: '#'
        },
    ]


    return (
        <section className='news'>
            <h2 className='title__news'>Новости</h2>
            <div className="news__wrapper">
                <article className='news__item'>
                
                </article> 
            </div>
        </section>
    )
}

export default SectionNews
