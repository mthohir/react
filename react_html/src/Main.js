import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Stuff from './pages/Stuff';
import Contact from './pages/Contact';
import { Header, Footer } from './include';


class Main extends Component {
	render(){
		return (
			< BrowserRouter>
				<div>
					<h1>Simple SPA</h1>
					<Header />
					<section class="s-content s-content--narrow">
						<Route exact path="/" component={Home}/>
						<Route path="/stuff" component={Stuff}/>
						<Route path="/contact" component={Contact}/>
					</section>
					<Footer />
				</div>
			</ BrowserRouter>
			);
	}
}

export default Main;
