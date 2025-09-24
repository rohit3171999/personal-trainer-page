/*
* Purpose: Let potential clients book a session directly from the landing page.
* */export default function BookingForm(){
    return (
        <section id="booking" className="bg-gray-100 py-20 md:py-32">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                    {/* Form Title */}
                    <div className="text-center mb-10">
                        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
                            Book a Session
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            Take the first step towards a healthier you. Fill out the form below.
                        </p>
                    </div>

                    {/* Form */}
                    <form action="#" method="POST" className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                                <input type="text" name="name" id="name" placeholder="John Doe" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                                <input type="email" name="email" id="email" placeholder="you@example.com" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>

                            {/* Phone */}
                            <div className="md:col-span-2">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                                <input type="tel" name="phone" id="phone" placeholder="(123) 456-7890" className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>

                            {/* Preferred Service */}
                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">Preferred Service</label>
                                <select id="service" name="service" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                                    <option>1-on-1 Personal Training</option>
                                    <option>Online Coaching</option>
                                    <option>Nutritional Guidance</option>
                                    <option>Not Sure Yet</option>
                                </select>
                            </div>

                            {/* Preferred Date */}
                            <div>
                                <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
                                <input type="date" name="date" id="date" required className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg mt-4 transition duration-300 ease-in-out transform hover:scale-105">
                                Confirm Booking
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}