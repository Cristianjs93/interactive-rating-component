import React, { useState } from "react";
import "./Rating.scss";

const Rating = ({ onSonRating }) => {
  const [rating, setRating] = useState(0);

  const handleOnclick = (event) => {
    setRating(event.target.id);
  };

  const handleOnSubmit = (event) => {
    onSonRating(rating);
  };

  return (
    <>
      <div className="rating">
        {[5, 4, 3, 2, 1].map((element) => (
          <span
            key={element}
            id={element}
            onClick={handleOnclick}
            className={`rating__number${
              rating >= element ? " rating__number--selected" : ""
            }`}
          >
            {element}
          </span>
        ))}
      </div>

      <button className="submit-button" onClick={handleOnSubmit}>
        SUBMIT
      </button>
    </>
  );
};

export default Rating;
