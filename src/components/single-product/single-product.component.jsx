import React, { useState, useEffect, useContext } from 'react'
import './single-product.styles.scss'

import { useParams, useNavigate } from 'react-router-dom'
import { ProductsContext } from 'context/products-context'
import Layout from 'components/shared/layout'

import { CartContext } from 'context/cart-context';
import { isInCart } from 'helpers'

const SingleProduct = () => {

    const { products } = useContext(ProductsContext)
    const { addProduct, increase, cartItems } = useContext(CartContext);
    const { id } = useParams()
    const [ product, setProduct ] = useState(null)
    const navigate = useNavigate();

    useEffect(() => {
        if (!products || !id || !navigate) {return;}
            const product = products.find(item => Number(item.id) === Number(id))
            if (!product) {
                navigate('/shop');
            }

            setProduct(product);

    }, [products, id, navigate])

    if (!product) { return null }

    const { imageUrl, title, price, description } = product

    return (
      <Layout>
        <div className="single-product-container">
          <div className="product-image">
            <img src={imageUrl} alt="product" />
          </div>
          <div className="product-details">
            <div className="name-price">
              <h3>{title}</h3>
              <p>$ {price}</p>
            </div>
            <div className="add-to-cart-btns">
                {
                    !isInCart(product, cartItems) 
                    ?
                    <button
                    className="button is-white nomad-btn"
                    id="btn-white-outline"
                    onClick={() => addProduct(product)}
                    >
                        ADD TO CART
                    </button>
                    : 
                    <button
                    className="button is-white nomad-btn"
                    id="btn-white-outline"
                    onClick={() => increase(product)}
                    >
                        ADD MORE
                    </button>
                }

              <button
                className="button is-black nomad-btn"
                id="btn-white-outline"
              >
                PROCEED TO CHECKOUT
              </button>
            </div>

            <div className="product-description">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </Layout>
    );
}

export default SingleProduct;