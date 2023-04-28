import { useState, useContext } from 'react';
import { useSelector } from "react-redux";
import { IMG_CDN_URL } from '../constants';
import { Link } from 'react-router-dom';
import UserContext from '../utils/useContext';
import useOnline from '../utils/useOnline';
import LoginForm from './LogIn'

const loggedInUser = () => {
    //API for Authontication goes here
    return true
}
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const cartItems = useSelector(store => store.cart.items);

    const { user } = useContext(UserContext)

    const online = useOnline();
   
    return (
    <div className="flex justify-between shadow-lg">
     <a href="/">
        <img data-testid="logo" alt="logo"  className="h-14 w-14 p-1 m-5" src={IMG_CDN_URL} />
    </a>
    <div className="w-10"> 
    <ul className="flex py-10">
        <li className='px-2 mx-5'><Link to="/">Home</Link></li>
        <li className='px-2 mx-5'><Link to="/about">About</Link></li>
        <li className='px-2 mx-5'><Link to="/contact">Contact</Link></li>
        <li className='px-2 mx-5'><Link to="/instamart">Instamart</Link></li>
        <li className='px-2 mx-5'><Link to="/cart" >Cart</Link> <span className='text-sm absolute font-bold ml-1' data-testid="cart">{cartItems.length}</span></li>
        <li className='px-2 mx-5' data-testid="online-status">{online ? "✅" : "🔴"}</li> 

    </ul>
    </div>
   
    <div className='flex'>
        <span className='text-xs font-bold'>{user.name}</span>
    {
        isLoggedIn ? <button className='bg-slate-200 h-8 w-20 mt-10 mr-5 rounded-lg' onClick={() => setIsLoggedIn(false)}>Log Out</button> : <button className='bg-slate-200 rounded-lg h-8 w-20 mt-10 mr-5' onClick={() => setIsLoggedIn(true)}><Link to="/login">Log In</Link></button>
    }
    
    </div>
    </div> 
)
}
export default Header;