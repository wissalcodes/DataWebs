import React from "react";
import Laptop from '../assets/laptop.jpg'
export default function Analytics(){
    return(
        <div className="bg-white py-16 px-4 w-full">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img src={Laptop} className="w-[500px] mx-auto"/>
                <div className="flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum, quos cupiditate cum a blanditiis saepe nihil eligendi nulla officiis corrupti expedita eaque quasi fuga molestias minima doloremque nisi consectetur! Eligendi.
                    </p>
                    <button className="bg-[#000000] w-[200px] rounded-md font-medium mx-auto md:mx-0 py-3 mt-5 text-white">
                       Get Started
                    </button>
                </div>
            </div>
        </div>
    )
}