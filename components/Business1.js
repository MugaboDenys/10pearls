import Image from "next/image";
import Link from "next/link";

const Business1 = ({title, text, img}) => {
    return ( 
        <div className="relative flex items-center py-16">
            <div className="bg-neutral-100 py-10 space-y-8 pl-10 pr-32 w-[50rem]">
                <h2 className="text-3xl font-semibold text-neutral-600">{title}</h2>
                <p className="text-lg">{text}</p>
                <Link href={'/'} className="text-xs font-bold text-blue-800 block">learn more</Link>
            </div>
            <div className="absolute right-0 top-0">
                <Image alt="" src={img} className="w-[38rem]"  />
            </div>
        </div>
     );
}
 
export default Business1;