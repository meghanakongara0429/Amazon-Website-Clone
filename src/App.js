
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signuppage from "./pages/Signuppage";
import Aboutpage from "./pages/Aboutpage";
import Productspage from "./pages/Productspage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Productdetails from "./pages/Productdetails";
import AccountDetails from "./pages/AccountDetails";
import UserContext from "./pages/UserContext";
import CartPage from "./pages/CartPage";
import { useEffect, useState } from "react";
import axios from "axios";

function ScrollToTop() {
  const location = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [location.pathname])
  return null
}

function TitleSetter() {
  const location = useLocation()
  useEffect(() => {
    const path = location.pathname
    let title = 'Amazon Clone'
    if (path === '/') title = 'Home | Amazon Clone'
    else if (path.startsWith('/about')) title = 'About | Amazon Clone'
    else if (path.startsWith('/signup')) title = 'Signup | Amazon Clone'
    else if (path.startsWith('/login')) title = 'Login | Amazon Clone'
    else if (path.startsWith('/products')) title = 'Products | Amazon Clone'
    else if (path.startsWith('/product-details/')) title = 'Product Details | Amazon Clone'
    else if (path.startsWith('/account')) title = 'Account | Amazon Clone'
    else if (path.startsWith('/cart')) title = 'Cart | Amazon Clone'
    document.title = title
  }, [location.pathname])
  return null
}

function App() {
  const [userdata, setUserdata] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [errorMessage, setErrorMessage] = useState("")
  const user_id = localStorage.getItem("user_id")
  const FetchData = async () => {
    if (!user_id) {
      setUserdata(null)
      return
    }
    setIsLoading(true)
    setErrorMessage("")
    try {
      const data = new FormData()
      data.append("user_id", user_id)
      const response = await axios.post(
        'https://amazon.indianhackerslab.com/get-account.php',
        data,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      if (response && response.data && response.data.status === 'success') {
        setUserdata(response.data.data?.[0] ?? null)
      } else {
        setUserdata(null)
      }
    } catch (error) {
      setErrorMessage('Failed to load account details.')
      setUserdata(null)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => { FetchData() }, [user_id])
  return (
    <div className="App">
      <UserContext.Provider value={userdata}>
        <BrowserRouter>
          <Header></Header>
          <ScrollToTop />
          <TitleSetter />
          {isLoading && <div className="container py-3">Loading...</div>}
          {errorMessage && <div className="container py-3 text-danger">{errorMessage}</div>}
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
            <Route path="/signup" element={<Signuppage></Signuppage>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/products" element={<Productspage></Productspage>}></Route>
            <Route path="/product-details/:product_id" element={<Productdetails></Productdetails>}></Route>
            <Route path="/account" element={<AccountDetails></AccountDetails>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
