import React, { useEffect, useState } from 'react';
import bg1 from '../assets/girl1.png';
import bg11 from '../assets/girl2.png';

const dataMainSlider = [
  {
    id: 1,
    imgSlider: bg1,
    titleTextSlider: 'Создание локонов и волн. Разглаживание. Высушивание волос. Без экстремальных температур',
    textSlider: 'Стайлер Dyson Airwrap™ имеет цилиндрические насадки для создания локонов или волн, а также щетки для разглаживания и придания объема. Подберите насадки индивидуально в зависимости от своего типа волос и желаемой укладки или выберите один из наших комплектов.',
  },
  {
    id: 2,
    imgSlider: bg11,
    titleTextSlider: 'Создание локонов и волн. ',
    textSlider: 'Подберите насадки индивидуально в зависимости от своего типа волос и желаемой укладки или выберите один из наших комплектов.',
  },
]
const intervalTime = 4000; // время прокрутки в миллисекундах


const SectionBanner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % dataMainSlider.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);


  return (
    <section className='banner'>
      {dataMainSlider.map((dataSlider, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={dataSlider.id}
            className={`banner__content ${isActive ? 'active' : ''}`}
          >
            <div className="banner__text-wrapp">
              <h2>{dataSlider.titleTextSlider}</h2>
              <p>{dataSlider.textSlider}</p>
            </div>
            <div className="banner__img">
              <img
                src={dataSlider.imgSlider}
                alt={`Слайд ${index + 1}`}
                className="banner-image"
              />
            </div>
          </div>
        );
      })}
    </section>
  )
}

export default SectionBanner
