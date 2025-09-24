/*
*
* Purpose: Present services in a structured, scannable way.
* */
export default function ServicesList(){
    return (
        <section id="services" className="bg-gray-50 py-20 md:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        Services Offered
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        Choose the plan that's right for you and let's start your fitness journey together.
                    </p>
                </div>

                {/* Service Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* Service Card 1: 1-on-1 Training */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            1-on-1 Personal Training
                        </h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Get undivided attention with personalized workouts tailored to your specific goals, abilities, and schedule. Perfect for maximum accountability and results.
                        </p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-auto transition duration-300">
                            Book This Service
                        </button>
                    </div>

                    {/* Service Card 2: Online Coaching */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Online Coaching
                        </h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Flexible and effective. Receive custom workout and nutrition plans, weekly check-ins, and continuous support, all from the comfort of your own gym.
                        </p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-auto transition duration-300">
                            Learn More
                        </button>
                    </div>

                    {/* Service Card 3: Nutritional Guidance */}
                    <div className="bg-white rounded-xl shadow-lg p-8 flex flex-col transition duration-300 hover:shadow-2xl hover:-translate-y-2">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Nutritional Guidance
                        </h3>
                        <p className="text-gray-600 mb-6 flex-grow">
                            Fuel your body for success. Learn how to make sustainable dietary choices that complement your training and accelerate your progress.
                        </p>
                        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-auto transition duration-300">
                            Get a Diet Plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}