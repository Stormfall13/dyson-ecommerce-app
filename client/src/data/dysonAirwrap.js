import d2 from '../assets/d2.png';

const dysonAirwrap = [
  {
    id: 3,
    goodsImage: d2,
    goodsName: 'Стайлер Dyson Airwrap Complete Long никель/медный',
    inStock: true,
    flags: [
      { id: 1, value: '-5%', active: false },
      { id: 2, value: '-10%', active: true },
      { id: 3, value: '-30%', active: false },
    ],
    mainPrice: '62 990',
    oldPrice: '69 990',
  },
  {
    id: 4,
    goodsImage: d2,
    goodsName: 'Стайлер Dyson Airwrap Complete Long фуксия/никель',
    inStock: false,
    flags: [
      { id: 1, value: '-15%', active: true },
      { id: 2, value: '-20%', active: false },
      { id: 3, value: '-50%', active: false },
    ],
    mainPrice: '58 990',
    oldPrice: '68 990',
  }
];

export default dysonAirwrap