import axios from 'axios';
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

function Signuppage() {
    const [first_name, setFirstName] = useState(null);
    const [last_name, setLastName] = useState(null);
    const [phonenumber, setPhoneNumber] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    
    const SignupUser = async () => {
        setLoading(true);
        setDisplaymodal(false);
        const data = new FormData();
        data.append("email", email);
        data.append("password", password);
        data.append("first_name", first_name);
        data.append("last_name", last_name);
        data.append("phone_number", phonenumber);
        
        const response = await axios.post('https://amazon.indianhackerslab.com/signup.php', data, { 
            headers: { 'Content-Type': 'multipart/form-data' } 
        });

        if (response.data.status === 'success') {
            setDisplaymodal(true);
            setLoading(false);
        } else {
            setErrormodal(true);
        }
    };

    const [displaymodal, setDisplaymodal] = useState(false);
    const [errormodal, setErrormodal] = useState(false);
    const [loading, setLoading] = useState(false);

    const modalStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
        borderRadius: '10px',
        textAlign: 'center',
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
            {/* Success Modal */}
            <Modal open={displaymodal} onClose={() => setDisplaymodal(false)}>
                <Box sx={modalStyle}>
                    <h2 className="text-success">Success</h2>
                    <p>Your account has been created successfully!</p>
                    <button onClick={() => setDisplaymodal(false)} className="btn btn-primary">
                        Close
                    </button>
                </Box>
            </Modal>

            {/* Error Modal */}
            <Modal open={errormodal} onClose={() => setErrormodal(false)}>
                <Box sx={modalStyle}>
                    <h2 className="text-danger">Error</h2>
                    <p>Your account has not been created. Please try again.</p>
                    <button onClick={() => setErrormodal(false)} className="btn btn-danger">
                        Close
                    </button>
                </Box>
            </Modal>

            {/* Sign-up Form */}
            <div className="container col-md-4 bg-white p-4 rounded shadow">
                <h2 className="text-center mb-4">Sign Up</h2>

                <div className="mb-3">
                    <label className="form-label fw-bold">First Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Last Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={last_name}
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Phone Number</label>
                    <input
                        type="number"
                        className="form-control"
                        value={phonenumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label className="form-label fw-bold">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="text-center">
                    <button 
                        onClick={()=>{SignupUser()}} 
                        type="button" 
                        className="btn btn-warning w-100"
                        disabled={loading}
                    >
                        {loading ? "Registering..." : "Register"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signuppage;
