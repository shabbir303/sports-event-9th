import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(Authcontext);
    const location = useLocation();
    console.log(location);

    if(loading){
     return <span className="loading loading-dots loading-lg mt-[220px] flex justify-center items-center mx-auto "></span>;
    }

    if(user){
      return children;
    }
    return (
       <Navigate state={location.pathname} to='/login'></Navigate>
    );
};

export default PrivateRoutes;