import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart())
    }
    return(
        <>
        <h1 className="font-bold text-2xl"> Cart Items  - {cartItems}</h1> 

        <button className=" float-lefthover:shadow-2xl cursor-pointer w-12 h-full rounded-md text-xs p-1 m-5 shadow-lg bg-gray-300" onClick={() => handleClearCart()}>Remove</button>
        
        </>
        
    )
}
export default Cart;