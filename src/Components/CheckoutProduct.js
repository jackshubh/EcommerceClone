import React from "react";
import StarIcon from "@material-ui/icons/Star";
import { Button } from "@material-ui/core";
import "../css/CheckoutProduct.css";
import { useStateValue } from "../context/StateProvider";
import { store } from "react-notifications-component";

function CheckoutProduct({ id, image, title, price, rating, hideButton }) {
  const [cart, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });

    store.addNotification({
      title: "Removed",
      message: `${title.split(" ")[0]} ${
        title.split(" ")[1]
      } ..... removed from cart.`,
      type: "default",
      insert: "top",
      container: "top-right",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: false,
        showIcon: false,
        pauseOnHover: false,
      },
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <strong>₹ {price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, index) => (
              //In the above line it creates an array with null values in it and than maps it with a star.
              //In the above code _ means a parameter which we will be not using it.
              <StarIcon key={index} />
            ))}
        </div>
        {!hideButton && (
          <Button onClick={removeFromCart} style={{ cursor: "pointer" }}>
            Remove from Cart
          </Button>
        )}
      </div>
    </div>
  );
}

export default CheckoutProduct;
