
import { render } from "@testing-library/react";
import Header from "../Header";
import Footer from "../Footer";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from 'react-router-dom/server'

test('Logo should load on rendering Header', () => {
    //load header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
        );
    const logo = header.getAllByTestId('logo');
    expect(logo[0].src).toBe('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIztwNabJTVTDrNKJqsKKtBXJ9RcyK2UVtXg&usqp=CAU')

})

test('Online status should be green on rendering Header', () => {
    //load header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
        );
    const onlineStatus = header.getByTestId('online-status');
    expect(onlineStatus.innerHTML).toBe("✅");

})

test('Cart should have zero items on rendering Header', () => {
    //load header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Header />
        </Provider>
        </StaticRouter>
        );
    const cart = header.getByTestId('cart');
    expect(cart.innerHTML).toBe('0');

})

test('Footer should be present on page load', () => {
    //load header
    const header = render(
        <StaticRouter>
        <Provider store={store}>
            <Footer />
        </Provider>
        </StaticRouter>
        );
    const footer = header.getByTestId('footer');
    expect(footer.innerHTML).toBe('Swiggy');

})