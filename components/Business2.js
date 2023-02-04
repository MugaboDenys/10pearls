import Image from "next/image";
import Link from "next/link";

const Business2 = ({title, text, img}) => {
    return ( 
        <div className="relative flex justify-end items-center py-16">
            <div className="bg-neutral-100 py-10 space-y-8 pr-10 pl-36 w-[50rem] ">
                <h2 className="text-3xl font-semibold text-neutral-600">{title}</h2>
                <p className="text-lg">{text}</p>
                <Link href={'/'} className="text-xs font-bold text-blue-800 block">learn more</Link>
            </div>
            <div className="absolute left-0 top-0">
                <Image alt="" src={img} className="w-[38rem]"  />
            </div>
        </div>
     );
}
 
export default Business2;