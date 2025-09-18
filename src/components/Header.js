import React from 'react'
import { useEffect, useState, useContext } from 'react'
import logo from '../images/logo.jpg'
import cart from '../images/cart.png'
import country from '../images/country.png'
import dp from '../images/dp.png'
import tl from '../images/tl.png'
import search from '../images/search.png'
import map from '../images/map.png'
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../pages/UserContext'
import axios from 'axios'
import Checklogin from '../pages/Checklogin'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
const Header = () => {
    const [loggedin, setLoggedin] = useState(Checklogin())
    const userdata = useContext(UserContext)
    const [cartCount, setCartCount] = useState(0)
    const [searchQuery, setSearchQuery] = useState("")
    const navigate = useNavigate()
    const Logout = () => {
        localStorage.setItem("user_id", null)
        window.location.reload()
    }

    const fetchCartCount = async () => {
        try {
            if (!userdata || !userdata.user_id) { setCartCount(0); return }
            const data = new FormData()
            data.append('user_id', userdata.user_id)
            const API_BASE = process.env.REACT_APP_API_BASE || 'https://amazon.indianhackerslab.com'
            const resp = await axios.post(`${API_BASE}/get-carts.php`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
            if (resp?.data?.status === 'success') setCartCount(resp.data.data?.length || 0)
            else setCartCount(0)
        } catch (e) { setCartCount(0) }
    }

    useEffect(() => { fetchCartCount() }, [userdata?.user_id, loggedin])

    const onSearch = () => {
        const q = searchQuery.trim()
        navigate(q ? `/products?q=${encodeURIComponent(q)}` : '/products')
    }

    return (
        <div className="Header w-100 gap-2 justify-content-between ">
            <div className='primary-navbar w-100 ' >
                <Link to='/' aria-label="Go to Home" className='logo-wrap'>
                    <img src={logo} alt="Amazon" className="amazonlogo" />
                </Link>
                <div className='address gap-0'>
                    <p>Delivering to Kadiyadda 534102</p>
                    <h5><img src={map} className='map-section' alt="location" />Update location</h5>
                </div>

                <div className='search-container'>
                    <select className='search-category' aria-label='Search category'>
                        <option>All</option>
                        <option>Electronics</option>
                        <option>Books</option>
                        <option>Fashion</option>
                    </select>
                    <input value={searchQuery} onChange={e => setSearchQuery(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { onSearch() } }} className='search-input' placeholder='Search Amazon' aria-label='Search' />
                    <button onClick={onSearch} className='search-btn' aria-label='Search'>
                        <img src={search} className='searchimage' alt='search' />
                    </button>
                </div>

                <img src={country} alt="country" className='country-flag' />
                <div className='nav-item'>
                    <p className=' mb-0 '>Hello, sign in</p>
                    <b className='mt-0 p-2'>Account & Lists</b>
                </div>
                <div className='nav-item'>
                    <p className=' mb-0 '>Returns</p>
                    <h6 className=' ml-2 mt-0 '><b>& Orders</b></h6>
                </div>
                <Link to={'/cart'} className='cart-section position-relative'>
                    <img src={cart} alt='cart' />
                    {cartCount > 0 && <span className='cart-badge'>{cartCount}</span>}
                </Link>

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