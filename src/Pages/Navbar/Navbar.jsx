import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
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
    <img src="https://i.ibb.co/qdj0vMb/logo-removebg-preview.png" alt="" className="ml-[130px]" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinks}
    </ul>
  </div>
  <div className="navbar-end mr-[50px]">
    <p className="uppercase mr-3 font-[700]" >Sign UP for <br /> Updates</p>
    <input type="email" name="" id="" placeholder="ENTER YOUR EMAIL" className="py-[10px] px-[20px] bg-[#808B96] text-[#18BCE5] placeholder-white font-[500]  "  />
    <Link to='/register'>
    <a className="px-[20px] py-[10px]  text-white bg-gradient-to-r from-emerald-500 to-emerald-900 text-[20px] font-[500]">OK</a>
    </Link>
  </div>
</div>
        </div>
    );
};

export default Navbar;