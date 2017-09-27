import React, { PropTypes } from 'react'
import Product from './Product'

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div style={{ margin: 5 , float: 'left'}}>
    <Product
      imageURL={product.imageURL}
      title={product.name}
      price={product.price}
      currency={product.currency}/>
      <br />
    <button
      onClick={onAddToCartClicked}>
      Add to cart
    </button>
  </div>
)

ProductItem.propTypes = {
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
