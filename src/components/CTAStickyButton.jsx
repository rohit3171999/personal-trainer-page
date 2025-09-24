/*
* Purpose: Persistent call-to-action to maximize conversions (appears while scrolling).
* */

export default function CTAStickyButton(){
    return (
        <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-sm shadow-[0_-4px_10px_-1px_rgba(0,0,0,0.05)] z-50 md:hidden">
            {/* The md:hidden class hides this button on medium screens and larger */}
            <a
                href="#booking"
                className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
                Book a Session Now
            </a>
        </div>
    );
}