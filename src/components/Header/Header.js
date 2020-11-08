import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';




function Header() {
    return (
        <div className="header">

            <Link to="/">
                <img 
                    className="header__logo"
                    src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="amazon logo"
                />
            </Link>

            <div className="header__search">
                <div className="header__search__left">
                    <span>All</span>
                    <ArrowDropDownIcon />
                </div>

                <input 
                    className="header__searchInput"
                    type="text"
                    
                />
                <SearchIcon 
                    className="header__searchIcon"
                />
            </div>


            <div className="header__nav">
                <div className="header__option">
                    <span className="header__LineOne abc mobile_disable">Hello guest</span>
                    <span className="header__LineTwo">SignIn</span>
                </div>

                <div className="header__option mobile_disable">
                    <span className="header__LineOne">Returns</span>
                    <span className="header__LineTwo">& Orders</span>
                </div>

                <div className="header__option mobile_disable">
                    <span className="header__LineOne">Try</span>
                    <span className="header__LineTwo">Prime</span>
                </div>

                <Link to="/checkout">
                    <div className="header__optionBasket">
                        <ShoppingCartIcon />
                         <span className="header__optionLineTwo header__basketCount">4</span>
                    </div>
                </Link>
                
            </div>
            
        </div>
    )
}

export default Header
