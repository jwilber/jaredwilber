import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import Card from './components/card/Card';
import Grid from './components/grid/Grid';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import './styles/styles.css';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="about" component={AboutPage} />
  </Route>
);