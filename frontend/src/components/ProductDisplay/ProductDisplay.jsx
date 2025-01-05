import React, { useContext } from 'react'
import './ProductDisplay.css'
import ProductItem from '../ProductItem/ProductItem'
import { StoreContext } from '../../context/StoreContext'

const ProductDisplay = ({category}) => {
    const {product_lists} = useContext(StoreContext)

  return (
    <div className='display'>
      <div className='product-display' id='product-display'>
        <h2>Top Selling Products</h2>
        <div className="product-display-list">
          {product_lists.map((item,index) =>{
            if (category==="All"|| category==item.category){
              return <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} />
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductDisplay
