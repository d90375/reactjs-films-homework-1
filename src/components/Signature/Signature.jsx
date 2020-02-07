import React from "react";

import styles from "./signature.scss";

const Signature = props => {
  return <h1 className={styles.signature}>Hello, {props.name}</h1>;
};

export default Signature;
