import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from "../../store/store";
import { Navbar } from './Navbar';

describe('Navbar Component', () => {
    it('renders register button with register path', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        );
        const registerButton = screen.getByText('Register');
        expect(registerButton).toBeInTheDocument();
        expect(registerButton).toHaveAttribute("href", "/register")
    });

    it('renders app logo', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        );
        const appLogo = screen.getByAltText('Powered by TMDB logo');
        expect(appLogo).toBeInTheDocument();
    })

    it('renders app logo with href to root path', () => {
        render(
            <BrowserRouter>
                <Provider store={store}>
                    <Navbar />
                </Provider>
            </BrowserRouter>
        );
        const appLogo = screen.getByTestId('app-logo');
        expect(appLogo).toBeInTheDocument();
        expect(appLogo).toHaveAttribute('href', '/')
    })
});
