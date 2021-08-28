import { ErrorMessage, useField} from "formik";
import React from 'react';
import {Input} from "@chakra-ui/react";

const FormInput =(props) =>{
    const [field]=useField(props);

    
    return(
        <div>
            <Input {...field} {...props} />
            <ErrorMessage component="div" name={field.name} />
        </div>
    )
}

export default FormInput