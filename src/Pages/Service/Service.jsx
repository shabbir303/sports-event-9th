/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const Service = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        fetch('/Data/event.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, [])

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px] w-[90%] mx-auto ">
            {
                events.map((event => <div className="shadow-xl rounded-xl" >

                    <img src={event.image_url} alt="" className="h-[700px] rounded-2xl " />
                    <div className="w-[85%] px-[30px] py-[40px] mx-auto bg-[#BEF2C6] rounded-xl mb-6 border-[2px] border-[#073822] border-top-none ">
                        <h1 className="text-[25px] font-[700] text-[#073822] ">{event.name}</h1>
                        <h1 className="flex items-center gap-[10px] mt-[15px] "><img className="w-[20px] h-[20px]" src="https://i.ibb.co/FhBM8Pp/location.png" alt="" />{event.event_area} </h1>
                        <h1 className="flex items-center gap-[10px] mt-[15px]"> <img className="w-[20px] h-[20px]"  src="https://i.ibb.co/WtdHsw5/calendar.png" alt="" />{event.event_date_text} </h1>
                        <h1 className="flex items-center gap-[10px] mt-[15px]"> <img className="w-[20px] h-[20px]"  src="https://i.ibb.co/74Ft3zS/clock.png" alt="" />Start {event.finish_time}-Until Finish </h1>
                        <h1 className="text-[30px] font-[700]  mt-[20px] " >{event.price}<span className="text-[16px] font-normal " >/Ticket</span> </h1>
                        <NavLink to={`/service/${event.id}`}>
                        <button className="text-[15px] font-bold bg-[#eec53d] hover:bg-[#8AD63F] mt-[15px] px-[20px] py-[10px] rounded-xl "  >Learn More</button>
                        </NavLink>
                         </div>
                </div>))
            }
        </div>
    );
};

export default Service;