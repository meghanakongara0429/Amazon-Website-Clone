import React, { useContext, useState, useEffect } from 'react';
import axios from 'axios';
import Rating from '@mui/material/Rating';
import Skeleton from '@mui/material/Skeleton';
import { Link } from 'react-router-dom';
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
    const mockProducts = [
        {
            product_id: 'm1',
            images: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&q=80&auto=format&fit=crop',
            name: 'Wireless Headphones',
            rating: 4.5,
            price: 49.99,
            cutoff_price: 79.99,
            discount: 38
        },
        {
            product_id: 'm2',
            images: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80&auto=format&fit=crop',
            name: 'Mechanical Keyboard',
            rating: 4.2,
            price: 69.99,
            cutoff_price: 99.99,
            discount: 30
        },
        {
            product_id: 'm3',
            images: 'https://images.unsplash.com/photo-1526178613308-1e352a07bd3d?w=600&q=80&auto=format&fit=crop',
            name: 'Smart Watch',
            rating: 4.0,
            price: 59.99,
            cutoff_price: 89.99,
            discount: 33
        },
        {
            product_id: 'm4',
            images: 'https://images.unsplash.com/photo-1510626176961-4b57d4fbad03?w=600&q=80&auto=format&fit=crop',
            name: 'DSLR Camera Lens',
            rating: 4.6,
            price: 119.99,
            cutoff_price: 159.99,
            discount: 25
        }
    ]

    const addcart = async (product) => {
        if (loggedin) {
            const data = new FormData();
            data.append("user_id", userdata.user_id);
            data.append("product_id", product.product_id);
            try {
                const API_BASE = process.env.REACT_APP_API_BASE || 'https://amazon.indianhackerslab.com'
                const response = await axios.post(`${API_BASE}/insert-cart.php`, data, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                if (response.data.status === 'success') {
                    setShowToast(true);
                }
            } catch (e) {
                console.error('Add to cart failed', e)
            }
        } else {
            setUserlogged(true);
        }
    };

    const FetchData = async () => {
        try {
            const API_BASE = process.env.REACT_APP_API_BASE || 'https://amazon.indianhackerslab.com'
            const data = new FormData();
            const response = await axios.post(`${API_BASE}/get-products.php`, data, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            if (response.data && response.data.products) {
                changeProducts(response.data.products);
            } else {
                changeProducts([])
            }
        } catch (e) {
            console.error('Failed to fetch products', e)
            changeProducts([])
        } finally {
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

            <div className='product-grid container'>
                {(products && products.length > 0 ? products : mockProducts).map((product) => (
                    <div key={product.product_id} className='product-card shadow border'>
                        <div className='product-wish'><FavoriteBorderIcon className='text-danger' /></div>
                        <div className='product-image-wrap'>
                            <img className='product-image' src={product.images} alt="Product" />
                        </div>
                        <div className='product-content'>
                            <h6 className='product-name'>{product.name}</h6>
                            <Rating name="half-rating-read" defaultValue={product.rating} precision={0.5} readOnly />
                            <div className='product-price'>
                                <span className='price'>${product.price}</span>
                                <span className='mrp'>MRP: <del>${product.cutoff_price}</del></span>
                                <span className='off'>({product.discount}% off)</span>
                            </div>
                        </div>
                        <div className='product-actions'>
                            <Link to={`/product-details/${product.product_id}`} className='btn p-2 bg-info'>View Details</Link>
                            <button onClick={() => addcart(product)} className='btn p-2 bg-warning'>Add to Cart</button>
                        </div>
                    </div>
                ))}
            </div>
            {loading ? <div className='d-flex flex-wrap container'>
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

            </div> : <></>}
        </div>
    );
};

export default Productspage;