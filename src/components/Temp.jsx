/*
* Purpose: First impression; introduces trainer with strong headline, image/video, and call-to-action.
* */
export default function HeroSection() {
    return (
        <section className="relative h-screen flex items-center justify-center text-center text-white">
            {/* Background Image/Video */}
            <div className="absolute top-0 left-0 w-full h-full">
                <img
                    src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop" // Replace with your image
                    alt="Personal trainer assisting a client"
                    className="w-full h-full object-cover"
                />
                {/* Overlay for text readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4 animate-fade-in-down">
                    Transform Your Body, Redefine Your Life
                </h1>
                <p className="text-lg md:text-2xl mb-8 animate-fade-in-up">
                    Achieve your fitness goals with personalized training plans and expert guidance.
                </p>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 animate-fade-in"
                >
                    Get Started Today
                </button>
            </div>
        </section>
    );
}