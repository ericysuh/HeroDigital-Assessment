import React from "react";
import classnames from "classnames";

import styles from "./Button.module.scss";

const Button = ({ className, type, label, isDisabled }) => {
  const buttonStyle = classnames(className, styles.button, {
    [styles.buttonDisabled]: isDisabled,
    [styles.buttonReset]: type === "reset",
  });

  return (
    <button className={buttonStyle} type={type}>
      {label}
    </button>
  );
};

export default Button;
