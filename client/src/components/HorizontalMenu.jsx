import React from 'react'
import { Link } from 'react-router-dom'

const HorizontalMenu = () => {
  return (
      <nav className='top__menu'>
          <Link to="/our">О нас</Link>
          <Link to="/delivery-payment">Доставка и оплата</Link>
          <Link to="/register-prod">Регистрация продукта</Link>
          <Link to="/service">Сервис</Link>
          <Link to="/certificate">Сертификаты и лицензии</Link>
      </nav>
  )
}

export default HorizontalMenu;
