import React from "react";
import classnames from "classnames";
import FormikCheckbox from "../FormikCheckbox/FormikCheckbox";
import FormErrorMsg from "../FormErrorMsg/FormErrorMsg";

import styles from "./FormikCheckboxGroup.module.scss";

const maybeRenderError = (formik) => {
  const hasError = formik.errors.fieldName && formik.touched.fieldName;

  if (!hasError) return null;

  return (
    <FormErrorMsg hasError={true} errorMessage={formik.errors.fieldName} />
  );
};

const FormikCheckboxGroup = ({ className, name, options, formikProps }) => {
  const checkboxGroupStyles = classnames(className, styles.checkboxGroup);

  return (
    <div className={checkboxGroupStyles}>
      {maybeRenderError(formikProps)}
      {options.map((opt, idx) => (
        <FormikCheckbox
          key={`checkboxgroup-${idx}`}
          type="checkbox"
          name={name}
          value={opt.value}
          label={opt.label}
        />
      ))}
    </div>
  );
};

export default FormikCheckboxGroup;
