import { Box, Button, FormControl, FormErrorMessage, Input, useToast } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import React from 'react';
import  { useEffect } from 'react';
import { signupAction } from "../../Redux/Auth/Action";

import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

export const SignUp = () => {
    const initialValues = { email: "",username:"",name:"", password: "" };
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const { auth } = useSelector((store) => store);
    const  toast = useToast()

    console.log("store signup : ",auth.signup)
    const handleNavigate = () => navigate("/login");
    const handleSubmit = (values,actions) => {
        console.log("values: ", values);
        dispatch( signupAction(values));
        actions.setSubmitting(false);
    };
    useEffect(()=>{
        if(auth.signup?.username){
            navigate("/login")
            toast({
                title: 'Account created. ${auth.signup?.username}' ,
                status: 'success' ,
                duration: 5000,
                isClosable: true,
            })
        }
    })
    return (
        <div>
            <div className='border'>
                <Box
                    p={8}
                    display={'flex'}
                    flexDirection={'column'}
                    alignItems={'center'}
                >

                    <img className='mb-5' src="https://i.imgur.com/zqpwKLQ.png"
                        alt=""
                    />

                    <Formik
                        initialValues={initialValues}
                        onSubmit={handleSubmit}
                        validationSchema={validationSchema}
                    >
                        {(formikProps) => (
                            <Form className='space-y-8'>
                                <Field name="email">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={form.errors.email && form.touched.email}
                                        >
                                            <Input
                                                className="w-full"
                                                {...field}
                                                id='email'
                                                placeholder="Mobile Number or Email"
                                            ></Input>
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                            
                                <Field name="username">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={form.errors.username && form.touched.username}
                                        >
                                            <Input
                                                className="w-full"
                                                {...field}
                                                id='username'
                                                placeholder="Username"
                                            ></Input>
                                            <FormErrorMessage>{form.errors.username}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>
                                
                                <Field name="name">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={form.errors.email && form.touched.name}
                                        >
                                            <Input
                                                className="w-full"
                                                {...field}
                                                id='name'
                                                placeholder="Full Name"
                                            ></Input>
                                            <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>


                                <Field name="password">
                                    {({ field, form }) => (
                                        <FormControl
                                            isInvalid={form.errors.password && form.touched.password}
                                        >
                                            <Input
                                                className="w-full"
                                                {...field}
                                                id='password'
                                                placeholder="Password"
                                            ></Input>
                                            <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                                        </FormControl>
                                    )}
                                </Field>

                                <p className='text-center text-sm'>
                                    People who use our service may have uploaded your contact 
                                    information to Instagram. Learn More 
                                    </p>

                                <p className='text-center text-sm'> By signing up, you agree to our Terms, Privacy Policy, and 
                                Cookies Policy.
                                </p>

                                <Button 
                                className='w-full'
                                 mt={4} 
                                 colorScheme='blue' 
                                 type="submit"
                                  isLoading={formikProps.isSubmitting}>
                                    Sign Up
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>

            </div>
            <div className="border w-full  border-slate-300 mt-5">
                <p className='text-center py-2'>
                    If you Already Have Account
                     <span 
                     onClick={handleNavigate} 
                     className='ml-2 text-blue-700 cursor-pointer'>
                        Sign In
                        </span>{" "}
                    </p>

            </div>
        </div>

    );
};
export default SignUp;