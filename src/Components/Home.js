import React from "react";
import "../css/Home.css";
import Product from "./Product";
import ProductData from "./ProductData";

function Home() {
  const Testfunction = (ProductParam) => {
    return (
      <div className="home__test">
        <Product
          id={ProductParam.id}
          title={ProductParam.title}
          image={ProductParam.image}
          price={ProductParam.price}
          rating={ProductParam.rating}
        />
      </div>
    );
  };
  return (
    <div className="home__container">
      {/*According to BEM convention we use "__" in the naming.*/}
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        {Testfunction(ProductData[0])}
        {Testfunction(ProductData[1])}
      </div>
      <div className="home__row">
        {Testfunction(ProductData[2])}
        {Testfunction(ProductData[3])}
        {Testfunction(ProductData[4])}
      </div>
      <div className="home__row">
        {Testfunction(ProductData[5])}
        {Testfunction(ProductData[6])}
        {Testfunction(ProductData[7])}
        {Testfunction(ProductData[8])}
      </div>
    </div>
  );
}

export default Home;
