import Image from "next/image";

const Logos = () => {
    const images = [
        {image1 : "/logo4.svg"},
        {image1 : "/logo5.svg"},
        {image1 : "/logo6.svg"},
        {image1 : "/logo7.svg"},
        {image1 : "/logo8.svg"},
        {image1 : "/logo9.svg"},
        {image1 : "/logo10.svg"},
        {image1 : "/logo7.svg"},
        {image1 : "/logo8.svg"},
        {image1 : "/logo9.svg"},
        {image1 : "/logo4.svg"},
        {image1 : "/logo5.svg"},
        {image1 : "/logo6.svg"},
        {image1 : "/logo8.svg"},
        {image1 : "/logo9.svg"},

    ];
    return ( 
        <div className="bg-neutral-200">
            <div className="bg-[url('/10picon.png')] bg-no-repeat bg-right ">
                <div className="max-w-screen-xl mx-auto py-20 px-10 ">
                    <h3 className="text-gray-500 text-2xl font-medium">We partner with global enterprises and high-growth companies</h3>
                    <div className="grid grid-cols-5 gap-y-10 pt-24">
                    {images.map((image, index)=>(
                        <Image key={index} src={image.image1} width={100} height={100} alt=""/>
                    ))}
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Logos;