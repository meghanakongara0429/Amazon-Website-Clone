import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router';
import userContext from './UserContext';
import Checklogin from './Checklogin';
import Toast from 'react-bootstrap/Toast';
import { Modal, Box } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const Productspage = () => {
    const [loggedin, setLoggedin] = useState(Checklogin());
    const [showToast, setShowToast] = useState(false);
    const [userlogged, setUserlogged] = useState(false);
    const userdata = useContext(userContext);
    const [products, changeProducts] = useState(null);
    const [loading, changeLoading] = useState(true);

    const addcart = async (product) => {
        if (loggedin) {
            const data = new FormData();
            data.append("user_id", userdata.user_id);
            data.append("product_id", product.product_id);
                const response = await axios.post("https://amazon.indianhackerslab.com/insert-cart.php", data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });

                if (response.data.status === 'success') {
                    console.log(response);
                    setShowToast(true);
                }
        } else {
            setUserlogged(true);
        }
    };

    const FetchData = async () => {
            const data = new FormData();
            const response = await axios.post("https://amazon.indianhackerslab.com/get-products.php", data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });

            if (response.data.products) {
                changeProducts(response.data.products);
                changeLoading(false);
            }
    };

    useEffect(() => {
        FetchData();
    }, []);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Header className='bg-warning'>
                    <strong className="me-auto">Added to Cart</strong>
                </Toast.Header>
            </Toast>
            <Modal
                open={userlogged}
                onClose={() => setUserlogged(false)}
                aria-labelledby="modal-title"
                aria-describedby="modal-description"
            >
                <Box sx={style}>
                    <h2 id="modal-title">Login to Amazon</h2>
                    <p id="modal-description">You need to be logged in to add products to your cart.</p>
                    <Link to={'/login'} onClick={() => setUserlogged(false)} className="btn btn-primary">Login</Link>
                </Box>
            </Modal>

            <div className='d-flex flex-wrap container'>
                {products ? products.map((product) => (
                    <div key={product.product_id} className='col-3 shadow border mb-4 p-3 m-8'>
                         <FavoriteBorderIcon className='text-danger'/>
                        <img className='w-100' src={product.images} alt="Product" />
                        <div className='innerclass'>
                            <h6>{product.name}</h6>
                        </div>
                        <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                        <h4>${product.price}<h6>MRP: <del>${product.cutoff_price}</del></h6></h4> ({product.discount}% off)
                        <br />
                        <div className='d-flex justify-content-between'>
                            <Link to={`/product-details/${product.product_id}`} className='btn p-2 bg-info'>View Details</Link>
                            <button onClick={() => addcart(product)} className='btn p-2 bg-warning'>Add to Cart</button>
                        </div>
                    </div>
                )) : <div><p>No products available</p></div>}
            </div>
            {loading? <div className='d-flex flex-wrap container'>
    <div className='col-3 shadow mb-4 p-3 m-8'>
    <Skeleton variant="rectangular" width={270} height={500} />
    </div>
    <div className='col-3 shadow mb-4 p-3 m-8'>
    <Skeleton variant="rectangular" width={270} height={500} />
    </div>
    <div className='col-3 shadow mb-4 p-3 m-8'>
    <Skeleton variant="rectangular" width={270} height={500} />
    </div>
    <div className='col-3 shadow mb-4 p-3 m-8'>
    <Skeleton variant="rectangular" width={270} height={500} />
    </div>
    <div className='col-3 shadow mb-4 p-3 m-8'>
    <Skeleton variant="rectangular" width={270} height={500} />
    </div>
    <div className='col-3 shadow mb-4 p-3 m-8'>
    <Skeleton variant="rectangular" width={270} height={500} />
    </div>
    <div className='col-3 shadow mb-4 p-3 m-8'>
    <Skeleton variant="rectangular" width={270} height={500} />
    </div>
    <div className='col-3 shadow mb-4 p-3 m-8'>
    <Skeleton variant="rectangular" width={270} height={500} />
    </div>

</div>:<></>}
        </div>
    );
};

export default Productspage;