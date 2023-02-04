import Link from "next/link";

const Button = ({name}) => {
    return ( 
        <Link href={'/'} className='border border-black px-4 py-2 hover:bg-blue-800 hover:text-white duration-500'>{name}</Link>

     );
}
 
export default Button;