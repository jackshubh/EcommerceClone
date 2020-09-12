import React from "react";
import "../css/Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { auth } from "../firebase/firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <DehazeIcon className="header__dehazeIcon" />{" "}
      {/* This is just for beutification to add three lines near the amazon logo */}
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>
      {/* Above code add amazon logo and when clicked it takes to home page */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <div style={{ cursor: "pointer" }}>
          <SearchIcon className="header__searchIcon" />
        </div>
      </div>
      {/* Above code add search bar and search icon  */}
      <div className="header__nav">
        <Link to="/login">
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello, {user?.email ? user?.email.split("@")[0] : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>
        {/* Above code add content in right to search icon  */}
        <Link to="/orders" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>
        {/* Above code add content in right to search icon  */}
        <Link to="/">
          <div className="header__option">
            <span className="header__optionLineOne">Try</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>
        {/* Above code add content in right to search icon  */}
        <Link to="/checkout">
          <div className="header__optionBasket">
            <span className="header__optionLineOne">
              <ShoppingCartOutlinedIcon />
            </span>
            <span className="header__optionLineTwo header__basketCount">
              {cart.length}
            </span>
          </div>
        </Link>
        {/* Above code add Cart icon and when clicked it taked to checkout page */}
      </div>
    </div>
  );
}

export default Header;
