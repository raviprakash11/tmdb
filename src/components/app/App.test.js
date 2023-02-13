import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from "../../store/store";
import App from './App';

/**
 * describe => (title, fn) => {} => test suit
 * test => (title, fn) => {} => test case
 * it => (title, fn) => {} => test case
 * 
 * beforeAll => (() => {}) => {}
 * afterAll
 * beforeEach
 * afterEach
 */

describe('App Component', () => {
  it('renders learn react link', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });
});
