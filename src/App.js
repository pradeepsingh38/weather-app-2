import React from "react";
import Login from "./componet/Login";
// import "./App.css";
import { useSelector } from "react-redux";
import { selectuser } from "./features/userSlice";
import { logout } from "./features/userSlice";

const App = () => {
    const user = useSelector(selectuser);
    return <div> {user ? <logout/> : Login}</div>;
    
    
};
export default App;