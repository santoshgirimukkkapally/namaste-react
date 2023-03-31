import { useState } from 'react'
import { IMG_CDN_URL } from '../constants'

const loggedInUser = () => {
    //API for Authontication goes here
    return true
}
const Header = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
    <div className="header">
     <a href="/">
        <img alt="logo" className="logo" src={IMG_CDN_URL} />
    </a>
    <div className="nav-items"> 
    <ul className="_1JNGZ">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
    </ul>
    </div>
    <div className='logInOut'>
    {
        isLoggedIn ? <button onClick={() => setIsLoggedIn(false)}>Log Out</button> : <button onClick={() => setIsLoggedIn(true)}>Log In</button>
    }
    </div>
    </div> 
)
}
export default Header;