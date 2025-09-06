import React from 'react';

// SVG Icon Components for better readability
const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.956a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.366 2.446a1 1 0 00-.364 1.118l1.287 3.956c.3.921-.755 1.688-1.54 1.118l-3.366-2.446a1 1 0 00-1.175 0l-3.366 2.446c-.784.57-1.838-.197-1.539-1.118l1.287-3.956a1 1 0 00-.364-1.118L2.07 9.383c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
    </svg>
);

function App() {
    return (
        <div className="bg-gray-50 text-gray-800 font-sans">

            {/* Inject CSS directly here */}
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

        body {
          font-family: 'Poppins', sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }

        .hero-bg {
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
          url('https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
        }

        .service-card {
          background: white;
          padding: 1.5rem;
          border-radius: 0.5rem;
          text-align: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-0.5rem);
        }

        .testimonial-card {
          background: #f7fafc;
          padding: 1.5rem;
          border-radius: 0.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          border-left: 4px solid #22c55e;
        }

        .form-label {
          display: block;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          margin-bottom: 0.25rem;
        }

        .form-input {
          display: block;
          width: 100%;
          padding: 0.5rem 1rem;
          border: 1px solid #d1d5db;
          border-radius: 0.375rem;
          box-shadow: 0 1px 2px rgba(0,0,0,0.05);
          outline: none;
        }

        .form-input:focus {
          border-color: #22c55e;
          ring: 2px #22c55e;
        }

        .sticky-cta {
          position: fixed;
          bottom: 1.25rem;
          right: 1.25rem;
          background: #22c55e;
          color: white;
          font-weight: bold;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          z-index: 50;
        }

        .sticky-cta:hover {
          transform: scale(1.1);
        }
      `}</style>

            {/* Header & Hero Section */}
            <header className="hero-bg text-white shadow-lg">
                <div className="container mx-auto px-6 py-24 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                        Transform Your Body & Mind with Personalized Coaching
                    </h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">
                        Unlock your full potential with expert guidance, tailored workout plans, and dedicated support.
                    </p>
                    <a
                        href="#booking"
                        className="mt-8 inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105"
                    >
                        Get Started
                    </a>
                </div>
            </header>

            <main>
                {/* About Section */}
                <section id="about" className="py-20 bg-white">
                    <div className="container mx-auto px-6 text-center">
                        <h2 className="text-3xl font-bold mb-4">About Me: Your Fitness Partner</h2>
                        <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocKZBlqQfFc0yaJiwLkY1ynAa_ZxVW-3DfvwwWH9vFGcxgNsnKgk=s360-c-no"
                            alt="Rohit Sharma, Personal Trainer"
                            className="w-40 h-40 rounded-full mx-auto mb-6 shadow-xl border-4 border-white"
                        />
                        <p className="max-w-3xl mx-auto text-gray-600 leading-relaxed">
                            Hi, I'm Rohit! With over 10 years of experience as a certified personal trainer (ACE, NASM), my philosophy is simple: fitness should be empowering, not intimidating. I specialize in functional strength training and holistic nutrition to help clients build sustainable habits for a lifetime of health. My biggest achievement is seeing my clients not just reach their goals, but discover a newfound confidence.
                        </p>
                    </div>
                </section>

                {/* Services */}
                <section id="services" className="py-20">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="service-card">
                                <h3 className="text-xl font-bold mb-2">1:1 Personal Training</h3>
                                <p>Fully personalized sessions focused on your specific goals, form, and progress.</p>
                            </div>
                            <div className="service-card">
                                <h3 className="text-xl font-bold mb-2">Group Classes</h3>
                                <p>High-energy HIIT, Yoga, and Strength classes. Fun, motivating, and community-driven.</p>
                            </div>
                            <div className="service-card">
                                <h3 className="text-xl font-bold mb-2">Online Coaching</h3>
                                <p>Train from anywhere in the world with virtual sessions and customized digital plans.</p>
                            </div>
                            <div className="service-card">
                                <h3 className="text-xl font-bold mb-2">Nutrition Guidance</h3>
                                <p>Learn to fuel your body correctly with meal plans and lifestyle advice.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section id="testimonials" className="py-20 bg-white">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-center mb-12">What My Clients Say</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="testimonial-card">
                                <div className="flex mb-2">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p className="text-gray-600 italic">"Working with Rohit changed everything. I'm stronger, more confident, and finally hit my weight loss goal!"</p>
                                <p className="mt-4 font-bold">- Priya S.</p>
                            </div>
                            <div className="testimonial-card">
                                <div className="flex mb-2">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p className="text-gray-600 italic">"The online coaching is incredibly convenient and just as effective as in-person sessions. Highly recommended!"</p>
                                <p className="mt-4 font-bold">- Arjun K.</p>
                            </div>
                            <div className="testimonial-card">
                                <div className="flex mb-2">
                                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                                </div>
                                <p className="text-gray-600 italic">"The group classes are amazing! The energy is infectious and I always leave feeling accomplished."</p>
                                <p className="mt-4 font-bold">- Anjali M.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Booking Form */}
                <section id="booking" className="py-20">
                    <div className="container mx-auto px-6">
                        <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-2xl">
                            <h2 className="text-3xl font-bold text-center mb-8">Book Your Session</h2>
                            <form action="#" method="POST">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="form-label">Full Name</label>
                                        <input type="text" id="name" name="name" className="form-input" required />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="form-label">Email Address</label>
                                        <input type="email" id="email" name="email" className="form-input" required />
                                    </div>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="phone" className="form-label">Phone Number</label>
                                    <input type="tel" id="phone" name="phone" className="form-input" />
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="service" className="form-label">Preferred Service</label>
                                    <select id="service" name="service" className="form-input">
                                        <option>1:1 Personal Training</option>
                                        <option>Group Classes</option>
                                        <option>Online Coaching</option>
                                        <option>Nutrition Guidance</option>
                                    </select>
                                </div>
                                <div className="mt-6">
                                    <label htmlFor="datetime" className="form-label">Preferred Date & Time</label>
                                    <input type="datetime-local" id="datetime" name="datetime" className="form-input" />
                                </div>
                                <div className="mt-8 text-center">
                                    <button type="submit" className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105">
                                        Request Booking
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* Sticky CTA */}
                <a href="#booking" className="sticky-cta">Book Now</a>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-10">
                <div className="container mx-auto px-6 text-center">
                    <p>&copy; 2025 Rohit Sharma Fitness. All Rights Reserved.</p>
                    <div className="mt-4 flex justify-center space-x-6">
                        <a href="#" className="hover:text-green-400">Instagram</a>
                        <a href="#" className="hover:text-green-400">Facebook</a>
                        <a href="#" className="hover:text-green-400">Twitter</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;
