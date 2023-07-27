import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Logout.css";
import { logout, selectuser } from "../features/userSlice";


const Logout = () => {
  const user = useSelector(selectuser);

  const dispatch = useDispatch();
   const handleLogout = (e)=> {
    e.preventDefault();

   
    dispatch(logout());
   };

  return (
    <div className="logout">
      <h1> 
        Welcome <span className="user_name">{user.name}</span>
        
      </h1>
      <button className="logout_button" onClick={(e) => handleLogout(e) }>
        Logout</button>
    </div>
  );
};

export default Logout;
