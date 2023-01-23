import React, { useContext } from 'react';
import { isInCart } from 'helpers';
import { CartContext } from 'context/cart-context';
import './featured-product.styles.scss';


import { useNavigate } from 'react-router-dom';

const FeaturedProduct = (product) => {
    const { title, imageUrl, price, id, description } = product;
    const navigate = useNavigate()
    const { addProduct, increase, cartItems } = useContext(CartContext);

    return (
        <div className='featured-product'>
            <div className='featured-image' onClick={() => navigate(`/product/${id}`)}>
                <img src={imageUrl} alt='product' />
            </div>
            <div className='name-price'>
                <h3>{title}</h3>
                <p>$ {price}</p>
                {
                    !isInCart(product, cartItems)
                    ?
                    <button 
                        className='button is-black nomad-btn'
                        onClick={() => addProduct(product)}
                    >
                        ADD TO CART
                    </button>
                    : 
                    <button 
                        className='button is-white nomad-btn'
                        id='btn-white-outline'
                        onClick={() => increase(product)}
                    >
                        ADD MORE
                    </button>
                }
                
            </div>
        </div>
    )
}

export default FeaturedProduct;