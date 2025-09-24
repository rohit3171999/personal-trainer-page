import HeroSection from "./components/HeroSection.jsx";
import AboutTrainer from "./components/AboutTrainer.jsx";
import ServicesList from "./components/ServicesList.jsx";
import Testimonials from "./components/Testimonials.jsx";
import BookingForm from "./components/BookingForm.jsx";
import CTAStickyButton from "./components/CTAStickyButton.jsx";
import MediaGallery from "./components/MediaGallery.jsx";

export default function App(){
    return (
        <>
            <HeroSection/>
            <AboutTrainer/>
            <ServicesList/>
            <Testimonials/>
            <BookingForm/>
            <CTAStickyButton/>
            <MediaGallery/>
        </>
    );
}