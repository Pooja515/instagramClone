import React from "react";
import { Route, Routes ,useLocation} from "react-router-dom";
import Sidebar from "../../Components/Sidebar/Sidebar";
import HomePage from "../HomePage/HomePage";
import Profile from "../Profile/Profile";
import Story from "../Story/Story";
import { Auth } from "../Auth/Auth";
const Router = () => {
     const location = useLocation();
    return (
        <div>
            {(location.pathname !== "/login" && location.pathname !== "/signup") && (
              <div className = 'flex'>
              <div  className = "w-[20%] border border-l-slate-500 ">
              <Sidebar/>
          </div>
          <div className="w-full">
<Routes>
  <Route path="/" element ={<HomePage />}></Route>
  <Route path= "/username" element ={<Profile />}></Route>
  <Route path= "/story" element ={<Story />}></Route>
  </Routes>               
               </div>
          </div>
            )}
            {( location.pathname === "/login" || location.pathname === "/signup") && (
            <div>
                <Routes>
                <Route path= "/signup" element ={<Auth />}></Route>
                <Route path= "/login" element ={<Auth />}></Route>
                </Routes>
        </div>
            )}
            </div>
    );
};

export default Router;