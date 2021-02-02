import React from "react";
import { Field } from "formik";
import classnames from "classnames";
import FormErrorMsg from "../FormErrorMsg/FormErrorMsg";

import styles from "./FormikTextField.module.scss";

const FormikTextField = ({
  className,
  type,
  name,
  label,
  ariaLabel,
  isRequired = true,
}) => {
  return (
    <Field name={name}>
      {({ field, meta }) => {
        const hasError = meta.touched && meta.error;
        const formikFieldStyles = classnames(className, styles.input, {
          [styles.inputError]: hasError,
        });

        const labelStyles = classnames(styles, label, {
          [styles.labelRequired]: isRequired,
        });

        return (
          <div className={styles.textField}>
            <label className={labelStyles} htmlFor={name}>
              {label}
            </label>
            <input
              className={formikFieldStyles}
              type={type}
              name={name}
              id={name}
              {...field}
              aria-label={ariaLabel}
            />
            <FormErrorMsg hasError={hasError} errorMessage={meta.error} />
          </div>
        );
      }}
    </Field>
  );
};

export default FormikTextField;
