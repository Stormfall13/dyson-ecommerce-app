import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';
import tg from '../assets/tg.png';
import vk from '../assets/vk.png';
import youtube from '../assets/youtube.png';

import dataFooterMenu from './dataFooterMenu';
import categoryMenuFooter from './categoryMenuFooter';

const Footer = () => {

	const dataSocial = [
		{
			id: 1,
			imgSocial: tg,
			linkSocial: '#',
		},
		{
			id: 2,
			imgSocial: vk,
			linkSocial: '#',
		},
		{
			id: 3,
			imgSocial: youtube,
			linkSocial: '#',
		},
	]

	return (
			<section className='footer'>
					<div className="footer__wrapp">
					<Link to="/" className='footer__logo'>
							<img src={logo} alt="footer logo" />
					</Link>
					</div>
					<div className="footer__menu-wrapp">
							<nav className='footer__menu-category'>
								<h3 className='main__text-menu'>Магазин</h3>
								<ul>
									{categoryMenuFooter.map((categoryFooter) => {
										return (
												<li key={categoryFooter.id}>
													<a href={categoryFooter.linkParagParag}>
														{categoryFooter.nameParagParag}
													</a>
												</li>
										)
									})}
								</ul> 
							</nav>
							<nav className="footer__menu-second">
								<ul className='main__wrapp-second'>
									{dataFooterMenu.map((footerMenuItems) => {
										return (
											<li key={footerMenuItems.id} className='title__menu'>
												<a className='link__title-menu' href={footerMenuItems.linkParagMenu}>
													{footerMenuItems.nameParagMenu}
												</a>
												<ul className='under__menu'>
													{footerMenuItems.underParagMenu?.map((underItems) => {
														return (
															<li key={underItems.id}>
																<a href={underItems.linkUnderParag}>
																	{underItems.nameUnderParag}
																</a>
															</li>	
														)
													})}
												</ul>
											</li>
										)
									})}
								</ul>
							</nav>
						<div className="contact__wrapp">
							<div className="tel__wrapp">
								<p>Отдел логистики:</p>
								<a href="tel:+79998004554">+7 (999) 800-45-54</a>
							</div>
							<div className="social__wrapp">
								{dataSocial.map((socialItems) => {
									return (
										<a href={socialItems.linkSocial} key={socialItems.id}>
											<img src={socialItems.imgSocial} alt="social btn" />
										</a>
									)
								})}
							</div>
						</div>
					</div>
					<p className="copyright">Интернет-магазин dysmarket.ru, 2022 © Все права защищены.</p>
			</section>
	)
}

export default Footer
