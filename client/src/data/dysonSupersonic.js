import d1 from '../assets/d1.png';

const dysonSupersonic = [
  {
    id: 1,
    goodsImage: d1,
    goodsName: 'Фен Dyson Supersonic HD07 синий медный с 5 насадками в чехле и расческами',
    inStock: true,
    flags: [
      { id: 1, value: '-15%', active: false },
      { id: 2, value: '-20%', active: true },
      { id: 3, value: '-50%', active: false },
    ],
    mainPrice: '59 990',
    oldPrice: '69 990',
  },
  {
    id: 2,
    goodsImage: d1,
    goodsName: 'Фен Dyson Supersonic HD03 с чехлом цвет сирень',
    inStock: true,
    flags: [
      { id: 1, value: '-10%', active: true },
      { id: 2, value: '-20%', active: false },
      { id: 3, value: '-50%', active: false },
    ],
    mainPrice: '49 990',
    oldPrice: '55 990',
  }
];

export default dysonSupersonic;