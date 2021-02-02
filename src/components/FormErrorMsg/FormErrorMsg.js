import React from "react";
import styles from "./FormErrorMsg.module.scss";

const FormErrorMsg = ({ hasError, errorMessage }) => {
  if (!hasError) return null;

  return <div className={styles.errorMessage}>{errorMessage}</div>;
};

export default FormErrorMsg;
