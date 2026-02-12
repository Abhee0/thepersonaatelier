
import { Quote } from "lucide-react";

interface Review {
    id: number;
    name: string;
    location: string;
    text: string;
}

const reviews: Review[] = [
    {
        id: 1,
        name: "Ritu Sharma",
        location: "Pune, India",
        text: "I had always been confused about what colors suited me and why some outfits made me feel dull. After my sessions with Mansi, everything became clear. Her color analysis and confidence-building guidance helped me feel more put together and self-assured. I now dress with clarity and receive genuine compliments."
    },
    {
        id: 2,
        name: "Ankit Verma",
        location: "Indore, India",
        text: "Mansi doesn’t just work on appearance, she works on mindset too. Her guidance improved my dressing sense, body language, and communication. I feel more confident while speaking to clients and colleagues. Very practical and effective sessions."
    },
    {
        id: 3,
        name: "Neha Kulkarni",
        location: "Mumbai, India",
        text: "I used to struggle with low confidence and overthinking my appearance. Mansi helped me understand my personality, colors, and strengths. Today, I feel calmer, more expressive, and confident in my everyday life. Highly recommend her if you want real change."
    },
    {
        id: 4,
        name: "Rahul Joshi",
        location: "Nagpur, India",
        text: "Mansi helped me align my professional image with my career goals. From wardrobe suggestions to behavior and communication tips, everything was well structured. I now feel more confident and polished at work."
    },
    {
        id: 5,
        name: "Pooja Mehta",
        location: "Ahmedabad, India",
        text: "My biggest takeaway from working with Mansi was clarity. Clarity about colors, dressing, and how to present myself confidently. Her sessions are insightful and very easy to apply in daily life."
    },
    {
        id: 6,
        name: "Sneha Patil",
        location: "Kolhapur, India",
        text: "Earlier, I lacked confidence and clarity in my appearance. Mansi helped me understand myself better and guided me step by step. I now feel comfortable, confident, and happy with the way I present myself."
    },
    {
        id: 7,
        name: "Karan Malhotra",
        location: "Delhi, India",
        text: "Mansi’s coaching helped me improve my executive presence. Small changes in dressing, posture, and communication created a big impact. I feel more confident during meetings and presentations."
    },
    {
        id: 8,
        name: "Aishwarya Deshpande",
        location: "Nashik, India",
        text: "The color analysis session was a complete eye-opener. I finally understand why certain colors work for me. My confidence has increased naturally, and dressing up is now enjoyable."
    },
    {
        id: 9,
        name: "Suresh Iyer",
        location: "Chennai, India",
        text: "Mansi’s approach is holistic and practical. She helped me work on body language, communication, and overall presence. The changes are subtle but very powerful."
    },
    {
        id: 10,
        name: "Priya Shah",
        location: "Surat, India",
        text: "I used to spend a lot of time confused about what to wear. Mansi simplified everything for me. Her guidance on colors and image helped me save time and feel confident every day."
    },
    {
        id: 11,
        name: "Rohan Kulkarni",
        location: "Bengaluru, India",
        text: "After working with Mansi, I noticed a clear improvement in how I speak and carry myself. My professional confidence has grown, and people respond to me more positively now."
    },
    {
        id: 12,
        name: "Nidhi Jain",
        location: "Jaipur, India",
        text: "Mansi helped me connect my inner confidence with my outer image. Her sessions are thoughtful, structured, and very empowering. I feel more aligned and confident now."
    },
    {
        id: 13,
        name: "Amit Chavan",
        location: "Aurangabad, India",
        text: "My communication and behavior improved significantly after Mansi’s sessions. I feel more confident while interacting with others and more aware of my presence."
    },
    {
        id: 14,
        name: "Swati Rao",
        location: "Hyderabad, India",
        text: "Mansi has a very warm and encouraging approach. Her color and image guidance helped me feel more confident and clear about my personal style."
    },
    {
        id: 15,
        name: "Vaibhav Singh",
        location: "Lucknow, India",
        text: "Mansi helped me understand how mindset, image, and communication are connected. Her coaching brought a positive shift in both my personal and professional life."
    },
    {
        id: 16,
        name: "Kavita Nair",
        location: "Kochi, India",
        text: "The sessions gave me emotional clarity and confidence. Mansi helped me become more expressive and comfortable in my own skin. A truly transformative experience."
    },
    {
        id: 17,
        name: "Manish Agarwal",
        location: "Bhopal, India",
        text: "I never realized how much image impacts confidence until I worked with Mansi. Her guidance helped me upgrade myself in a very practical and effortless way."
    },
    {
        id: 18,
        name: "Rina Banerjee",
        location: "Kolkata, India",
        text: "Mansi made me feel comfortable from the very first session. Her insights into image and behavior helped me present myself more confidently in all situations."
    },
    {
        id: 19,
        name: "Deepak Yadav",
        location: "Noida, India",
        text: "My dressing sense, communication, and overall attitude improved after her sessions. Mansi’s guidance is structured, clear, and result-oriented."
    },
    {
        id: 20,
        name: "Sonal Joshi",
        location: "Vadodara, India",
        text: "Mansi helped me understand my body type and colors properly. I now make better wardrobe choices and feel confident without overthinking."
    },
    {
        id: 21,
        name: "Arjun Mehta",
        location: "Udaipur, India",
        text: "Mansi helped me polish my personality and professional image. I now feel confident while dealing with clients and social interactions."
    },
    {
        id: 22,
        name: "Meenal Gokhale",
        location: "Thane, India",
        text: "My self-image has improved a lot. Mansi guided me to accept myself while also upgrading my appearance and confidence."
    },
    {
        id: 23,
        name: "Prasad Kamthe",
        location: "Satara, India",
        text: "Mansi’s sessions are practical and insightful. I now communicate with more clarity and confidence in both personal and professional settings."
    },
    {
        id: 24,
        name: "Shalini Verma",
        location: "Gurugram, India",
        text: "Mansi helped me align my inner confidence with my outer image. I feel more empowered and authentic in the way I present myself."
    },
    {
        id: 25,
        name: "Akash Patel",
        location: "Rajkot, India",
        text: "My professional presence improved significantly after working with Mansi. Her color and image guidance was extremely helpful."
    },
    {
        id: 26,
        name: "Riya Kapoor",
        location: "Dubai, UAE",
        text: "Mansi’s coaching helped me feel confident in a multicultural professional environment. Her image and communication guidance was very relevant and practical."
    },
    {
        id: 27,
        name: "Nilesh Shah",
        location: "London, UK",
        text: "Mansi understands image and confidence at a deeper level. Her sessions helped me improve my dressing, communication, and overall presence."
    },
    {
        id: 28,
        name: "Ananya Bose",
        location: "Toronto, Canada",
        text: "I gained a lot of clarity about my personal style and mindset. Mansi helped me show up confidently in both professional and social spaces."
    },
    {
        id: 29,
        name: "Kunal Malhotra",
        location: "Singapore",
        text: "Mansi’s guidance helped me enhance my executive presence. I now feel more confident and polished during important business interactions."
    },
    {
        id: 30,
        name: "Priti Desai",
        location: "Sydney, Australia",
        text: "Mansi helped me rediscover my confidence. Her color and image clarity made daily dressing effortless and enjoyable."
    }
];

