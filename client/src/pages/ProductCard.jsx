import React from 'react';
import { useParams } from 'react-router-dom';

import Header from '../components/Header';

import goodsData from '../components/goodsData';
import allGoods from '../data/allGoods';
// import dysonAccessories from '../data/dysonAccessories';
// import dysonAirwrap from '../data/dysonAirwrap';
// import dysonCleaners from '../data/dysonCleaners';
// import dysonClimate from '../data/dysonClimate';
// import dysonCorrale from '../data/dysonCorrale';
// import dysonLights from '../data/dysonLights';
// import dysonSupersonic from '../data/dysonSupersonic';

// const allGoods = [
//   ...dysonAccessories,
//   ...dysonAirwrap,
//   ...dysonCleaners,
//   ...dysonClimate,
//   ...dysonCorrale,
//   ...dysonLights,
//   ...dysonSupersonic,
// ]


const ProductCard = () => {

  const { id } = useParams();
  const product = goodsData.find(item => item.id === Number(id));
  const productAllGoods = allGoods.find(item => item.id === Number(id));

  if (!product || !productAllGoods) {
    return <h2>Товар не найден</h2>;
  }


  return (
    <div>
        <Header />
        <h1>{product.goodsName || productAllGoods.goodsName}</h1>
        <img src={product.goodsImage || productAllGoods.goodsImage} alt={product.goodsName || productAllGoods.goodsName} />
        <p>Цена: {product.mainPrice || productAllGoods.mainPrice} р</p>
        <p>Старая цена: {product.oldPrice || productAllGoods.oldPrice} р</p>
        {product.inStock ? <p>В наличии</p> : <p>Нет в наличии</p> || productAllGoods.inStock ? <p>В наличии</p> : <p>Нет в наличии</p>}
    </div>
  )
}

export default ProductCard
