import axios from 'axios'
import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router'
import { Rating } from '@mui/material';

const Productdetails = () => {
    const parameters=useParams()
    var product_id=parameters.product_id
    const[details,ChangeDetails]=useState(null)
    const FetchData=async()=>
    {
      console.log("Entering")
      const data=new FormData()
      data.append("product_id",product_id)
      const response=await axios.post('http://localhost/get-product-details.php',data,{headers:{'Content-Type':'multipart/form-data'}})
      if(response)
      {
        console.log(response.data.product_data)
        ChangeDetails(response.data.product_data)
      }

    }
    
    useEffect(()=>{FetchData()},[product_id])
  return (
    
     <div>
      {details ?
      <div className='d-flex w-100 p-4 gap-4'>
          <img src={details.images}></img>
          <div className='m-7'>
          <h4>{details.name}</h4>
          <Rating name="half-rating" readOnly defaultValue={2.5} precision={1}>{details.rating}</Rating>
          <div className='d-flex gap-2'>
          <h4>₹{details.price}</h4>
          <div className='discount'><p>-{details.discount}%</p></div>
        </div>
        <p className='mrp'>M.R.P.:{details.cutoff_price}</p>
        </div>
      </div>:
      <>No details</>}
    </div>
   
    
  )
}

export default Productdetails