export default function ReviewCarousel() {
    return (
        <section className="py-20 sm:py-28 bg-stone-50 overflow-hidden relative">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-stone-200/30 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 text-center relative z-10">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-6 tracking-tight">
                    Client Transformations
                </h2>
                <div className="w-24 h-0.5 bg-amber-700 mx-auto opacity-60"></div>
                <p className="mt-6 text-stone-600 max-w-2xl mx-auto text-lg leading-relaxed font-light italic">
                    Real stories of confidence, clarity, and personal branding success.
                </p>
            </div>

            <div className="relative w-full overflow-hidden pb-12">
                {/* First Marquee Row - Moving Left */}
                <div className="flex w-max animate-marquee hover:[animation-play-state:paused] mb-12">
                    {[...reviews.slice(0, 15), ...reviews.slice(0, 15)].map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="w-[340px] sm:w-[420px] mx-6 group"
                        >
                            <div className="bg-white p-8 sm:p-10 rounded-sm shadow-sm border border-stone-100 h-full flex flex-col relative transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-amber-100">
                                {/* Decorative Quote Mark */}
                                <div className="absolute top-6 right-6 text-amber-100 opacity-50 group-hover:text-amber-200 group-hover:opacity-100 transition-colors duration-300">
                                    <Quote size={48} fill="currentColor" strokeWidth={0} />
                                </div>

                                <div className="flex items-center gap-1 mb-6 text-amber-500/90 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="drop-shadow-sm">★</span>
                                    ))}
                                </div>

                                <p className="font-serif italic text-stone-700 text-lg sm:text-lg leading-relaxed mb-8 flex-grow relative z-10">
                                    "{review.text}"
                                </p>

                                <div className="mt-auto border-t border-stone-100 pt-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-serif text-lg italic border border-stone-200">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-serif text-lg text-stone-900 font-medium group-hover:text-amber-800 transition-colors duration-300">
                                                {review.name}
                                            </p>
                                            <p className="text-[10px] sm:text-xs text-stone-400 font-sans uppercase tracking-[0.2em] font-semibold mt-0.5">
                                                {review.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Second Marquee Row - Moving Right (Reverse) */}
                <div className="flex w-max animate-marquee-reverse hover:[animation-play-state:paused]">
                    {[...reviews.slice(15, 30), ...reviews.slice(15, 30)].map((review, index) => (
                        <div
                            key={`${review.id}-${index}`}
                            className="w-[340px] sm:w-[420px] mx-6 group"
                        >
                            <div className="bg-white p-8 sm:p-10 rounded-sm shadow-sm border border-stone-100 h-full flex flex-col relative transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-amber-100">
                                {/* Decorative Quote Mark */}
                                <div className="absolute top-6 right-6 text-amber-100 opacity-50 group-hover:text-amber-200 group-hover:opacity-100 transition-colors duration-300">
                                    <Quote size={48} fill="currentColor" strokeWidth={0} />
                                </div>

                                <div className="flex items-center gap-1 mb-6 text-amber-500/90 text-sm">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className="drop-shadow-sm">★</span>
                                    ))}
                                </div>

                                <p className="font-serif italic text-stone-700 text-lg sm:text-lg leading-relaxed mb-8 flex-grow relative z-10">
                                    "{review.text}"
                                </p>

                                <div className="mt-auto border-t border-stone-100 pt-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-400 font-serif text-lg italic border border-stone-200">
                                            {review.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-serif text-lg text-stone-900 font-medium group-hover:text-amber-800 transition-colors duration-300">
                                                {review.name}
                                            </p>
                                            <p className="text-[10px] sm:text-xs text-stone-400 font-sans uppercase tracking-[0.2em] font-semibold mt-0.5">
                                                {review.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
