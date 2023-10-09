// import { Slide } from 'react-slideshow-image';
// import 'react-slideshow-image/dist/styles.css'
import moment from 'moment';
import { NavLink } from 'react-router-dom';
// import Sponsor from './Sponsor';
import { useEffect, useState } from "react";
import Marquee from 'react-fast-marquee';
import Sponsor from './Sponsor';
import Service from '../Service/Service';
import Footer from '../Footer/Footer';




const Home = () => {

    // const styles ={
    //     ".rfm-marquee": {
    //         gap: "85px",
            
    //     }
    // }

    const [sponsorData, setSponsorData] = useState([]);
    useEffect(()=>{
       fetch('/Data/sponsor.json')
       .then(res=>res.json())
       .then(data => setSponsorData(data));
    },[])
//    console.log(sponsorData);

    return (
        <div>
            <div className="">
                <img src="https://i.ibb.co/dWwTvhZ/champion.jpg" alt="" className="h-[800px] w-full bg-opacity-[10000] " />
                <div className=''>
                    <h1 className="text-[80px] uppercase absolute  top-[200px] text-white font-[800] left-[500px] " >Sports Event <br />Starts On</h1>
                    <h1 className='font-bold text-[30px] absolute text-[#f5b847] top-[450px] left-[500px] uppercase ' >{moment().format("dddd, MMMM, D YYYY")}</h1>
                    <h1 className='font-bold text-[30px] absolute text-[#f5b847] top-[500px] left-[500px] uppercase '>at {moment().format(" h:mm a")}</h1>

                    <div className='text-center mt-[40px]'>
                        <h1 className='text-[30px] font-[800]' >VIP SPORT EVENTS AND HOSPITALITY</h1>
                        <p className='text-[16px] font-[400]'>With a passion for sports and the finer things in life, Sportevents.me takes your VIP experiences for <br /> sports and entertainment to another level. For corporate clients, small or large groups to <br /> individuals our skilled team will create bespoke packages taking care of your every need, creating a <br /> truly unforgettable experience.</p>
                    </div>
                </div>


                <div className="carousel carousel-center rounded-box h-[280px] w-fit grid grid-cols-2 lg:grid-cols-6 my-[50px] ">
                    <div className="carousel-item relative">
                        <img src="https://i.ibb.co/gtkqWYw/pic1.jpg" alt="Pizza" />
                        <h1 className='text-[20px] font-[700] absolute text-white z-10 bottom-[110px] left-[100px]  ' >CYCLING</h1>
                    </div>
                    <div className="carousel-item relative">
                        <img src="https://i.ibb.co/r4Z33JK/pic2.jpg" alt="Pizza" />
                        <h1 className='text-[20px] font-[700] absolute text-white z-10 bottom-[110px] left-[100px]  ' >GOLF</h1>
                    </div>
                    <div className="carousel-item relative">
                        <img src="https://i.ibb.co/MCZXj9r/pic3.jpg" alt="Pizza" />
                        <h1 className='text-[20px] font-[700] absolute text-white z-10 bottom-[110px] left-[100px]  ' >SWIMMING</h1>
                    </div>
                    <div className="carousel-item relative">
                        <img src="https://i.ibb.co/fGHL2yp/pic4.jpg" alt="Pizza" />
                        <h1 className='text-[20px] font-[700] absolute text-white z-10 bottom-[110px] left-[100px]  ' >TENNIS</h1>
                    </div>
                    <div className="carousel-item relative">
                        <img src="https://i.ibb.co/TBdp7yN/pic5.jpg" alt="Pizza" />
                        <h1 className='text-[20px] font-[700] absolute text-white z-10 bottom-[110px] left-[100px]  ' >CRICKET</h1>
                    </div>
                    <div className="carousel-item relative">
                        <img src="https://i.ibb.co/swsnrTM/pic6.jpg" alt="Pizza" />
                        <h1 className='text-[20px] font-[700] absolute text-white z-10 bottom-[110px] left-[100px]  ' >FOOTBALL</h1>
                    </div>
                    
                </div>
                <div className='w-full h-[280px] absolute bg-slate-900 opacity-[0.7] top-[1030px]   '> </div>
                <div className='flex w-[70%] justify-center gap-[50px] mx-auto p-[30px] bg-[#BEF2C6] rounded-2xl my-[150px] '>
                    <img src="https://i.ibb.co/VVWD5qJ/sport-merch.jpg" alt="" className='w-[500px] h-[300px] rounded-xl' />
                   <div>
                   <h1 className='uppercase text-[#073822] text-[40px] font-[800] '>Unveiling Our Passion <br /> for Sports</h1>
                    <p className='mt-[20px]'>Join us in celebrating the love of sports, athleticism, and the thrill of victory. Together, we'll continue to push the boundaries of what's possible in the world of sports.</p>
                   <NavLink to='/about'>
                   <button className='bg-[#FFB700] px-[25px] py-[15px] rounded-2xl mt-[20px] text-[#073822] uppercase font-[800] hover:bg-[#073822] hove:text-white text-[14px] '>About Us</button>
                   </NavLink>
                   </div>
                </div>
                        <div>
                            <h1 className='text-[40px] text-center font-[800] mb-[50px]' >Partners & Sponsors</h1>
                            <Sponsor></Sponsor>
                        </div>

                        <div>
                            <h1 className='text-[40px] font-[800] text-center mt-[150px] ' >NEW EVENTS COMING UP INCLUDE</h1>
                            <Service></Service>
                        </div>
            </div>
            <div className='relative'>

                <img src="https://i.ibb.co/VwXZK9k/olymic.jpg" alt="" className='mx-auto flex justify-center items-center  mt-[60px] rounded-2xl' />
                <NavLink to='/sports'>
                <button className="btn  btn-info absolute top-[350px] left-[840px] ">Sports Blog</button>
                </NavLink>
            </div>
         <div className='mt-[80px]'>
         <Footer></Footer>
         </div>

        </div>
    );
};

export default Home;