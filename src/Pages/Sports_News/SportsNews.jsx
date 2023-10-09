/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";


const SportsNews = () => {
    const [sports, setSports] = useState([]);
    useEffect(()=>{
        fetch('/Data/blog.json')
      .then(res=>res.json())
      .then(data => setSports(data));
    },[])

    return (
        <div className="mt-[200px] grid grid-cols-3 w-[85%] mx-auto gap-[40px] ">
            {
              sports.map(sport=> <div className="shadow-xl">
                <div>
                    <img src={sport.image_url} alt="" /> 
                <div className="p-[20px]">

                <h1 className="mt-[20px] text-[25px] font-[700]">{sport.title}</h1>
                <h1 className="mt-[8px] text-[16px] font-[500] text-[#ABB2B9]  " >{sport.date}</h1>
                <p className="mt-[10px] pb-[20px] border-b-[1px] border-[#ABB2B9] text-[16px] font-[500] ">{sport.description}</p>
                <h1 className="mt-[10px] text-[20px] font-[600]">{sport.author_name}</h1>
                </div>
                </div>
                </div> )
            }
        </div>
    );
};

export default SportsNews;