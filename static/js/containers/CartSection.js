import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Cart from '../components/Cart'


import { getTotal, getCartProducts } from '../reducers'

const CartSection = ({ products, total }) => (
  <Cart
    products={products}
    total={total}
    onRemoveFromCartClicked={() => removeFromCart(product.id)} />
)

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
)(CartSection)
