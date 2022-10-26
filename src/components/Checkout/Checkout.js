import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseCheckout = useLoaderData();

    const { title, price, thumbnail } = courseCheckout || {};
    return (
        <div className='container'>
            <h1>{title}</h1>
        </div>
    );
};

export default Checkout;