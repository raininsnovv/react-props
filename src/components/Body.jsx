import React from "react";
import { Products } from "./Products";
import Card from "./Card";
import "./css/body.css";

const Body = () => {
  return (
    <div className="productList">
      <Card
        img={Products[0].img}
        newPrice={Products[0].newPrice}
        oldPrice={Products[0].oldPrice}
        title={Products[0].title}
      />
      <Card
        img={Products[1].img}
        newPrice={Products[1].newPrice}
        oldPrice={Products[1].oldPrice}
        title={Products[1].title}
      />
      <Card
        img={Products[2].img}
        newPrice={Products[2].newPrice}
        oldPrice={Products[2].oldPrice}
        title={Products[2].title}
      />
      <Card
        img={Products[3].img}
        newPrice={Products[3].newPrice}
        oldPrice={Products[3].oldPrice}
        title={Products[3].title}
      />
      <Card
        img={Products[4].img}
        newPrice={Products[4].newPrice}
        oldPrice={Products[4].oldPrice}
        title={Products[4].title}
      />
      <Card
        img={Products[5].img}
        newPrice={Products[5].newPrice}
        oldPrice={Products[5].oldPrice}
        title={Products[5].title}
      />
    </div>
  );
};

export default Body;
