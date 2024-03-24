import React,{useState} from "react";
import { Box, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import { useHistory } from "react-router-dom";
import { CUSTOMER_DETAILS } from "../constants";
import Plans from "../components/Plans";

function Register() {
    const history = useHistory();
    const [plan, setPlan] = useState();
    
    const handleFormSubmit =(values) =>{
     if(plan) {
      // console.log({...values,'plan':{...plan}});
      //api to register
       history.push(CUSTOMER_DETAILS);
       //return {...values,'plan':{...plan}}
     }
    }
  return (
    <Box className="form-wrapper" sx={{ height: 'calc(79vh - 10px)'}} >
      <h3>Register a new account</h3>
      <Formik
        // validate={(values) => {
        //   //validations here
        // }}
        initialValues={{ fullname: "", email: "", dob: "", aadhar:"", registerdate:"", mobile:""}}
         
        onSubmit={(values, { setSubmitting }) => {
            setSubmitting(true);
            handleFormSubmit(values);
          setTimeout(() => {
            setSubmitting(false);
          }, 400);
        }}
        >
        {({ isSubmitting}) => (
          <Form>
            <Field
              type="text"
              name="fullname"
              placeholder="Enter your fullname"
            />
            <Field
              type="email"
              name="email"
              placeholder="Enter email address"
            />
            <Field
              type="date"
              name="dob"
              placeholder="Enter date of birth"
            />
           
            <Field
              type="text"
              name="aadhar"
              placeholder="Enter aadhar number"
              maxLength="12"
            />
          
            <Field
              type="date"
              name="registerdate"
              placeholder="Enter register date"
            />
          
            <Field
              type="tel"
              name="mobile"
              placeholder="Enter mobile number"
             // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              maxLength="10"
            />
            <Plans selectedPlan={plan?.name} handleSelectedPlan={(planOpt) => setPlan({...planOpt})} />
            <Button type="submit"  variant= "contained" disabled={plan === undefined && isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default Register;
