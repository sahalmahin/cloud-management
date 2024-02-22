import { FaPhone, FaMicrochip } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { HiAcademicCap } from "react-icons/hi";
import { TiSupport } from "react-icons/ti";
import supportImg from '../assets/support.jpg';

const Support = () => {
    return (
        <div className="w-full h-screen mt-24">
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className="w-full h-full object-cover mix-blend-overlay" src={supportImg} alt="/" />
            </div >

            <div className="max-w-[1240px] mx-auto text-white relative">
                <div className="px-4 py-12">
                    <h2 className="pt-8 text-3xl text-center text-slate-300 uppercase">Support</h2>
                    <p className="py-6 text-center text-5xl font-bold">Find the right team</p>
                    <p className="py-4 text-center text-3xl text-slate-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum a cum at excepturi eveniet repudiandae minima harum repellendus magnam veniam?</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:gap-20 text-black">
                    <div className="bg-white shadow-2xl rounded-2xl">
                        <div className="p-8">
                            <FaPhone className="p-4 bg-indigo-600 text-white rounded-lg mt-[-4rem]" />
                            <h3>Sales</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi cum cupiditate. Laboriosam, deleniti ipsa.</p>
                        </div>
                        <div>
                            <p>Contact us <FaArrowRight className="ml-2" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Support;