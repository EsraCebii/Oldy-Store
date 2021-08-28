import React from 'react';
import { Flex, Box, Heading, FormControl, FormLabel,  Button } from "@chakra-ui/react";
import { Form, Formik } from 'formik';
import validationSchema from './validations';
import FormInput from "../../../components/FormInput"


function Signup() {

    // const formik =useFormik({
    //     initialValues:{
    //         email: "",
    //         password: "",
    //         passwordCorfirm: "",
    //     },
    //     validationSchema,        onSubmit: async (values, bag)=> {
    //         console.log(values);
    //     },
    // })

    return (
        <div>
            <Flex align="center" width="full" justifyContent="center">
                <Box pt={10}>
                    <Box textAlign="center">
                        <Heading>Sign Up</Heading>
                    </Box>
                    <Box my={5} textAlign="left">
                        <Formik
                            initialValues={{
                                email: "",
                                password: "",
                                passwordConfirm: "",
                            }}
                            validationSchema={validationSchema}
                            onSubmit={(values) => {
                                console.log(values)
                            }}


                        >
                            <Form>
                                <FormControl>
                                    <FormLabel>E-mail</FormLabel>
                                    <FormInput
                                        name="email"
                                        type="email"
                                    

                                    />
                                </FormControl>
                                <FormControl mt="4">
                                    <FormLabel>Password</FormLabel>
                                    <FormInput
                                        name="password"
                                        type="password"
                                   
                                    />
                                </FormControl>
                                <FormControl mt="4">
                                    <FormLabel>Password  Confirm</FormLabel>
                                    <FormInput
                                        name="passwordConfirm"
                                        type="password"
                                   
                                    />
                                </FormControl>
                                <Button mt="4" width="full" type="submit" >
                                    Sign Up
                                </Button>
                            </Form>
                        </Formik>
                    </Box>
                </Box>
            </Flex>
        </div >
    )
}

export default Signup
