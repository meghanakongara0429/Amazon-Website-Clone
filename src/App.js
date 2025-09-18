
import Footer from "./components/Footer";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signuppage from "./pages/Signuppage";
import Aboutpage from "./pages/Aboutpage";
import Productspage from "./pages/Productspage";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productdetails from "./pages/Productdetails";
import Accountdetails from "./pages/Accountdetails";
import UserContext from "./pages/UserContext";
import CartPage from "./pages/CartPage";
import { useEffect, useState } from "react";
import axios from "axios";

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
          {isLoading && <div className="container py-3">Loading...</div>}
          {errorMessage && <div className="container py-3 text-danger">{errorMessage}</div>}
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/about" element={<Aboutpage></Aboutpage>}></Route>
            <Route path="/signup" element={<Signuppage></Signuppage>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/products" element={<Productspage></Productspage>}></Route>
            <Route path="/product-details/:product_id" element={<Productdetails></Productdetails>}></Route>
            <Route path="/account" element={<Accountdetails></Accountdetails>}></Route>
            <Route path="/cart" element={<CartPage></CartPage>}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
