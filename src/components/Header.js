import React from 'react'
import { useState } from 'react'
import logo from '../images/logo.jpg'
import cart from '../images/cart.png'
import country from '../images/country.png'
import dp from '../images/dp.png'
import tl from '../images/tl.png'
import search from '../images/search.png'
import map from '../images/map.png'
import { Link } from 'react-router-dom';
import Checklogin from '../pages/Checklogin'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
const Header = () => {
    const [loggedin, setLoggedin] = useState(Checklogin())
    const Logout = () => {
        localStorage.setItem("user_id", null)
        window.location.reload()
    }

    return (
        <div className="Header w-100 gap-2 justify-content-between ">
            <div className='primary-navbar w-100 ' >
                <Link to='/' aria-label="Go to Home">
                    <img src={logo} alt="Amazon" className="amazonlogo" />
                </Link>
                <div className='address gap-0'>
                    <p>Delivering to Kadiyadda 534102</p>
                    <h5><img src={map} className='map-section' alt="location" />Update location</h5>
                </div>

                <input className='search-section' placeholder='Search Amazon' aria-label='Search' />
                <img src={search} className='searchimage' alt='search' />
                <img src={country} alt="country" />
                <div className='justify-content-around'>
                    <p className=' mb-0 '>Hello,sign in </p>
                    <b className='mt-0 p-2'>Account & Lists</b>
                </div>
                <div className=' justify-content-around '>
                    <p className=' mb-0 '>Returns</p>
                    <h6 className=' ml-2 mt-0 '><b>&Orders</b></h6>
                </div>
                <Link to={'/cart'}><div className="cart-section"><img src={cart} alt='cart' /></div></Link>

                {loggedin ? <div className='gap-5 d-flex'>
                    <div className='accountbutton'><Link to={'/account'}><AccountCircleRoundedIcon></AccountCircleRoundedIcon></Link></div>
                    <div ><button className="btn bg-warning p-2 rounded shadow border" onClick={() => Logout()}>Logout</button></div>
                </div>
                    :
                    <> <div className='loginbutton'><Link to={'/login'}><button>Login</button></Link></div>
                        <div className='signupbutton'><Link to={'/signup'}><button>Signup</button></Link></div></>


                }

            </div>
            <div className='secondary-navbar'>
                <img src={tl} className='menu' alt='menu' />
                <h3>All</h3>
                <h3>MX Player</h3>
                <h3>Sell</h3>
                <h3>Best Sellers</h3>
                <h3>Today's Deals</h3>
                <h3>Mobiles</h3>
                <h3>Prime</h3>
                <Link to={'/products'}><h3>Products</h3></Link>
                <img className='dp' src={dp} alt="banner" />
            </div>
        </div>
    )
}

export default Header