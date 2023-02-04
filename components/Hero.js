import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import Button from "./UI/Button";
import arrowleft from "../public/arrow-left.png";
import arrowright from "../public/arrow-right.png";
import { useState } from "react";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs"

const Hero = () => {
    const images = [
        {image1 : "/logo1.png"},
        {image1 : "/logo2.svg"},
        {image1 : "/logo1.png"},
        {image1 : "/logo2.svg"},
        {image1 : "/logo1.png"},
        {image1 : "/logo1.png"},
        {image1 : "/logo1.png"},
        {image1 : "/logo2.svg"},
    ];
    const [slide,setSlide] = useState();
    
    return (
    <>
    <Swiper
      slidesPerView={1}
      onSwiper={((slide)=>setSlide(slide))}
      className="relative"
      loop={true}
      
    >
      <SwiperSlide>
      <div className="bg-[url('/hero-img.png')] h-[35rem] bg-no-repeat bg-cover">
        <div className="ml-36 pt-72 w-96 leading-relaxed">
          <h4 className="text-3xl font-light">Reimagine with Purpose</h4>
          <p className="pt-5">
            We help businesses digitally transform, build new products, and
            accelerate digital teams.{" "}
          </p>
          <span className="pt-10 inline-block"><Button name={"Let's build something"} /></span>
        </div>
      </div>
      </SwiperSlide>


      <SwiperSlide>
        <div className="bg-[url('/hero3img.png')] h-[35rem] mt- bg-no-repeat bg-cover relative">
            <div className="absolute right-32 top-72 w-[32rem]">
            <h4 className="text-3xl font-light">A recognized tech partner that guarantees performance</h4>
            <div className="grid grid-cols-4 pt-5">
                {images.map((image, index)=>(
                    <Image key={index} src={image.image1} className="h-10 w-72" height={50} width={100} alt=""/>
                ))}
            </div>
            <span className="pt-10 inline-block"><Button name={"Let's build something"} /></span>
            </div>

        </div>
      </SwiperSlide>
        <span className="absolute top-[20rem] left-3 z-10 cursor-pointer">
            <BsChevronLeft className="text-neutral-400 hover:text-neutral-700 duration-300 text-7xl" alt="" onClick={(()=>slide.slidePrev())}/>
        </span>
        <span className="absolute top-[20rem] right-3 z-10 cursor-pointer">
            <BsChevronRight className="text-neutral-400 hover:text-neutral-700 duration-300 text-7xl" onClick={(()=>{
          slide.slideNext()
        })}/>
        </span>
        
    </Swiper>
    </>
  );
};

export default Hero;
