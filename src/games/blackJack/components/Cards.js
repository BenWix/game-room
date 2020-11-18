import React from "react";

const Cards = ({ playerhand }) => {
  // style for cards
  const card = {
    height: "150px",
    width: "100px",
  };

  if (playerhand.includes("2C")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/2C.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("2D")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/2D.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("2H")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/2H.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("2S")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/2S.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("3C")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/3C.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("3D")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/3D.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("3H")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/3H.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("3S")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/3S.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("4C")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/4C.jpg")} />
      </div>
    );
  }
  if (playerhand.includes("4D")) {
    return (
      <div>
        <img alt="" style={card} src={require("../components/images/4D.jpg")} />
      </div>
    );
  }
  console.log(playerhand);
  return <div></div>;
};

export default Cards;
