import React from "react";
import PropTypes from "prop-types";

function MainTemplate({ children }) {
  return <div className="App container">{children}</div>;
}

MainTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainTemplate;
