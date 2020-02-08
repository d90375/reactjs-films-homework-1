import React from "react";
import PropTypes from "prop-types";

import styles from "./signature.scss";

const Signature = props => {
  return <h1 className={styles.signature}>Hello, {props.name}</h1>;
};

Signature.propTypes = {
  name: PropTypes.string
};

export default Signature;
