import React, { PropTypes } from 'react'

const Product = ({ price, title ,imageURL , currency}) => (
  <div>
    <img src={imageURL} /><br />
    {title} <br />
    {currency}{price}<br />
  </div>
)


export default Product
