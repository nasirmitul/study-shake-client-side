import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Checkout = () => {
    const courseCheckout = useLoaderData();

    const { title, price, thumbnail } = courseCheckout || {};
    const {user} = useContext(AuthContext);
    return (
        <div className='container checkout'>
            <div className="checkout-title">
                <h3 className="title">{title}</h3>
                <p className="price">{price}$</p>
            </div>

            <div className="thumbnail">
                <img src={thumbnail} alt="" />
            </div>

            <form action="">
                <div className="name">
                    <label htmlFor="">Name</label>
                    <input className='name-input' type="text" name="" id="" value={user.displayName} readOnly/>
                </div>
                <div className="email">
                    <label htmlFor="">Email</label>
                    <input className='email-input' type="text" name="" id="" value={user.email} readOnly/>
                </div>
                <div className="address">
                    <label htmlFor="">Address</label>
                    <input type="text" name="" id="" placeholder='Your address' required/>
                </div>

                

                <button className="my-button">Get Access</button>
            </form>
        </div>
    );
};

export default Checkout;