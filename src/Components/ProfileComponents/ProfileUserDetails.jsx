
import React from "react";
import {TbCircleDashed} from "react-icons/tb"
export const ProfileUserDetails = () => {
    return (
        <div className = 'py-10 w-full '>
            <div className="flex items-center">
<div className="w-[15%]">
    <img className = "w-32 h-32 rounded-full "
      src="https://www.rd.com/wp-content/uploads/2020/12/GettyImages-78777891-scaled.jpg" 
      alt = " " />
</div>
<div className="space-y-5 ">
    <div  className="flex space-x-10 items-center">
        <p>username</p>
        <button>Edit Profile</button>
        <TbCircleDashed></TbCircleDashed>
    </div>
    <div className="flex space-x-10">
        <div>
            <span className="font-semibold mr-2"> 50</span>
            <span>posts</span>
        </div>
        <div>
            <span className="font-semibold mr-2">110</span>
            <span>follower </span>
        </div>
        <div>
            <span className="font-semibold mr-2">120</span>
            <span>following</span>
        </div>
    </div>
    <div>
        <p className="font-semibold">Pujaa Gautam</p>
        <p className="font-thin text-sm">Bloom Where You are Planted | PoojaGautam | Guru Gobind Singh Indraprastha University | Delhi</p>
    </div>

</div>
            </div>

        </div>
    );
};
/*
import React from "react";
import { TiArrowForwardOutline } from "react-icons/ti";

export const ProfileUserDetails = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            className="w-32 h-32 rounded-full"
            src="https://cdn.pixabay.com/photo/2023/04/13/16/51/girls-7922980_960_720.jpg"
            alt=""
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>username</p>
            <button>Edit Profile</button>
            <TiArrowForwardOutline />
          </div>
          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">50</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">110</span>
              <span>followers</span>
            </div>
            <div>
              <span className="font-semibold mr-2">120</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Full Name</p>
            <p className="font-thin text-sm">
              Bloom Where You are Planted | PoojaGautam | Guru Gobind Singh
              Indraprastha University | Delhi
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
*/