/*
* Purpose: Showcase trainer’s bio, certifications, achievements, and philosophy.
* */
export default function AboutTrainer(){
    return (
        <section id="about" className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Column */}
                    <div className="md:w-1/3 w-full flex justify-center">
                        <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                            <div className="absolute -inset-2 border-2 border-blue-500 rounded-full"></div>
                            <img
                                src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" // Replace with trainer's image
                                alt="Headshot of the personal trainer"
                                className="w-full h-full object-cover rounded-full shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="md:w-2/3 w-full text-center md:text-left">
                        <h2 className="text-sm font-bold uppercase text-blue-600 tracking-wider mb-2">
                            Meet Your Trainer
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                            Alex Johnson
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            With over 10 years of experience in the fitness industry, I'm dedicated to helping you
                            unlock your full potential. My philosophy is built on a foundation of consistency,
                            sustainability, and personalized programming. I don't believe in quick fixes, but in
                            building lifelong healthy habits.
                        </p>

                        <div className="border-t border-gray-200 pt-6">
                            <h4 className="text-lg font-semibold text-gray-800 mb-4">
                                Certifications & Achievements
                            </h4>
                            <ul className="list-disc list-inside space-y-2 text-gray-600">
                                <li>NASM Certified Personal Trainer (CPT)</li>
                                <li>Precision Nutrition Level 1 Coach (PN1)</li>
                                <li>Certified Strength and Conditioning Specialist (CSCS)</li>
                                <li>2021 Regional Bodybuilding Championship - 1st Place</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}