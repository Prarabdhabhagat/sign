import React from "react";
import * as Yup from 'yup';

const signUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Enter Your Name"),
    email:Yup.string().email().required("Enter Your Name"),
    password:Yup.string().min(6).required("Enter Your password"),
    confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"password must match"),

});

export default signUpSchema;