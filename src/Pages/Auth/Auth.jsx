import React from "react";
import {SignIn } from '../../Components/Register/SignIn';
import {SignUp } from '../../Components/Register/SignUp';
import { useLocation } from 'react-router-dom';
import "./Auth.css";

export const Auth = () => {
    const location=useLocation();
    return (
        <div className="">

            <div className="flex items-center justify-center h-[100vh] space-x-5">
                <div className="relative hidden lg:block ">
                    <div  className="h-[35.3rem] w-[23rem]">
                        <img 
                         className="h-full w-full"
                         src = "https://res.cloudinary.com/dnbw04gbs/image/upload/v16794375/home-phones-2X-edited_glksxn.png"
                         alt="" 
                         />
                          <div className="mobileWallpaper h-[33rem] w-[15.7rem] absolute top-6 right-3" >
                         
                         </div>
                    </div>

                </div>
                <div className="w-[40vw] lg:w-[23vw">
                    {location.pathname==="/login" ? <SignIn/> : <SignUp/>}
                  
                </div>
            </div>
        </div>
    );
};
/**
import React from "react";
import { useLocation } from 'react-router-dom';
//import SignIn from './SignIn';
import {SignIn } from '../../Components/Register/SignIn';
import {SignUp } from '../../Components/Register/SignUp';
//import SignUp from './SignUp';
import "./Auth.css";

export const Auth = () => {
    const location = useLocation();
    return (
        <div className="">
            <div className="flex items-center justify-center h-[100vh] space-x-5">
                <div className="relative hidden lg:block">
                    <div className="h-[35.3rem] w-[23rem]">
                        <img
                            className="h-full w-full"
                            src="https://res.cloudinary.com/dnbw04gbs/image/upload/v16794375/home-phones-2X-edited_glksxn.png"
                            alt=""
                        />
                        <div className="mobileWallpaper h-[33rem] w-[15.7rem] absolute top-6 right-3">
                           
                        </div>
                    </div>
                </div>
                <div className="w-[23rem]"> 
                    {location.pathname === "/login" ? <SignIn /> : <SignUp />}
                </div>
            </div>
        </div>
    );
};
**/