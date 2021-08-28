import React from 'react';
import { Flex, Box, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { useFormik } from 'formik';
import * as Yup from "yup";


function Signup() {
    const validate = Yup.object({
        name: Yup.string()
          .min(3, "Must be 3 characters or more")
          .required("Required"),
        email: Yup.string().email("Email is invalid").required("Email is required"),
        password: Yup.string()
          .min(6, "Password must be at least 6 characters")
          .required("Password is required"),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref("password"), null], "Password must match")
          .required("Confirm password is required"),
      });

    const formik =useFormik({
        initialValues:{
            email: "",
            password: "",
            passwordCorfirm: "",
        },
        validationSchema:{validate},
        onSubmit: async (values, bag)=> {
            console.log(values);
        },
    })

    return (
        <div>
            <Flex align="center" width="full" justifyContent="center">
                <Box pt={10}>
                    <Box textAlign="center">
                        <Heading>Sign Up</Heading>
                    </Box>
                    <Box my={5} textAlign="left">
                        <form onSubmit={formik.handleSubmit}>
                            <FormControl>
                                <FormLabel>E-mail</FormLabel>
                                <Input
                                    name="email"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.email}
                                    // isInvalid={formik.touched.email && formik.errors.email}

                                />
                            </FormControl>
                            <FormControl mt="4">
                                <FormLabel>Password</FormLabel>
                                <Input
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.password}
                                    // isInvalid={formik.touched.password && formik.errors.password}
                                />
                            </FormControl>
                            <FormControl mt="4">
                                <FormLabel>Password  Confirm</FormLabel>
                                <Input
                                    name="passwordCorfirm"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.passwordCorfirm}
                                    // isInvalid={formik.touched.passwordCorfirm && formik.errors.passwordCorfirm}
                                />
                            </FormControl>
                            <Button mt="4" width="full" type="submit" >
                                Sign Up
                            </Button>
                        </form>
                    </Box>
                </Box>
            </Flex>
        </div>
    )
}

export default Signup
