import React from "react";
import './ExploreMenu.css'
import { assets, product_list } from "../../assets/assets";

const ExploreMenu = ({category,setCategory}) => {
  return (
    <div className="explore">
    <div className="explore-products" id="explore-products"> 
      <h1>Explore our Products</h1>
      {/* <p className="explore-products-text"></p> */}
      <div className="explore-products-list">
        {product_list.map((item, index) => {
          return (
            <div onClick={()=> setCategory(prev=>prev==item.product_name?"All":item.product_name)} key={index} className="explore-products-list-item">
                <div className="product-image" >
              <img className={category==item.product_name? "active":"" } src={item.product_image} alt="" />
              </div>
              <p>{item.product_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
    </div>
  )
}

export default ExploreMenu;