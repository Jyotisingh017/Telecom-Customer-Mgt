import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { CUSTOMER_DETAILS } from "../constants";
import Plans from "../components/Plans";
import "./register.css";

function Register() {
  const history = useHistory();
  const [plan, setPlan] = useState();
  const [isErr, setErr] = useState(false);

  const handleFormSubmit = (values) => {
    if (
      values.fullname &&
      values.email &&
      values.dob &&
      values.aadhar &&
      values.registerdate &&
      values.mobile &&
      plan
    )
      setErr(false);
    else setErr(true);
    if (plan) {
      //api to register
      history.push(CUSTOMER_DETAILS);
      //return {...values,'plan':{...plan}}
    }
  };
  return (
    <Box className="form-wrapper" sx={{ height: "calc(79vh - 10px)" }}>
      <h3 role="heading">Register a new account</h3>
      {isErr && (
        <Typography role="alert" className="alert">
          Please fill complete form
        </Typography>
      )}
      <Formik
        initialValues={{
          fullname: "",
          email: "",
          dob: "",
          aadhar: "",
          registerdate: "",
          mobile: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(true);
          handleFormSubmit(values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="formcontrol">
              <label>Name</label>
              <Field
                type="text"
                name="fullname"
                placeholder="Enter your fullname"
              />
            </div>

            <div className="formcontrol">
              <label>Email</label>
              <Field
                type="email"
                name="email"
                placeholder="Enter email address"
              />
            </div>
            <div className="formcontrol">
              <label>Date of birth</label>
              <Field type="date" name="dob" placeholder="Enter date of birth" />
            </div>
            <div className="formcontrol">
              <label>Aadhar number</label>
              <Field
                type="text"
                name="aadhar"
                placeholder="Enter aadhar number"
                maxLength="12"
              />
            </div>
            <div className="formcontrol">
              <label>Registration date</label>
              <Field
                type="date"
                name="registerdate"
                placeholder="Enter register date"
              />
            </div>
            <div className="formcontrol">
              <label>Mobile number</label>
              <Field
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
                maxLength="10"
              />
            </div>
            <div className="formcontrol">
              <label>Choose any one plan</label>
              <Plans
                selectedPlan={plan?.name}
                handleSelectedPlan={(planOpt) => setPlan({ ...planOpt })}
              />
            </div>
            <Button
              type="submit"
              role="button"
              variant="contained"
              disabled={plan === undefined && isSubmitting}
            >
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Register;
