import React from 'react';
import { Link } from 'react-router-dom';

import newsImg from '../assets/news-img.png';
import arrowLink from '../assets/arrow-link.svg';

const SectionNews = () => {

    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы с 0 начинаются
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    const dataNews = [
        {
            id: 1,
            newsImage: newsImg,
            newsDate: formattedDate,
            newsTitle: 'Есть ли безопасные выпрямители для волос',
            newsContent: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.',
            newsLink: '#'
        },
        {
            id: 2,
            newsImage: newsImg,
            newsDate: formattedDate,
            newsTitle: 'Есть ли безопасные выпрямители для волос',
            newsContent: 'Добавьте объем и рельеф коротким волосам. Посмотрите, как создать мягкие, легкие локоны и волны на коротких волосах и волосах средней длины.',
            newsLink: '#'
        },
        {
            id: 3 ,
            newsImage: newsImg,
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
                {dataNews.map((news) => {
                    return (
                        <article className='news__item' key={news.id}>
                            <div className="news__img-wrapp">
                                <img src={news.newsImage} alt="news img" />
                            </div>
                            <div className="news__content">
                                <div className="news__date">{news.newsDate}</div>
                                <p className="news__title">{news.newsTitle}</p>
                                <p className="news__content">{news.newsContent}</p>
                                <Link to={news.newsLink}>Читать далее</Link>
                            </div>
                        </article>  
                    )
                })}
            </div>
            <Link to="#" className='news__link'>
                Показать ещё
                <span><img src={arrowLink} alt="arrow link" /></span>
            </Link>
        </section>
    )
}

export default SectionNews
