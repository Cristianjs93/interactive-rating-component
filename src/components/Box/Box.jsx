import React, { useState } from "react";
import Like from "../Like/Like";
import Rating from "../Rating/Rating";
import "./Box.scss";

const Box = () => {
  const [sonRating, setSonRating] = useState(0);

  const handleSonRating = (rating) => {
    setSonRating(rating);
  };

  if (sonRating == 0) {
    return (
      <div className="container">
        <div className="content">
          <Like />
          <h1 className="content__title">How did we do?</h1>
          <p className="content__paragraph">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <Rating onSonRating={handleSonRating} />
      </div>
    );
  } else if (sonRating !== 0) {
    return (
      <div className="container--thanks">
        <img src="../../public/01.svg" className="container--thanks__img" />
        <h2 className="container--thanks__message">{`You selected ${sonRating} out of 5`}</h2>
        <h2 className="container--thanks__title">Thank You!</h2>
        <p className="container--thanks__paragraph">
          We apreciate you taking the time to give a rating. if you ever need
          more support, dont't hesitate to get in touch!
        </p>
      </div>
    );
  }
};

export default Box;
