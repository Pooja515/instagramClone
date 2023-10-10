import { Box, Button, FormControl, FormErrorMessage, Input } from '@chakra-ui/react';
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { signinAction } from  "../../Redux/Auth/Action";
import { getUserProfileAction } from  "../../Redux/User/Action";
import { useNavigate } from 'react-router-dom';
import * as Yup from "yup"

const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
});

export const SignIn = () => {
    const initialValues = { email: "", password: "" };
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector((store) => store);
    const jwt = localStorage.getItem("token");

    const handleSubmit = (values,actions) => {
        dispatch( signinAction(values));
        actions.setSubmitting(false);
    };
    useEffect(() => {
        if(jwt) dispatch(getUserProfileAction(jwt));
    }, [jwt]);

    useEffect(() => {
        if(user.reqUser?.username){
            navigate('/${user.reqUser?.username}');
        }
    }, [jwt, user.reqUser]);

    const handleNavigate = () => navigate("/signup");
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
                                                placeholder="Mobile number or email"
                                            ></Input>
                                            <FormErrorMessage>{form.errors.email}</FormErrorMessage>
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

                                <p className='text-center text-sm'>People who use our service may have uploaded your contact information to Instagram. Learn More </p>

                                <p className='text-center text-sm'> By signing up, you agree to our Terms, Privacy Policy, and Cookies Policy.</p>

                                <Button className='w-full' mt={4} colorScheme='blue' type="submit" isLoading={formikProps.isSubmitting}>
                                    Sign In
                                </Button>
                            </Form>
                        )}
                    </Formik>
                </Box>

            </div>
            <div className="border w-full  border-slate-300 mt-5">
                <p className='text-center py-2 text-sm'>If you Don't Have Account <span onClick={handleNavigate} className='ml-2 text-blue-700 cursor-pointer'>Sign Up</span></p>

            </div>
        </div>

    );
};
