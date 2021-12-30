import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./signupform.scss";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

interface FormValues {
  email: string;
}

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required(""),
});

const SignUpForm = () => {
  const [isSent, setIsSent] = useState(false);

  const submitForm = async (values: FormValues, formik: FormikHelpers<FormValues>) => {
    console.log(values);
    const { email } = values;
    try {
      const payload = {
        email_address: email,
      };

      await axios.post('/.netlify/functions/add-email-subscriber', payload);
      setIsSent(true);
      formik.resetForm();
    } catch (error: any) {
      alert(error.message);
    }
  };

  if (isSent) {
    return <SuccessMessage />
  } else {
  

  return (
    <>
    <div className="form">
      <Formik
        initialValues={{ email: "" }}
        validationSchema={SignupSchema}
        onSubmit={submitForm}
      >
        {(formik) => (
         <Form data-netlify-recaptcha="true" data-netlify="true">
         
         <Field name="email" placeholder="Your email address" label="Email"/>
         <ErrorMessage name="email" className="error" />
         <button 
         disabled={!formik.isValid || !formik.dirty}
         type="submit"
         >Subscribe!</button>
       </Form>
          
       
        )}
      </Formik>
      </div>
    </>
  );
}};

export default SignUpForm;


