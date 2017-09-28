import React, { PropTypes } from 'react';
import { Router, Route, IndexRedirect, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage';
import AboutPage from './routes/AboutPage';
import { Mission, Launch } from './routes/AboutPageChild';
import ActionPage from './routes/ActionPage';
import ContactsPage from './routes/ContactsPage';
import CarsPage from './routes/CarsPage';
import CarPage from './routes/CarPage';
import PokemonPage from './routes/PokemonPage';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage}>
        <IndexRedirect to="home" />
        <Route path="home" component={HomePage} />
        <Route path="about" component={AboutPage}>
          <Route path="mission" component={Mission} />
          <Route path="launch" component={Launch} />
          </Route>
        <Route path="action" component={ActionPage} />
        <Route path="contacts" component={ContactsPage} />
        <Route path="pokemons" component={PokemonPage} />
        <Route path="CarsPage" component={CarsPage} >
          <Route path=":carId" component={CarPage} />
        </Route>
      </Route>
      <Route path="*" component={() => (<div>404 not found<br /><a href="/">go back home</a></div>)} />
    </Router>
  );
};
