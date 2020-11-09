import React,{useState,useEffect} from 'react'
import { getProducts } from '../../core/helper/coreapicalls';
import Products from '../Products/Products'
import './all_products.css'

function All_products(){

    const [products, setProducts] = useState([]);
    const [error,setError] = useState(false);


    const loadAllProducts = () =>{
        getProducts()
        .then((data) =>{
            if(data.error){
                setError(data.error)
                console.log(error)
            } else{
                setProducts(data)
                console.log(products)
            }
        })
        .catch((error)=>console.log(error))
    }

    useEffect(() => {
        loadAllProducts()
    },[])
    
        return (
            <div className="all_products">
                <div className="all_products_left">
                    <h3>Left</h3>
                </div>

                <div className="all_products_right">
                    {products.map( (product,index)=>{
                        return (
                        
                            <Products product={product} index={index} 
                            />
                            
                        )
                    })}
                </div>
            </div>
        )
    
}

export default All_products
