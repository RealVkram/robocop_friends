import React from "react";

const Scroll = props => {
  const divScript = {
    overflow: "scroll",
    border: "5px light black",
    height: "500px"
  };
  return <div style={divScript}>{props.children}</div>;
};

export default Scroll;
