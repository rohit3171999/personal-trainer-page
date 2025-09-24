/*
* Purpose: Encourage engagement on trainer’s social media platforms.
* */
export default function SocialLinks(){
    return (
        <section id="social" className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-8">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">
                    Follow Me
                </h2>
                <div className="flex justify-center items-center space-x-4 md:space-x-6">

                    {/* Instagram */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-pink-500 hover:text-white transition-colors duration-300" aria-label="Instagram">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12.315 2c-4.04.002-4.55.018-6.148.09-1.598.072-2.693.345-3.64.72-1.02.405-1.884 1.01-2.73 1.855C-.705 5.51.1 6.375.504 7.395c-.375.947-.648 2.042-.72 3.64C-.286 12.632-.3 13.142-.3 17.18c0 4.04.015 4.55.09 6.148.072 1.598.345 2.693.72 3.64.405 1.02 1.01 1.884 1.855 2.73.845.845 1.71.645 2.73.504.947-.375 2.042-.648 3.64-.72 1.597-.072 2.108-.09 6.148-.09s4.55.018 6.148.09c1.598.072 2.693.345 3.64.72 1.02.405 1.884 1.01 2.73 1.855.845.845 1.645 1.71.504 2.73.375-.947.648-2.042.72-3.64.072-1.598.09-2.108.09-6.148s-.018-4.55-.09-6.148c-.072-1.598-.345-2.693-.72-3.64-.405-1.02-1.01-1.884-1.855-2.73-.845-.845-1.71-.645-2.73-.504-.947.375-2.042.648-3.64.72C16.868 2.018 16.355 2 12.315 2zM8.27 17.18c0-2.16 1.75-3.91 3.91-3.91s3.91 1.75 3.91 3.91-1.75 3.91-3.91 3.91-3.91-1.75-3.91-3.91zm9.1-8.4a1.42 1.42 0 100-2.84 1.42 1.42 0 000 2.84z" clipRule="evenodd" />
                        </svg>
                    </a>

                    {/* Facebook */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors duration-300" aria-label="Facebook">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                    </a>

                    {/* X (Twitter) */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-800 hover:text-white transition-colors duration-300" aria-label="X (formerly Twitter)">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                        </svg>
                    </a>

                    {/* LinkedIn */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors duration-300" aria-label="LinkedIn">
                        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                    </a>

                </div>
            </div>
        </section>
    );
}