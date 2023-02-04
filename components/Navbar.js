import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import logo from "../public/logo-live.png"
import search from "../public/search.svg"
import ServiceSubmenu from "./ServiceSubmenu";
import Button from "./UI/Button";

const Navbar = () => {
    const data = [
        {title : "Company", url : "https://10pearls.com/about/"},
        {title : "Services", url : "https://10pearls.com/about/"},
        {title : "Work", url : "https://10pearls.com/about/"},
        {title : "insights", url : "https://10pearls.com/about/"},
        {title : "careers", url : "https://10pearls.com/about/"}
    ];
    const Companydata = [
        {title : "our stories"},
        {title : "people"},
        {title : "awards"},
        {title : "partenership"},
        {title : "locations"},
        {title : "10pearls Labs"},
        {title : "10pearls University"},
        {title : "Empower Foundation"}
    ]
       
    return ( 
        <div className="bg-white py-5 fixed z-10 w-full">
            <div className="max-w-screen-xl mx-auto flex justify-between">
                <Image alt="" src={logo} height={20} width={150} className="h-[3rem]"/>
                <div className="">
                    <ul className="flex gap-x-10 text-sm items-center">
                        {data.map((link, index)=>(
                            <li key={index} className="group py-5" >
                                
                                <Link href={link.url}  >{link.title}</Link>
                                
                                <div className={`absolute left-0 right-0 top-20 pt-5 ${link.title == "Company" ? "hidden group-hover:block" : "hidden"} w-full bg-white bg-opacity-50 h-40 backdrop-filter backdrop-blur-lg `}>
                                    <div className="grid grid-cols-2 gap-y-2 absolute right-[32rem]">
                                        {Companydata.map((item, index)=>(
                                            <Link key={index} href={'/'}  className="block hover:text-blue-800" >{item.title}</Link>
                                        ))}
                                    </div>
                                    
                                </div>
                                <div className={`absolute left-0 right-0 top-20 pt-5 ${link.title == "Services" ? "hidden group-hover:block" : "hidden"} w-full bg-white bg-opacity-50 h-56 backdrop-filter backdrop-blur-lg`}> 
                                    <ServiceSubmenu/>
                                </div>
                                <div className={`absolute left-0 right-0 top-20 pt-5 ${link.title == "Work" ? "hidden group-hover:block" : "hidden"} w-full bg-white bg-opacity-50 h-56 backdrop-filter backdrop-blur-lg`}> 
                                    <div className="grid grid-cols-2 gap-y-2 absolute right-[32rem]">
                                            {Companydata.map((item, index)=>(
                                                <Link key={index} href={'/'}  className="block hover:text-blue-800" >{item.title}</Link>
                                            ))}
                                    </div>
                                </div>
                                 
                            </li>
                        ))}
                        <Button name={"Contact"} />
                        <Image src={search} height={20} width={20} className="cursor-pointer hover:invert" alt=""/>
                    </ul>
                </div>
            </div>
        
        </div>
        
     );
}
 
export default Navbar;