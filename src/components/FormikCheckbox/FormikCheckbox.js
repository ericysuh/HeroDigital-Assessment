import React from "react";
import { Field } from "formik";
import classnames from "classnames";

import styles from "./FormikCheckbox.module.scss";

const Checkbox = ({ className, type, name, value, label }) => {
  const checkboxStyle = classnames(className, styles.checkboxWrapper);

  return (
    <div
      className={checkboxStyle}
      role="group"
      aria-labelledby="checkbox-group"
    >
      <label className={styles.checkboxLabel}>
        {label}
        <Field
          className={styles.checkbox}
          type={type}
          name={name}
          value={value}
        />
        <span className={styles.customCheckbox}></span>
      </label>
    </div>
  );
};

export default Checkbox;
