import React from "react";

import "../button/Button.css";

const ScientificButton = ({ content, type }) => {
  return <div className={`Button ${type || ""}`}>{content}</div>;
};

export default ScientificButton;
