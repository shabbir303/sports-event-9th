import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Authcontext } from "../../Provider/AuthProvider";


const Navbar = () => {
      const {user, UserSignOut} = useContext(Authcontext);

      const handleLogOut =()=>{
         
        UserSignOut()
        .then(console.log('signOut successfully'))
        .catch(error=>console.log(error))
      } 

      const navLinks = <>
        <li className="text-[20px] font-[500] " ><NavLink to ='/'
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive? "#0BDCB0" : "",
              background: isActive? "none": '',
            };
          }}
        > Home</NavLink></li>
        <li className="text-[20px] font-[500] "><NavLink to='/about' 
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive? "#0BDCB0" : "",
              background: isActive? "none": '',
            };
          }}
        >About</NavLink></li>
        <li className="text-[20px] font-[500] "><NavLink to='/service'
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive? "#0BDCB0" : "",
              background: isActive? "none": '',
            };
          }}
        >Service</NavLink></li>

        <li className="text-[20px] font-[500] "><NavLink to='/sports'
          style={({ isActive, isPending }) => {
            return {
              fontWeight: isActive ? "bold" : "",
              color: isActive? "#0BDCB0" : "",
              background: isActive? "none": '',
            };
          }}
        >Sports Blog</NavLink></li>
        
      </>
    return (
        <div>
            <div className="navbar bg-slate-900/[1] fixed top-0 text-[#B5C1BF] z-20  ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navLinks}
      </ul>
    </div>
    <img src="https://i.ibb.co/qdj0vMb/logo-removebg-preview.png" alt="" className="w-[80px] lg:w-[300px] ml-[-10px] lg:ml-[130px]" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end mr-[50px]">
    {
      user? <> </> :
      <>
         <p className="uppercase ml-2 lg:mr-3 font-[500] lg:font-[700] hidden lg:block" >Sign UP for <br /> Updates</p>
    <input type="email" name="" id="" placeholder="ENTER YOUR EMAIL" className=" py-[4px] lg:py-[10px] px-[10px] lg:px-[20px] bg-[#808B96] text-[#18BCE5] placeholder-white font-[400] lg:font-[500]  w-[120px] lg:w-[200px] ml-[10px] "  />
      </>
    }

    {
      user ?
      <>
      <div className="flex flex-col lg:flex-row gap-[0] lg:gap-[10px]">
      <h1>{user.displayName}</h1>
      <img src={user.photoURL} alt="" className="w-[30px] lg:w-[70px] h-[30px] lg:[70px]" />
      </div>
       <button onClick={handleLogOut} className="font-[600] bg-gradient-to-r from-red-700 to-sky-500 py-[8px] rounded-md shadow-xl shadow-green-500/50 px-[20px]">LogOut</button>
      </> :
      <Link to='/register'>
      <a className="px-[10px] lg:px-[20px] py-[5px] lg:py-[10px]  text-white bg-gradient-to-r from-emerald-500 to-emerald-900 text-[19px] lg:text-[20px] font-[500]">OK</a>
      </Link>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;