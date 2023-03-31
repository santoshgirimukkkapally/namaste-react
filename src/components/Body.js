import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

function filterData(searchText, allRestroList) {
  const filterData = allRestroList.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  console.log("filterData", filterData);
  return filterData;
}

const Body = () => {
  const [searchText, setSearchText] = useState();
  // const [restroList, setRestroList] = useState([]);
  const [filteredRestroList, setFilteredRestroList] = useState([]);
  const [allRestroList, setAllRestroList] = useState([]);


  useEffect(() => {
    getRestaurantData();
  }, []);

  async function getRestaurantData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.403377&lng=78.492077&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //optional chaining ?
    const restoData = json?.data?.cards[2]?.data?.data?.cards;

    console.log("data", restoData);
    setFilteredRestroList(restoData)
    setAllRestroList(restoData);
  }

  if(!allRestroList) return  null;

  // if(filteredRestroList?.length === 0) return <h1>No Restaurant Found..... try with different </h1>

  return allRestroList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            name="search"
            onClick={() => {
              const data = filterData(searchText, allRestroList);
              setFilteredRestroList(data);
            }}
          >
            {" "}
            Search
          </button>
        </div>
        <div className="res-container">
          {filteredRestroList.map((myList) => {
            return <RestaurantCard key={myList.data.id} { ...myList} />;
          })}
        </div>
      </div>
    </>
  );
};
export default Body;
