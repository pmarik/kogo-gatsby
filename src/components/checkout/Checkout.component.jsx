import React from 'react';
// import StripeCheckout from 'react-stripe-checkout';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
// import {loadStripe} from '@stripe/stripe-js';
//import CheckoutForm from './CheckoutForm.component';
// import StripeCheckout from 'react-stripe-checkout';
// import './checkout.styles.scss';
// import logo from '../../img/logo.svg';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
//const stripePromise = loadStripe('pk_test_wt88SmfJIv2fEihXzYmOEGVc00sIwkHG9m');


const Checkout = ({ price, productArray }) => {

    // const makePayment = (token) => {
    //     console.log('payment made!')
    //     const body = {
    //         token,
    //         productArray
    //     }

    //     const headers = {
    //         "Content-Type": "application/json"
    //     }
    // }

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        event.preventDefault();

       const { error , paymentMethod } = await stripe.createPaymentMethod({
           type: 'card',
           card: elements.getElement(CardElement)
       });

       if(!error){
           console.log(paymentMethod)
       }
       else{
           console.log(error);
           console.log('stripe not loading')
       }
    }

    return (
        // <StripeCheckout
        //     stripeKey='pk_test_wt88SmfJIv2fEihXzYmOEGVc00sIwkHG9m'
        //     token={makePayment}
        //     name='Buy Now'
        //     amount={price * 100}
        // >
        //     <button>
        //         Buy da kogos
        //     </button>
        // </StripeCheckout>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button  style={{width: '220px', fontSize: '1rem'}} type="submit" onClick={()=> console.log('stripe checkout')} disabled={!stripe}>
                CHECK OUT
            </button>

        </form>
    );
};

export default Checkout;