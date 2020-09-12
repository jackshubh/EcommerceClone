import React from "react";
import "../css/Product.css";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import { useStateValue } from "../context/StateProvider";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { store } from "react-notifications-component";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToCart = () => {
    //dispatch the item into the data layer for futher explanation go to reducer.js
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
    store.addNotification({
      title: "Added",
      message: `${title.split(" ")[0]} ${
        title.split(" ")[1]
      } ..... added to cart.`,
      type: "success",
      insert: "left",
      container: "bottom-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: false,
        showIcon: true,
        pauseOnHover: true,
      },
    });
  };

  return (
    <Card>
      <div className="product">
        <div className="product__info">
          <p>{title}</p>
          <p className="product__price">
            <strong> ₹{price}</strong>
          </p>
          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, index) => (
                <StarIcon key={index} />
              ))}
          </div>
          {/* Above code add ★ by passing the rating(numeric value) */}
        </div>
        <img src={image} alt={title} />
        <Button onClick={addToCart}>Add to Cart</Button>
      </div>
    </Card>
  );
}

export default Product;
