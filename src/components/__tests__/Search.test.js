import { StaticRouter } from "react-router-dom/server";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import Body from '../Body'
import store  from '../../utils/store'
import { RESTAUTANT_DATA}  from '../../mock/restaurantsList'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(RESTAUTANT_DATA)
        }
    })
})

test('Shimmer effect on homepage', () => {

  const body  =  render(
    <StaticRouter>
        <Provider store={store}>
            <Body />
        </Provider>
    </StaticRouter>
    )
    
    const shimmer = body.getByTestId('shimmer');
    expect(shimmer.children.length).toBe(10);

})

test('Checking number of restaurants loaded on homepage', async () => {
    const body  =  render(
      <StaticRouter>
          <Provider store={store}>
              <Body />
          </Provider>
      </StaticRouter>
      )
      await waitFor(() => expect(body.getByTestId('search-btn')));
      const resList = body.getByTestId('res-list');
      expect(resList.children.length).toBe(15);
  
  })

  test('Search for string(hotel) on homepage', async () => {
    const body  =  render(
      <StaticRouter>
          <Provider store={store}>
              <Body />
          </Provider>
      </StaticRouter>
      )
      await waitFor(() => expect(body.getByTestId('search-btn')));
      const input = body.getByTestId('search-input');
      fireEvent.change(input, {
        target: {
            value:'restaurant'
        }
      })
      const searchBtn = body.getByTestId('search-btn');
      fireEvent.click(searchBtn);

      const resList = body.getByTestId('res-list');
      expect(resList.children.length).toBe(3);
  
  })