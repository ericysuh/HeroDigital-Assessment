import React from "react";
import { Field } from "formik";
import classnames from "classnames";
import FormErrorMsg from "../FormErrorMsg/FormErrorMsg";

import styles from "./FormikDropdown.module.scss";

const FormikDropdown = ({ className, name, options, isRequired = true }) => {
  return (
    <Field as="select" name={name}>
      {({ field, meta }) => {
        const hasError = meta.touched && meta.error;
        const dropdownStyles = classnames(className, styles.dropdown, {
          [styles.inputError]: hasError,
        });

        const labelStyles = classnames(styles.label, {
          [styles.labelRequired]: isRequired,
        });

        return (
          <div className={dropdownStyles}>
            <label className={labelStyles} htmlFor={name}>
              EU Resident
            </label>
            <br />
            <select className={styles.select} name={name} id={name} {...field}>
              {options.map((opt, idx) => (
                <option key={`dropdown-${idx}`} value={opt.value}>
                  {opt.text}
                </option>
              ))}
            </select>
            <FormErrorMsg hasError={hasError} errorMessage={meta.error} />
          </div>
        );
      }}
    </Field>
  );
};

export default FormikDropdown;
