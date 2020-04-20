import React, {useState, useContext} from 'react'
import PropTypes, { element } from 'prop-types'
import './pricing.styles.scss';
import { GlobalDispatchContext } from '../../context/GlobalContextProvider';

const Pricing = ({ data }) => {

  const heading = data.heading;
  const description = data.description;
  const variants = data.options;

  const [quantity, setQuantity] = useState(1);
  const [variantSelected, setVariantSelected] = useState(variants[0]);
  const [selectedVariantIndx, setSelectedVariantIndx] = useState(0);

  const dispatch = useContext(GlobalDispatchContext);

  const handleAddToCart = (e) => {
    e.preventDefault();

    const itemToAdd = {
      item: variantSelected,
      quantity
    }

    dispatch({
      type: 'ADD_TO_CART', 
      payload: itemToAdd
    })

    console.log('itemToAdd', itemToAdd);
    console.log("item chosen: ", variantSelected)
    console.log("quantity: ", quantity);
  };


  const handleVariantSelect = (indx) => {
    setVariantSelected(variants[indx]);
    setSelectedVariantIndx(indx);
  };

  return(
  <div className="pricing-container">
    <h2>{heading}</h2>
    <h3>{description}</h3>

    <div className="variant-section">
      {variants.map((variant, indx) => (
        <section key={variant.option} className="variant-option">
            <button onClick={()=> handleVariantSelect(indx)} className={`${indx === selectedVariantIndx ? 'variant-selected' : null}`}>
                <span className="variant-name">{variant.option}</span>
            </button>

            {/* <p className="has-text-weight-semibold">{variant.description}</p>
            <ul>
              {variant.items.map(item => (
                <li key={item} className="is-size-5">
                  {item}
                </li>
              ))}
            </ul> */}
        </section> 
      ))}
    </div>

    <div className="variant-price-section">
        <h2>${variantSelected.price}</h2>
    </div>

    <form onSubmit={e => handleAddToCart(e)} className="add-product-form">
      <div className="item-quantity">
        <label>Quantity</label>
        <input type="number" onChange={event => setQuantity(event.target.value)} placeholder={quantity} min="1"/>
      </div>

      <button type="submit">
        <span className="btn-txt">ADD TO CART</span>
      </button>
    </form>

  </div>
)}

Pricing.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      option: PropTypes.string,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      description: PropTypes.string,
      items: PropTypes.array,
    })
  ),
}

export default Pricing
