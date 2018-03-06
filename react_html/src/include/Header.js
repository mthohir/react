import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default props =>
			<div class="s-pageheader">
				<header className="header">
						<div className="header__content row">

								<div className="header__logo">
										<a className="logo" href="index.html">
												<img src="images/logo.svg" alt="Homepage" />
										< /a>
								</div>

								<ul className="header__social">
										<li>
												<a href="#0"><i className="fa fa-facebook" aria-hidden="true"></i></a>
										</li>
										<li>
												<a href="#0"><i className="fa fa-twitter" aria-hidden="true"></i></a>
										</li>
										<li>
												<a href="#0"><i className="fa fa-instagram" aria-hidden="true"></i></a>
										</li>
										<li>
												<a href="#0"><i className="fa fa-pinterest" aria-hidden="true"></i></a>
										</li>
								</ul>

								<a className="header__search-trigger" href="#0"></a>

								<div className="header__search">

										<form role="search" method="get" className="header__search-form" action="#">
												<label>
														<span className="hide-content">Search for:</span>
														<input type="search" className="search-field" placeholder="Type Keywords" value="" name="s" title="Search for:" autocomplete="off" />
												</label>
												<input type="submit" className="search-submit" value="Search" />
										</form>

										<a href="#0" title="Close Search" className="header__overlay-close">Close</a>

								</div>


								<a className="header__toggle-menu" href="#0" title="Menu"><span>Menu</span></a>

								<nav className="header__nav-wrap">

										<h2 className="header__nav-heading h6">Site Navigation</h2>

										<ul className="header__nav">
												<li className="current"><NavLink exact to="/">Home</NavLink></li>
												<li className="has-children">
														<a href="#0" title="">Categories</a>
														<ul className="sub-menu">
														<li><a href="category.html">Lifestyle</a></li>
														<li><a href="category.html">Health</a></li>
														<li><a href="category.html">Family</a></li>
														<li><a href="category.html">Management</a></li>
														<li><a href="category.html">Travel</a></li>
														<li><a href="category.html">Work</a></li>
														</ul>
												</li>
												<li className="has-children">
														<a href="#0" title="">Blog</a>
														<ul className="sub-menu">
														<li><a href="single-video.html">Video Post</a></li>
														<li><a href="single-audio.html">Audio Post</a></li>
														<li><a href="single-gallery.html">Gallery Post</a></li>
														<li><a href="single-standard.html">Standard Post</a></li>
														</ul>
												</li>
												<li><a href="style-guide.html">Styles</a></li>
												<li><NavLink to="/stuff">About</NavLink></li>
												<li><NavLink to="/contact">Contact</NavLink></li>
										</ul>

										<a href="#0" title="Close Menu" className="header__overlay-close close-mobile-menu">Close</a>

								</nav>

						</div>
				</header>
			</div>
