import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.svg';

import dataFooterMenu from './dataFooterMenu';
import categoryMenuFooter from './categoryMenuFooter';

const Footer = () => {

	return (
			<section className='footer'>
					<div className="footer__wrapp">
					<Link to="/">
							<img src={logo} alt="footer logo" />
					</Link>
					</div>
					<div className="footer__menu-wrapp">
							<nav className='footer__menu-category'>
									<h3 className='main__text-menu'>{categoryMenuFooter[0].nameCategoryMenu}</h3>
									{categoryMenuFooter.map((categoryFooter) => {
											return (
													<ul key={categoryFooter.id}>
														{categoryFooter.underMenu.map((underItems) => {
																return (
																	<li key={underItems.id}>
																		<a href={underItems.linkParagParag}>
																			{underItems.nameParagParag}
																		</a>
																	</li>
																)
														})}
													</ul> 
											)
									})}
							</nav>
							<nav className="footer__menu-second">
								<ul className='main__wrapp-second'>
								{dataFooterMenu.map((footerMenuItems) => {
									return (
										<>
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
										</>
									)
								})}
								</ul>
							</nav>
					</div>
					
			</section>
	)
}

export default Footer
