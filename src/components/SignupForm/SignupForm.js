import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import FormikTextField from "../FormikTextField/FormikTextField";
import Button from "../Button/Button";
import FormikDropdown from "../FormikDropdown/FormikDropdown";
import FormikCheckboxGroup from "../FormikCheckboxGroup/FormikCheckboxGroup";

import styles from "./SignupForm.module.scss";

const EuResidentData = [
  {
    text: "- select one -",
    value: "",
  },
  {
    text: "Yes",
    value: "Yes",
  },
  {
    text: "No",
    value: "No",
  },
];

const checkboxData = [
  {
    label: "Advances",
    value: "advances",
  },
  {
    label: "Alerts",
    value: "alerts",
  },
  {
    label: "Other Communications",
    value: "other",
  },
];

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

mock.onPost("/subscribe").reply(200, {
  msg: "Thank you. You are now subscribed",
});

const SignupForm = () => {
  const [successMessage, setSuccessMessage] = useState("");

  if (successMessage.length) {
    return <h1>{successMessage}</h1>;
  }

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.heading}>Sign up for email updates</h1>
      <p className={styles.comment}>*Indicates Required Field</p>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          organization: "",
          euResident: "",
          fieldName: [],
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("First name is required"),
          lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email address is required"),
          euResident: Yup.string().required("EU Resident is required"),
          fieldName: Yup.array().min(1, "Please choose one of the followings"),
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          axios
            .post("/subscribe", new URLSearchParams(values).toString(), {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            })
            .then(function (response) {
              setSubmitting(false);
              resetForm();
              setSuccessMessage(response.data.msg);
            })
            .catch((error) => {
              // error goes here!
            });
        }}
      >
        {(props) => {
          const isAllValid = props.isValid && props.dirty ? true : false;

          return (
            <Form className={styles.form}>
              <div className={styles.formInputs}>
                <FormikTextField
                  className={styles.input}
                  type="text"
                  name="firstName"
                  label="First Name"
                  ariaLabel="First Name"
                />
                <FormikTextField
                  className={styles.input}
                  type="text"
                  name="lastName"
                  label="Last Name"
                  ariaLabel="Last Name"
                />
                <FormikTextField
                  className={styles.input}
                  type="text"
                  name="email"
                  label="Email Address"
                  ariaLabel="Email"
                />
                <FormikTextField
                  className={styles.input}
                  type="text"
                  name="organization"
                  label="Organization"
                  ariaLabel="Organization"
                  isRequired={false}
                />
              </div>
              <FormikDropdown
                className={styles.dropdown}
                name="euResident"
                options={EuResidentData}
              />
              <FormikCheckboxGroup
                className={styles.checkBoxes}
                name="fieldName"
                options={checkboxData}
                formikProps={props}
              />

              <div className={styles.formActions}>
                <Button type="submit" label="Submit" isDisabled={!isAllValid} />
                <Button
                  className={styles.buttonReset}
                  type="reset"
                  label="Reset"
                  onSubmit={props.resetForm}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default SignupForm;
