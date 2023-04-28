import { StaticRouter } from "react-router-dom/server";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import ReataurantMenu from '../ReataurantMenu';
import store  from '../../utils/store'
import { MENU_LIST}  from '../../mock/restaurantsList'
import Header from "../Header";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MENU_LIST)
        }
    })
})

  test('Add item to cart', async () => {
    const body  =  render(
      <StaticRouter>
          <Provider store={store}>
            <Header />
            <ReataurantMenu />
          </Provider>
      </StaticRouter>
      )
      await waitFor(() => expect(body.getByTestId('menu')));

      const addBtn = body.getAllByTestId('addBtn');

      fireEvent.click(addBtn[0]);
        
      const cart = body.getByTestId('cart');

      expect(cart.innerHTML).toBe("1");
  
  })