import Navigation from "@/react-app/components/Navigation";
import { Link } from "react-router";
import profileImg from "@/images/profile.png";
import ReviewCarousel from "@/react-app/components/ReviewCarousel";
import Slideshow from "@/react-app/components/Slideshow";
import YouTubeShorts from "@/react-app/components/YouTubeShorts";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    document.title = "Leadership Presence Coach | Personal Branding | Mansi Nimbargi";

    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Mansi Nimbargi",
      "jobTitle": "Leadership Presence Coach & Image Consultant",
      "description": "Founder of Mansi's Image Consulting, specializing in style, confidence, and presence.",
      "url": "https://thepersonaatelier.com",
      "sameAs": ["https://wa.me/919518944051"]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main>

        {/* Hero Section */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 animate-fade-in">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-stone-900 mb-6 sm:mb-8 leading-tight">
              Three Powerful Programs.<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>One Goal: Make You<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>Unforgettable.
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-stone-600 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Confidence, credibility, presence, and authority for entrepreneurs and leaders.
            </p>
            <a
              href="https://wa.me/919518944051"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-stone-900 text-white text-sm sm:text-base tracking-wide hover:bg-stone-800 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              CHAT ON WHATSAPP TO JOIN A PROGRAM
            </a>
          </div>
        </section>

        {/* Brand Philosophy */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 mb-8 sm:mb-12 text-center">
              Presence Is Power
            </h2>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-stone-700 leading-relaxed">
              <p>
                Image is not clothes alone. It's the sum of how you carry yourself, how you communicate,
                and how others perceive your authority before you even speak.
              </p>
              <p>
                Authority is not a position—it's perception aligned with substance. When your inner identity
                matches your outer image, you don't just appear confident. You embody it.
              </p>
              <p className="text-lg sm:text-xl text-stone-900 font-medium pt-4">
                Inner Identity + Outer Image = Leadership Presence
              </p>
              <div className="text-center mt-8">
                <a
                  href="https://wa.me/919518944051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-amber-700 font-medium border-b-2 border-amber-700 hover:text-amber-800 hover:border-amber-800 transition-colors"
                >
                  Start Your Leadership Identity Upgrade →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* About the Founder */}
        <section className="py-16 sm:py-20 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div>
                <div className="aspect-[3/4] bg-stone-200 mb-6 overflow-hidden rounded-sm shadow-xl">
                  <img
                    src={profileImg}
                    alt="Mansi Nimbargi"
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col justify-center h-full">
                  <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                    I Am Mansi, <br />
                    <span className="text-amber-700 italic">Founder of Mansi's Image Consulting.</span>
                  </h2>

                  <div className="space-y-8 text-stone-700">
                    <p className="text-lg sm:text-xl font-light leading-relaxed tracking-wide border-l-4 border-amber-700/30 pl-6">
                      MY MISSION IS TO ASSIST INDIVIDUALS IN THEIR TRANSFORMATION FROM
                      <span className="font-semibold text-stone-900"> BASIC TO BESPOKE.</span>
                    </p>

                    <div className="relative p-8 bg-stone-50 border border-stone-100 shadow-sm">
                      <div className="absolute -top-4 -left-4 text-6xl text-amber-700/20 font-serif">"</div>
                      <p className="text-base sm:text-lg tracking-wide leading-relaxed font-medium text-stone-800">
                        SPECIALIZING IN <span className="text-amber-700">STYLE, CONFIDENCE, AND PRESENCE</span>,
                        I EMPOWER CLIENTS TO ENHANCE THEIR PERSONAL AND PROFESSIONAL IMAGE.
                        TRANSFORMED 3500+ STUDENTS & 40+ BUISNESS OWNERS AND INDIVIDUALS TO BE MORE CONFIDENT.
                      </p>
                      <div className="mt-6 flex items-center gap-2">
                        <div className="h-px flex-1 bg-stone-200"></div>
                        <span className="font-serif italic text-stone-400">Mansi Nimbargi</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                      {["Leadership Presence", "Image Management", "Soft Skills", "NLP & Mindset"].map((tag) => (
                        <span key={tag} className="px-4 py-1.5 bg-stone-100 text-stone-600 text-xs tracking-wider uppercase rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why This Approach Is Different */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 mb-8 sm:mb-12 text-center leading-tight">
              Why This Approach<br />Is Different
            </h2>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <div className="p-6 sm:p-8 bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-3 sm:mb-4">Image Management</h3>
                <p className="text-sm sm:text-base text-stone-700">Personal branding that goes beyond surface aesthetics to create lasting impressions.</p>
              </div>
              <div className="p-6 sm:p-8 bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-3 sm:mb-4">Soft Skills</h3>
                <p className="text-sm sm:text-base text-stone-700">Communication mastery that commands respect and builds genuine influence.</p>
              </div>
              <div className="p-6 sm:p-8 bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-3 sm:mb-4">NLP & Mindset</h3>
                <p className="text-sm sm:text-base text-stone-700">Neural reprogramming for confidence that comes from within, not from external validation.</p>
              </div>
              <div className="p-6 sm:p-8 bg-stone-50 border border-stone-200 hover:border-stone-300 transition-all duration-300 hover:shadow-lg">
                <h3 className="font-serif text-xl sm:text-2xl text-stone-900 mb-3 sm:mb-4">Meditation</h3>
                <p className="text-sm sm:text-base text-stone-700">Self-awareness practices that ground your presence in authentic power.</p>
              </div>
            </div>
            <p className="text-xl sm:text-2xl font-serif text-center text-stone-900">
              You don't just look confident. You become confident.
            </p>
          </div>
        </section>


        {/* Review Carousel */}
        <ReviewCarousel />

        {/* Image Slideshow */}
        <Slideshow />

        {/* YouTube Shorts */}
        <YouTubeShorts />

        {/* Who This Is For Section */}
        <section className="py-20 sm:py-28 px-4 sm:px-6 bg-stone-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-12 sm:mb-20 text-center leading-tight">
              Who This Is For
            </h2>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div className="bg-stone-800/50 p-8 sm:p-10 rounded-sm border border-stone-700/50">
                <h3 className="font-serif text-2xl sm:text-3xl mb-8 text-amber-500 text-center md:text-left">Who I Work With</h3>
                <ul className="space-y-6 text-stone-200">
                  {[
                    "New business owners & entrepreneurs",
                    "Coaches, consultants, trainers & facilitators",
                    "Professionals transitioning into leadership",
                    "Individuals who want authority, confidence & a powerful presence"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <span className="text-amber-500 mr-4 text-xl mt-0.5 transform group-hover:scale-110 transition-transform">✓</span>
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-10 text-lg text-white font-medium border-t border-stone-700 pt-8 italic leading-relaxed">
                  If you want to upgrade your image, elevate your identity, and strengthen your influence — you’re in the right place.
                </p>
              </div>

              <div className="bg-stone-800/50 p-8 sm:p-10 rounded-sm border border-stone-700/50">
                <h3 className="font-serif text-2xl sm:text-3xl mb-8 text-stone-400 text-center md:text-left">This Is Not For You If:</h3>
                <ul className="space-y-6 text-stone-400">
                  {[
                    "You're looking for quick fixes or surface-level tips",
                    "You want someone to tell you what to wear without understanding why",
                    "You're not ready to invest in your professional identity",
                    "You're looking for motivation rather than transformation",
                    "You prefer dabbling over committing to real change"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <span className="mr-4 text-xl mt-0.5 transform group-hover:rotate-90 transition-transform">×</span>
                      <span className="text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Overview CTA */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-stone-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl mb-6 sm:mb-8 leading-tight">
              Three Pathways to<br />Unforgettable Presence
            </h2>
            <p className="text-lg sm:text-xl text-stone-300 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
              From group coaching to personalized identity engineering, choose the program
              that aligns with where you are and where you're going.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 bg-white text-stone-900 text-sm sm:text-base tracking-wide hover:bg-stone-100 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                EXPLORE PROGRAMS
              </Link>
              <a
                href="https://wa.me/919518944051"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 sm:px-10 py-3 sm:py-4 border border-white text-white text-sm sm:text-base tracking-wide hover:bg-white hover:text-stone-900 transition-all duration-300"
              >
                BOOK YOUR TRANSFORMATION
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto text-center text-stone-600 text-xs sm:text-sm">
          <p className="mb-2">© 2026 The Persona Atelier by Mansi Nimbargi. All rights reserved.</p>
          <div className="flex justify-center gap-4 text-stone-500">
            <a href="mailto:Mansinimbargi15@gmail.com" className="hover:text-amber-700 transition-colors">Mansinimbargi15@gmail.com</a>
            <span>•</span>
            <a href="https://wa.me/919518944051" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">WhatsApp: +91 9518944051</a>
            <span>•</span>
            <a href="https://www.instagram.com/mansi.imagecoach.pro?igsh=MW82bHF6MHExYmRqcA==" target="_blank" rel="noopener noreferrer" className="hover:text-amber-700 transition-colors">Instagram</a>
          </div>
        </div>
      </footer>
    </div >
  );
}
