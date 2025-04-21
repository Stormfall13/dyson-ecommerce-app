import React from 'react';


const SectionBlockGoods = () => {


  const goodsData = [
    {
      id: 1,
      goodsName: 'Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческамия',
      inStock: true,
      flags: [
        {
          id: 1,
          flagFirst: '-15%',
        },
        {
          id: 2,
          flagSecond: '-20%', 
        },
        {
          id: 3,
          flagThird: '-50%',
        }
      ],
      mainPrice: '59990',
      oldPrice: '69990',
    },
  ]


  return (
    <section className='section__goods'>

    </section>
  )
}

export default SectionBlockGoods
