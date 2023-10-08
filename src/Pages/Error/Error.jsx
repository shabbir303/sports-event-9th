import { NavLink } from "react-router-dom";

const Error = () => {
    return (
        <div>
            <img src="https://i.ibb.co/bzw4t5g/error.png" alt="" className="w-full h-fit mt-[50px]" />

            <NavLink to='/'>
            <button className="btn btn-success flex justify-center items-center mx-auto my-[50px] ">Go to Home</button>
            </NavLink>
        </div>
    );
};

export default Error;