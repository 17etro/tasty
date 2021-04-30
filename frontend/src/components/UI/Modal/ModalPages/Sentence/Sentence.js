import React from "react";

const Sentence = (props) => {
  return <p className={props.data.className}>{props.data.sentence}</p>;
};

export default Sentence;
