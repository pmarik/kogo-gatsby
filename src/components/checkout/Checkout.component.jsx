import React, {useState, useContext} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import './checkout.styles.scss';

const Checkout = ({ price, productArray }) => {


    const stripe = useStripe();
    const elements = useElements();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [shipping, setShipping] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log('payment submit')

        if(!stripe || !elements) {
            console.log('stripe or elements not loaded');
            return;
        }

       const { error , paymentMethod } = await stripe.createPaymentMethod({
           type: 'card',
           card: elements.getElement(CardElement),
           billing_details: {
               name,
               address: shipping,
               email
           },
       });

       if(error){
        console.log('[error]', error);
        setErrorMessage(error.message);
       }
       else{
           console.log('[PaymentMethod]', paymentMethod)
           setErrorMessage(null)
       }
    }

    return (
        <form onSubmit={handleSubmit} className="payment-form">
                <label htmlFor='emal'>Email</label>
            <input
                id="email"
                required
                placeholder="your email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
                 <CardElement options={{
                    style: {
                    base: {
                        fontSize: '16px',
                        color: '#674B42',
                        '::placeholder': {
                        color: 'rgb(153, 119, 107)',
                        },
                    },
                    invalid: {
                        color: '#9e2146',
                    },
                    },
                }} />
            <label htmlFor="name">Name on Card</label>
            <input
                id="name"
                required
                placeholder="First and Last"
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <label htmlFor="shippingAddress">Shipping</label>
                <input
                    id="shippingAddress"
                    required
                    placeholder="12345"
                    value={shipping}
                    onChange={(e) => {
                    setShipping(e.target.value);
                    }}
                />
       
            {errorMessage}
            <button  style={{width: '10em', fontSize: '1rem'}} type="submit" disabled={!stripe}>
                PAY
            </button>

        </form>
    );
};

export default Checkout;