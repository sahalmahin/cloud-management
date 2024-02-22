import About from "./About";
import AllInOne from "./AllInOne";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Support from "./Support";

const Home = () => {
    return (
        <div>
            <Hero/>
            <About/>
            <Support/>
            <AllInOne/>
            <Pricing/>
        </div>
    );
};

export default Home;