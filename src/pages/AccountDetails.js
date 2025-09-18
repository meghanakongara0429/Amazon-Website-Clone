
import axios from 'axios'
import { useParams } from 'react-router'
import React, { useContext, useEffect, useState } from 'react'
import UserContext from './UserContext'
import { MdAccountCircle } from "react-icons/md";
import acc from '../images/acc.png'
const Accountdetails = () => {

    const userdata = useContext(UserContext)
    const accountOptions = [
        { title: "Your Orders", description: "Track, return, or buy things again", icon: <img src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Box._CB485927553_.png'></img> },
        { title: "Login & Security", description: "Edit login, name, and mobile number", icon: <img src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/sign-in-lock._CB485931504_.png'></img> },
        { title: "Prime", description: "View benefits and payment settings", icon: <img src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/rc_prime._CB485926807_.png'></img> },
        { title: "Your Addresses", description: "Edit addresses for orders and gifts", icon: <img src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/address-map-pin._CB485934183_.png'></img> },
        { title: "Your Business Account", description: "Sign up for GST invoice savings", icon: "🏢" },
        { title: "Payment Options", description: "Edit or add payment methods", icon: <img src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png'></img> },
        { title: "Amazon Pay Balance", description: "Add money to your balance", icon: <img src='https://m.media-amazon.com/images/G/31/x-locale/cs/ya/images/Payments._CB485926359_.png'></img> },
        { title: "Contact Us", description: "Customer service via phone or chat", icon: "📞" },
    ];


    return (
        <div>
            <div className=" col-12 p-2">
                <div className="max-w-4xl  bg-white rounded-lg p-6">
                    <h1 className="text-2xl font-bold mb-4">Your Account</h1>
                    <img className=' m-9 w-0 h-0' src={acc}></img>
                    {userdata ? <><h2>Hello   {userdata.first_name}</h2></> : <></>}
                    <div className="grid grid-cols-3 gap-2 d-flex flex-wrap p-4  ">
                        {accountOptions.map((option, index) => (
                            <div className='col-3 p-2 w-22  shadow border hover:bg-gray-200'>
                                <div key={index} className="p-4  rounded-lg  bg-gray-50 hover:bg-gray-200 transition d-flex ">
                                    <div style={{ fontSize: "40px" }}>{option.icon}</div>
                                    <div>
                                        <h4 className="font-semibold">{option.title}</h4>
                                        <p className="text-sm text-black">{option.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Accountdetails