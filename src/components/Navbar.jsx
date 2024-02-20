import { MdMenu } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {

    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="w-screen h-[80px] bg-zinc-200 drop-shadow-lg fixed">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl sm:text-4xl font-bold mr-4">Brand.</h1>
                    <ul className="hidden md:flex">
                        <li>Home</li>
                        <li>About</li>
                        <li>Pricing</li>
                        <li>Platform</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4">Sign In</button>
                    <button className="px-5 py-3">Sign Up</button>
                </div>
                <div className="md:hidden" onClick={handleClick}>
                    {!nav ? <MdMenu className="w-8" /> : <AiOutlineClose className="w-8" />}
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className="border-b-2 border-zinc-300 w-full">Home</li>
                <li className="border-b-2 border-zinc-300 w-full">About</li>
                <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
                <li className="border-b-2 border-zinc-300 w-full">Platform</li>
                <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
                <div className="flex flex-col my-4">
                    <button className="bg-transparent text-indigo-600 px-5 py-3 mb-4">Sign In</button>
                    <button className="px-5 py-3">Sign Up</button>
                </div>
            </ul>
        </div>
    );
};

export default Navbar;