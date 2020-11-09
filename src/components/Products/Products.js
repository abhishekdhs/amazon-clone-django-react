import { Button } from '@material-ui/core'
import React, { Component } from 'react'
import './Products.css'

const Products=({product,index}) =>{
    
        return (
            <div className="products" key={index}>
                <img 
                    src = {product.image}
                    alt="product image"
                />
                <div className="product_info">
                    <h3><strong> {product.name} </strong></h3>
                    <span>⭐⭐ ⭐ ⭐ </span>

                    <div className="product_info_price">
                     <h2><strong>$ {product.price} </strong></h2>
                    </div>

                    <div className="product_info_delivery">
                        <span>Product delivery by 19th Dec</span>
                    </div>
                </div>

                <div className="product_right">
                    <button className="button_cart">Add to cart</button>
                </div>
                    
            </div>
        )
    
}

export default Products
