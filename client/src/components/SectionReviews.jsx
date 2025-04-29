import React from 'react';
import { Link } from 'react-router-dom';

import commentPhoto from '../assets/comment-photo.png';
import arrowLink from '../assets/arrow-link.svg';
import starBlack from '../assets/star-black.svg';

const SectionReviews = () => {

    const dataReviews = [
        {
            id: 1,
            nameAuthor: 'Ольга',
            rating: 5,
            titleReviews: 'Это лучший фен!',
            textReviews: 'Пользуюсь около месяца, хочу поделиться впечатлениями. Во-первых, фен очень легкий, удобно лежит в руке, не скользит. Кнопка включения и выключения расположена удобно, а не где-то сбоку. Мощность у фена хорошая, волосы сушит быстро',
            imageReviews: [
                {
                    id: 1,
                    linkImage: commentPhoto
                },
                {
                    id: 2,
                    linkImage: commentPhoto
                },
                {
                    id: 3,
                    linkImage: commentPhoto
                },
            ]
        },
        {
            id: 2,
            nameAuthor: 'Татьяна',
            rating: 4,
            titleReviews: 'Отличный фен',
            textReviews: 'Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!',
            imageReviews: [ ]
        },
        {
            id: 3,
            nameAuthor: 'Виктор',
            rating: 3,
            titleReviews: 'Быстро пришел',
            textReviews: 'Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!',
            imageReviews: [
                {
                    id: 1,
                    linkImage: commentPhoto
                },
            ]
        },
    ]

    const date = new Date();

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы с 0 начинаются
    const year = date.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;

    return (
        <section className='reviews'>
            <div className="reviews__head">
                <h2>Отзывы <span>{dataReviews.length}</span></h2>
                <button className='reviews__btn'>Написать отзыв</button>
            </div>
            <div className="reviews__wrapp">
                {dataReviews.map((reviews) => {
                    return (
                        <div className="reviews__wrapper" key={reviews.id}>
                            <div className="reviews__sidebar">
                                <p className="reviews__author">{reviews.nameAuthor}</p>
                                <div className="reviews__rating">
                                {Array.from({ length: reviews.rating }).map((_, index) => (
                                    <img src={starBlack} alt="star" key={index} className="reviews__star" />
                                ))}
                                </div>
                            </div>
                            <div className="reviews__content-wrapp">
                                <p className="title__reviews">{reviews.titleReviews}</p>
                                <p className="text__reviews">{reviews.textReviews}</p>
                                <div className="reviews__img-wrapp">
                                    {reviews.imageReviews.map((images) => {
                                        return (
                                            <div className="reviews__img" key={images.id}>
                                                <img src={images.linkImage} alt="reviews image" />
                                            </div> 
                                        )
                                    })}
                                </div>
                            </div>
                            <div className="date">{formattedDate}</div>
                        </div>
                    )
                })}
            </div>
            <Link to="/" className='reviews__link-now'>
                Показать ещё
                <span><img src={arrowLink} alt="arrow link" /></span>
            </Link>
        </section>
    )
}

export default SectionReviews
