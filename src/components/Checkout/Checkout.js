import React, { useContext, useState } from 'react';
import { Navigate, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Checkout = () => {
    const courseCheckout = useLoaderData();
    const [message, setMessage] = useState("")

    const { title, price, thumbnail } = courseCheckout || {};
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        const form = e.target;
        e.preventDefault();
        form.reset();

        setMessage("Congratulations, you successfully got the premium access of this course");

        setTimeout(() => {
            navigate('/courses')
        }, 3500)
    }
    return (
        <div className='container checkout'>
            <div className="checkout-title">
                <h3 className="title">{title}</h3>
                <p className="price">{price}$</p>
            </div>

            <div className="thumbnail">
                <img src={thumbnail} alt="" />
            </div>

            <form action="" onSubmit={handleSubmit}>
                <div className="name">
                    <label htmlFor="">Name</label>
                    <input className='name-input' type="text" name="" id="" value={user.displayName} readOnly />
                </div>
                <div className="email">
                    <label htmlFor="">Email</label>
                    <input className='email-input' type="text" name="" id="" value={user.email ? user.email : 'No Email Address'} readOnly />
                </div>
                <div className="address">
                    <label htmlFor="">Address</label>
                    <input type="text" name="" id="" placeholder='Your address' required />
                </div>

                <p style={{ 'color': 'green', 'fontWeight': '500' }}>{message}</p>
                <button className="my-button">Get Access</button>
            </form>
        </div>
    );
};

export default Checkout;