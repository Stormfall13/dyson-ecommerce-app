import React from 'react';

import commentPhoto from '../assets/comment-photo.png';

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
            titleReviews: 'быстро пришел',
            textReviews: 'Фен очень понравился. Качественный, стильный: свою цену полностью оправдывает!',
            imageReviews: [
                {
                    id: 1,
                    linkImage: commentPhoto
                },
            ]
        },
    ]

    return (
        <section className='reviews'>
            <div className="reviews__head">
                <h2>Отзывы <span>{dataReviews.length}</span></h2>
                <div className="head__wrapp">
                    <div className="head__rating">
                        
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionReviews
