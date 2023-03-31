import { IMG_RESTO_CARD } from '../constants'

const RestaurantCard = (props) => {
    const resData = props
    const {cloudinaryImageId, name, cuisines, avgRating, costForTwo, slaString } = resData.data;
     return (
        <div className="res-card">
            <img  className="logo-res" alt="logo-res" src={IMG_RESTO_CARD + cloudinaryImageId}/>
            <div className="res-name"> {name} </div>
            <div className="cuisines"> {cuisines.join(', ')} </div>
            <div style={{marginTop:"10px"}}>
            <span className={`rating ${avgRating >= 4 ? "color-green" : "color-orange"}`}> <span className="star-icon">{avgRating} </span></span>
            <span className="cost-deliverytime"> ₹{costForTwo/100} FOR TWO</span>
            <span className="cost-deliverytime"> {slaString} </span>
            </div>
        </div>
     )
}

export default RestaurantCard;
