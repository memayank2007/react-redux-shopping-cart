import React, { PropTypes } from 'react'
import Product from './Product'
import { removeFromCart } from '../actions'


const Cart  = ({ products, total }) => {
  const onCart = products.length > 0
  const lists = onCart ? (
    products.map(product =>
      <Product
        imageURL={product.imageURL}
        title={product.name}
        price={product.price}
        currency={product.currency}
        key={product.id}
        onRemoveFromCartClicked={() => removeFromCart(product.id)}
      />


    )
  ) : (
    <i>Your cart is empty!!</i>
  )

  return (
    <div>
      <h4>Cart</h4><button>Your Total: &#36;{total}</button><br/>
      <div>{lists}</div>

    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart
