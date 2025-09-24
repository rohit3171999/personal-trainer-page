/*
* Purpose: Visual showcase of training sessions, events, and social media highlights.
* */
export default function MediaGallery(){
    return (
        <section id="gallery" className="bg-white py-20 md:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                        In Action: See The Results
                    </h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                        A glimpse into our training sessions, client transformations, and community events.
                    </p>
                </div>

                {/* Image & Video Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {/* Image 1 */}
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=2070&auto=format&fit=crop" alt="Training session" className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-105" />
                    </div>

                    {/* Image 2 */}
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=2069&auto=format&fit=crop" alt="Client lifting weights" className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-105" />
                    </div>

                    {/* Featured Video - Spans 2 columns and 2 rows on medium screens and up */}
                    <div className="col-span-2 row-span-2 overflow-hidden rounded-lg shadow-lg">
                        <div className="relative h-0 pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src="https://www.youtube.com/embed/gey73xiS8F4" // Replace with your video embed URL
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>

                    {/* Image 3 */}
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" alt="Gym environment" className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-105" />
                    </div>

                    {/* Image 4 */}
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img src="https://simplifaster.com/wp-content/uploads/2025/06/Boxing-Insights-Lead.jpg" alt="Boxing training" className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-105" />
                    </div>

                    {/* Image 5 & 6 - to fill the grid */}
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img src="https://images.unsplash.com/photo-1550345332-09e3ac987658?q=80&w=1974&auto=format&fit=crop" alt="Kettlebell workout" className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-105" />
                    </div>
                    <div className="overflow-hidden rounded-lg shadow-md">
                        <img src="https://cdn-ilbapaf.nitrocdn.com/ZmMiMYiblsIwVjzNuftoXuWhTPTuQyyC/assets/images/optimized/rev-9e6f186/wod.guru/wp-content/uploads/2024/11/18Boxing-Equipment-List-to-Start-a-Boxing-Gym-1024x640.jpg" alt="Client progress" className="h-full w-full object-cover transition duration-300 ease-in-out hover:scale-105" />
                    </div>
                </div>
            </div>
        </section>
    );
}