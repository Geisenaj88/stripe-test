import React, { useContext } from 'react'
import './cart-page.styles.scss'

import { CartContext } from 'context/cart-context'
import Layout from 'components/shared/layout'
import CartItem from './cart-items.component'
import Total from './total.component'

const CartPage = () => {

    const { cartItems, itemCount, total, clearCart } = useContext(CartContext);

    return (
        <Layout>
            <>
                <h1>Cart</h1>
                {
                    cartItems.length === 0 
                    ?
                    <div className='empty-cart'>Your Cart is Empty</div>
                    :
                    <>
                        <div className='cart-page'>
                            <div className='cart-item-container'>
                                {
                                    cartItems.map(item => <CartItem {...item} key={item.id} />)
                                }
                            </div>
                            <Total  itemCount={itemCount} total={total} clearCart={clearCart} />
                        </div>
                        
                    </>
                }
                
            </>
        </Layout>
    )
}

export default CartPage