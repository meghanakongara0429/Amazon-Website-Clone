import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Rating } from '@mui/material';

const Productdetails = () => {
  const parameters = useParams()
  var product_id = parameters.product_id
  const [details, ChangeDetails] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const FetchData = async () => {
    const API_BASE = process.env.REACT_APP_API_BASE || 'https://amazon.indianhackerslab.com'
    setLoading(true)
    setErrorMessage("")
    try {
      const data = new FormData()
      data.append("product_id", product_id)
      const response = await axios.post(`${API_BASE}/get-product-details.php`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
      if (response && response.data) {
        ChangeDetails(response.data.product_data)
      } else {
        ChangeDetails(null)
      }
    } catch (e) {
      setErrorMessage('Failed to load product details.')
      ChangeDetails(null)
    } finally {
      setLoading(false)
    }

  }

  useEffect(() => { FetchData() }, [product_id])
  return (

    <div>
      {loading && <div className='container py-3'>Loading...</div>}
      {errorMessage && <div className='container py-3 text-danger'>{errorMessage}</div>}
      {details ?
        <div className='d-flex w-100 p-4 gap-4'>
          <img src={details.images} alt='product' />
          <div className='m-7'>
            <h4>{details.name}</h4>
            <Rating name="half-rating" readOnly defaultValue={2.5} precision={1}>{details.rating}</Rating>
            <div className='d-flex gap-2'>
              <h4>₹{details.price}</h4>
              <div className='discount'><p>-{details.discount}%</p></div>
            </div>
            <p className='mrp'>M.R.P.:{details.cutoff_price}</p>
          </div>
        </div> :
        <>No details</>}
    </div>


  )
}

export default Productdetails