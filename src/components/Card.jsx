import React from "react";

const Card = (props) => {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label={props.name}>
          {props.img}
        </span>
        <span>{props.name}</span>
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
};

export default Card;
