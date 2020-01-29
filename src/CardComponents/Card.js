import React from "react";


const Card = ({ email, id, name }) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma1 grow bw2 shadow-5 ba b--dotted bw1 b--dark-green link dim black">
      <div>
        <h3>{name}</h3>
        <img alt="robots" src={`https://robohash.org/${id}?size=200x200`} />
      </div>
      <p>{email}</p>
    </div>
  );
};

export default Card;
