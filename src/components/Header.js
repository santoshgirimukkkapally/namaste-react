import { useState } from 'react'
import { IMG_CDN_URL } from '../constants'
import { Link } from 'react-router-dom'

const loggedInUser = () => {
    //API for Authontication goes here
    return true
}
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    <div className="flex justify-between shadow-lg">
     <a href="/">
        <img alt="logo" className="h-14 w-14 p-1 m-5" src={IMG_CDN_URL} />
    </a>
    <div className="w-10"> 
    <ul className="flex py-10">
        <li className='px-2 mx-5'><Link to="/">Home</Link></li>
        <li className='px-2 mx-5'><Link to="/about">About</Link></li>
        <li className='px-2 mx-5'><Link to="/contact">Contact</Link></li>
        <li className='px-2 mx-5'>Cart</li>
        <li className='px-2 mx-5'><Link to="/instamart">Instamart</Link></li>

    </ul>
    </div>
    <div className='flex'>
    {
        isLoggedIn ? <button className='bg-slate-200 h-8 w-20 mt-10 mr-5 rounded-lg' onClick={() => setIsLoggedIn(false)}>Log Out</button> : <button className='bg-slate-200 rounded-lg h-8 w-20 mt-10 mr-5' onClick={() => setIsLoggedIn(true)}>Log In</button>
    }
    </div>
    </div> 
)
}
export default Header;