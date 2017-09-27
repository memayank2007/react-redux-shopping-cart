import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => dispatch => {
  shop.getProducts(products => {
    dispatch(receiveProducts(products))
  })
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
    dispatch(addToCartUnsafe(productId))
}

const removeFromCartUnsafe = productId => ({
  type: types.REMOVE_FROM_CART,
  productId
})

export const removeFromCart = productId => (dispatch, getState) => {
    dispatch(removeFromCartUnsafe(productId))
}
