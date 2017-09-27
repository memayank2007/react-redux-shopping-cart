import React, { PropTypes } from 'react'

const CartItem= ({ product, onRemoveFromCartClicked }) => (
  <div style={{ margin: 5 , float: 'left'}}>
    <Product
      imageURL={product.imageURL}
      title={product.name}
      price={product.price}
      currency={product.currency}/>
      <br />
    <button
      onClick={onRemoveFromCartClicked}>
      Remove from cart
    </button>
  </div>
)

ProductItem.propTypes = {
  onRemoveFromCartClicked: PropTypes.func.isRequired
}

export default CartItem
