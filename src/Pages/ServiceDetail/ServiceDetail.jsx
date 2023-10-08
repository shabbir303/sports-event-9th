import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ServiceDetail = () => {
         const handleTicket = () => {
            toast("Successfully get Your Ticket")
            
        };

        const [service, setService] = useState([]);

        const {id }= useParams();
        console.log(id)

        const services = useLoaderData();
        // console.log(services);
        useEffect(()=>{
            const findService = services.find(service => service?.id == Number(id));
            // console.log(findService);
            setService(findService);
        },[id, services])
        console.log(service)
       
    return (
        <div className="relative">
            <img src={service.event_image} alt="" className="h-screen w-full" />
            <div className="absolute w-full h-screen bg-slate-700 top-0 opacity-[0.9]"></div>
            <h1 className="absolute text-[80px] font-[900] top-[140px] left-[600px] px-[20px] text-white uppercase shadow-2xl shadow-cyan-500/50">{service.name} 2023 </h1>
            <h1 className="top-[340px] px-[30px] py-[10px] text-[40px] font-[800] left-[750px] border-[5px] border-slate-400 text-white absolute ">{service.event_date_text} </h1>
            <div className="absolute flex items-center text-white top-[480px] left-[750px] gap-[30px] ">
                <div className="border-r-[5px] border-[white] pr-[50px] ">
                <h1 className="text-[20px]" >Get close </h1>
                <h1 className="text-[35px] font-[600] ">{service.finish_time} </h1>
                </div>
                <div className="text-[30px] font-[500] ">{service.event_area} </div>
            </div>
            <div className="absolute  text-white top-[590px] left-[750px] gap-[30px]">
                <h1 className="uppercase text-[40px] font-[700]">Are you Ready</h1>
                <p> {service.short_description} </p>
            </div>
            <button onClick={handleTicket} className="btn btn-outline btn-info absolute  text-white top-[750px] left-[730px] text-[20px] shadow-cyan-600/80 shadow-xl ">Click here to get your ticket now</button>
            <ToastContainer />
        </div>
    );
};

export default ServiceDetail;