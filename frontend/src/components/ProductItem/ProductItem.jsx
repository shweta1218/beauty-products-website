import './ProductItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import React,{ useContext } from 'react';

const ProductItem = ({id,name,price,image}) => {
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='dipplay'>
    <div className='product-item'>
      <div className="product-item-img-container">
        <img src={image} alt="" className='product-item-image' />
        {!cartItems[id]
            ?<img src={assets.plus} className='add' onClick={()=>addToCart(id)}></img>
            : <div className='product-item-counter'>
              <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
              <p>{cartItems[id]}</p>
              <img onClick={()=> addToCart(id)}src={assets.plus} alt="" />

              </div>
        }
      </div>
      <div className='product-item-info'>
      <p>{name}</p>
      <p className='product-item-price'>{price}rs</p>
      </div>
    </div>
    </div>
  )
}

export default ProductItem
