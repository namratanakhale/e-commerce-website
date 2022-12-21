import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Utils/StateProvider";
import { auth } from "../../firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
      // basket.length="";
    }
  }

  const workInProgress=()=>{
    alert("Work in Progress...")
  }

  const justAdded=()=>{
    alert("Just added to look good.")
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://cdn.shopify.com/s/files/1/0597/0244/4203/files/amazelogo_480x.png?v=1629749076"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="text" onClick={workInProgress}/>
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={'/login'}>
          <div onClick={handleAuthenticaton} className="header__option">
            <span className="header__optionLineOne">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <Link to='/orders'>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        

        <div className="header__option" onClick={justAdded}>
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
