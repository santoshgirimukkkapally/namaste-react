import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import useOnline from "../utils/useOnline"





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

  const online = useOnline();
  if(!online){
    return <h1> Oop Check your Internet Connection !! </h1> 
  }

  if(!allRestroList) return  null;

  // if(filteredRestroList?.length === 0) return <h1>No Restaurant Found..... try with different </h1>

  return allRestroList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="body">
        <div className="p-4 text-center">
          <input
            type="text"
            className="bg-slate-200 spacing-10 pl-2 content-center"
            placeholder="Search"
            name="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          ></input>
          <button
            name="search"
            className="ml-2"
            onClick={() => {
              const data = filterData(searchText, allRestroList);
              setFilteredRestroList(data);
            }}
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
        <div className="flex flex-wrap">
          {filteredRestroList.map((myList) => {
              return <Link key={myList.data.id}  to={"/restaurant/" + myList.data.id}><RestaurantCard { ...myList} /></Link>;
          })}
        </div>
      </div>
    </>
  );
};
// return <Link key={myList.data.id}  to={"/restaurant/" + myList.data.id}><RestaurantCard { ...myList} /></Link>;

export default Body;
