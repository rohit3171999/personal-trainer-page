import HeroSection from "./components/HeroSection.jsx";
import AboutTrainer from "./components/AboutTrainer.jsx";
import ServicesList from "./components/ServicesList.jsx";
import Testimonials from "./components/Testimonials.jsx";

export default function App(){
    return (
        <>
            <HeroSection/>
            <AboutTrainer/>
            <ServicesList/>
            <Testimonials/>
        </>
    );
}