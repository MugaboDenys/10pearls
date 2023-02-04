import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import arrowright from "../public/chevron-right.svg";
import arrowright1 from "../public/chevron-right1.svg";
import arrowleft from "../public/chevron-left.svg";
import arrowleft1 from "../public/chevron-left1.svg";
import { useState } from "react";
import Business1 from "./Business1";
import innovation from "../public/innovation.webp"
import modernization from "../public/modernization.webp"
import digitalization from "../public/digitalization.webp"
import augmentation from "../public/augmentation.webp"
import Business2 from "./Business2";

const Business = () => {
    

    const card = [
        {img : "/swipe1.png", description : "New Product Development"},
        {img : "/swipe2.png", description : "10Pearls University: Center for Continous & Advanced Testing"},
        {img : "/swipe3.png", description : "DevOps New Product Development"},
        {img : "/swipe4.png", description : "10Pearls Tips: Designing a Secure IoT Device"},
        {img : "/swipe5.png", description : "Center for Continous & Advanced Testing  Designing a Secure"},
    ]
    const [slide, setSlide] = useState();

  return (
    <div className="relative">
      <div className="max-w-screen-xl mx-auto py-24">
        <h3 className="text-gray-500 text-2xl font-medium">
          We partner with global enterprises and high-growth companies
        </h3>
        <div className="pt-10 px-10">
            <Swiper
                spaceBetween={30}
                slidesPerView={3}
                onSwiper={((slide)=>setSlide(slide))}
                loop ={true}
                >
                    {card.map((item, index)=>(
                <SwiperSlide key={index} className="group cursor-pointer">
                    <Image src={item.img} height={200} width={200} className="w-full" alt=""/>
                    <Link href={'/'} className="group-hover:underline">{item.description}</Link>
                </SwiperSlide>
                
                ))}                                                            
            </Swiper>
                <span className="absolute top-[20rem] left-20 z-10 cursor-pointer">
                    <Image src={arrowleft} alt="" className="w-20" onClick={(()=>slide.slidePrev())}/>
                </span>
                <span className="absolute top-[20rem] right-20 z-10 cursor-pointer">
                    <Image src={arrowright} alt="" className="w-20" onClick={(()=>{
                    slide.slideNext()
                    })}/>
                </span>
        </div>
        <div className="mt-20">
          <Business1 title={"Innovation"} text={"We design transformational digital products and experiences that drive real business value and customer impact—so you can create innovative products faster and at scale. "} img={innovation} />
          <Business2 title={"Modernization"} text={"Unleash the value of your existing technology by re-architecting it for the future. We help you modernize platforms and applications for high performance, better user experience, scale, and security. "} img={modernization} />
          <Business1 title={"Digitalization"} text={"Automate manual business processes and optimize the customer experience for better efficiency and engagement. We implement intelligent digital platforms and solutions that drive productivity."} img={digitalization} />
          <Business2 title={"Augmentation"} text={"Extend your agile development teams with a high-performance partner. We help you accelerate your digital journey through faster software delivery to outpace the competition. "} img={augmentation} />
        </div>
      </div>

    </div>
  );
};

export default Business;
