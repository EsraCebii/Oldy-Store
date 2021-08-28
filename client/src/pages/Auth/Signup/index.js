import React from 'react';
import { Flex, Box, Heading, FormControl, FormLabel,  Button,} from "@chakra-ui/react";

import { Form, Formik} from 'formik';

import validationSchema from './validations';

import FormInput from "../../../components/FormInput"

import {fetchRegister} from "../../../api"

import {useAuth} from "../../../contexts/AuthContext"

function Signup() {
    const {login}=useAuth();

   

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
                            onSubmit={(values, bag) => {
                                try{
                                    const registerResponse = fetchRegister({email:values.email, password:values.password});
                                    login(registerResponse)
                                    console.log(registerResponse);
                                }catch(e){
                                    bag.setErrors({
                                        general :  e.response.data.message
                                    })

                                }
                                
                            }}


                        >
                           
                            <Form>
                                <FormControl>
                                    <FormLabel>E-mail</FormLabel>
                                    {/* <Box my={5}>
                                        {
                                        Formik.error.general &&(
                                            <Alert status="error">
                                                {Error.general}
                                            </Alert>
                                        )}

                                    </Box> */}
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
