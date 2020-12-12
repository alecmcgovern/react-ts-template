import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';

import { Page1, Page2 } from '../pages';
import { configureStore } from '../../redux';

import './app.css';

const store = configureStore();

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-header">
          <h1>REACT TYPESCRIPT TEMPLATE</h1>
          <Link to="/page1">Page 1</Link>
          <Link to="/page2">Page 2</Link>
        </div>
        <Switch>
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Redirect from="/*" to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
