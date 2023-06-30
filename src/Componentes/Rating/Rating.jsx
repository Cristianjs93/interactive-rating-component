import React, { useState } from "react";
import Like from "../Like/Like";
import "./Rating.scss";

const Rating = () => {
  const [page, setPage] = useState(0);
  const [rating, setRating] = useState(0);

  const handleOnclick = (event) => {
    setRating(event.target.id);
  };

  const handleOnSubmit = (event) => {
    rating > 0 ? setPage(1) : setPage(page);
  };

  if (page === 0) {
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
        <div className="rating">
          <span
            id="5"
            className="rating__number rating__number--rated"
            onClick={handleOnclick}
          >
            5
          </span>
          <span
            id="4"
            className="rating__number rating__number--rated"
            onClick={handleOnclick}
          >
            4
          </span>
          <span
            id="3"
            className="rating__number rating__number--rated"
            onClick={handleOnclick}
          >
            3
          </span>
          <span
            id="2"
            className="rating__number rating__number--rated"
            onClick={handleOnclick}
          >
            2
          </span>
          <span
            id="1"
            className="rating__number rating__number--rated"
            onClick={handleOnclick}
          >
            1
          </span>
        </div>
        <button className="submit-button" onClick={handleOnSubmit}>
          SUBMIT
        </button>
      </div>
    );
  } else if (page !== 0) {
    return (
      <div className="container--thanks">
        <img src="../../public/01.svg" className="container--thanks__img" />
        <h2 className="container--thanks__message">{`You selected ${rating} out of 5`}</h2>
        <h2 className="container--thanks__title">Thank You!</h2>
        <p className="container--thanks__paragraph">
          We apreciate you taking the time to give a rating. if you ever need
          more support, dont't hesitate to get in touch!
        </p>
      </div>
    );
  }
};

export default Rating;
