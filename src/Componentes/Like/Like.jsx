import React, { useState } from "react";
import "./Like.scss";

const Like = () => {
  const [like, setLike] = useState(false);

  const handleOnClick = (event) => {
    setLike(!like);
  };

  return (
    <div className="like-container">
      {like === false ? (
        <span className="like-container__star" onClick={handleOnClick}>
          &#9734;
        </span>
      ) : (
        <span className="like-container__star--liked" onClick={handleOnClick}>
          &#9733;
        </span>
      )}
    </div>
  );
};

export default Like;
