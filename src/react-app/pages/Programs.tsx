import Navigation from "@/react-app/components/Navigation";
import { useEffect } from "react";

export default function ProgramsPage() {
  useEffect(() => {
    document.title = "Image Consulting & Leadership Programs | The Persona Atelier";

    const schema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Leadership Presence & Image Consulting",
      "description": "Premium coaching for leadership identity, personal branding, and image management.",
      "brand": {
        "@type": "Brand",
        "name": "The Persona Atelier"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "42"
      }
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Who is this coaching for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "These programs are designed for entrepreneurs, senior executives, and professionals who want to elevate their authority, confidence, and leadership presence."
          }
        },
        {
          "@type": "Question",
          "name": "Is this just image consulting?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. While we cover visual image, our core focus is internal identity shift. We use NLP and leadership psychology to align your inner mindset with your outer presentation."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Mansi Nimbargi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can chat directly via WhatsApp at +91 9518944051 or email Mansinimbargi15@gmail.com to discuss your goals."
          }
        }
      ]
    };

    const script1 = document.createElement('script');
    script1.type = 'application/ld+json';
    script1.text = JSON.stringify(schema);
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.type = 'application/ld+json';
    script2.text = JSON.stringify(faqSchema);
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  const programs = [
    {
      name: "The Authority Accelerator",
      price: "₹5,499",
      type: "Group Coaching",
      description: "Build professional presence through DIY grooming, styling fundamentals, and communication mastery.",
      features: [
        "DIY grooming essentials",
        "Dressing & styling fundamentals",
        "Communication skills training",
        "First impressions mastery",
        "Professional presence techniques",
        "Group coaching sessions",
        "Practical exercises & feedback"
      ],
      paymentLink: "#",
      whatsappLink: "https://wa.me/919518944051?text=I'm%20interested%20in%20The%20Authority%20Accelerator%20program",
      ideal: "New entrepreneurs and professionals seeking foundational presence skills"
    },
    {
      name: "The Persona Signature Program",
      price: "₹15,000",
      type: "Personal Color & Styling",
      description: "Persona engineering through personalized color analysis, body structure assessment, and signature look creation.",
      features: [
        "Personal color analysis",
        "Body structure assessment",
        "Signature look development",
        "Visual authority building",
        "Wardrobe optimization",
        "Personal brand alignment",
        "One-on-one consultations"
      ],
      paymentLink: "#",
      whatsappLink: "https://wa.me/919518944051?text=I'm%20interested%20in%20The%20Persona%20Signature%20Program",
      ideal: "Leaders and professionals creating their distinctive identity",
      featured: true
    },
    {
      name: "The Leadership Identity Program",
      price: "₹25,000",
      type: "Leadership Presence",
      description: "Complete leadership transformation through personality assessment, identity clarity, and executive presence mastery.",
      features: [
        "Comprehensive personality assessment",
        "Identity clarity sessions",
        "Communication & authority training",
        "Leadership confidence development",
        "Executive presence coaching",
        "NLP techniques integration",
        "Personalized transformation roadmap"
      ],
      paymentLink: "#",
      whatsappLink: "https://wa.me/919518944051?text=I'm%20interested%20in%20The%20Leadership%20Identity%20Program",
      ideal: "Senior professionals and executives stepping into leadership roles"
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 animate-fade-in">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-stone-900 mb-4 sm:mb-6 leading-tight">
              Choose Your Path to<br className="hidden sm:inline" />
              <span className="sm:hidden"> </span>Unforgettable Presence
            </h1>
            <p className="text-lg sm:text-xl text-stone-600 max-w-3xl mx-auto px-4">
              Three programs designed for different stages of your leadership journey.
              Each one transforms how you show up, communicate, and command authority.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
              {programs.map((program, index) => (
                <div
                  key={index}
                  className={`bg-white border-2 transition-all duration-300 hover:shadow-2xl ${program.featured
                    ? 'border-amber-700 lg:-mt-8 lg:mb-8'
                    : 'border-stone-200 hover:border-stone-300'
                    }`}
                >
                  {program.featured && (
                    <div className="bg-amber-700 text-white text-center py-2 text-sm tracking-wide font-medium">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="p-6 sm:p-8 lg:p-10">
                    {/* Header */}
                    <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-stone-200">
                      <h3 className="font-serif text-2xl sm:text-3xl text-stone-900 mb-2">
                        {program.name}
                      </h3>
                      <p className="text-stone-500 text-xs sm:text-sm tracking-wide mb-4">
                        {program.type}
                      </p>
                      <div className="flex items-baseline gap-2 mb-4">
                        <span className="font-serif text-4xl sm:text-5xl text-stone-900">
                          {program.price}
                        </span>
                      </div>
                      <p className="text-sm sm:text-base text-stone-700 leading-relaxed">
                        {program.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="mb-6 sm:mb-8">
                      <h4 className="text-xs sm:text-sm tracking-wide text-stone-500 mb-3 sm:mb-4 font-medium">
                        WHAT'S INCLUDED
                      </h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm sm:text-base text-stone-700">
                            <svg
                              className="w-4 h-4 sm:w-5 sm:h-5 text-amber-700 mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Ideal For */}
                    <div className="mb-6 sm:mb-8 p-3 sm:p-4 bg-stone-50 border border-stone-200">
                      <p className="text-xs sm:text-sm text-stone-600">
                        <span className="font-medium text-stone-900">Ideal for: </span>
                        {program.ideal}
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-3">
                      <a
                        href={program.paymentLink}
                        className={`block w-full py-3 sm:py-4 text-center text-sm sm:text-base tracking-wide transition-all duration-300 hover:scale-105 ${program.featured
                          ? 'bg-amber-700 text-white hover:bg-amber-800'
                          : 'bg-stone-900 text-white hover:bg-stone-800'
                          }`}
                      >
                        PAY & ENROLL NOW
                      </a>
                      <a
                        href={program.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-3 sm:py-4 text-center border-2 border-stone-900 text-stone-900 text-sm sm:text-base tracking-wide hover:bg-stone-900 hover:text-white transition-all duration-300"
                      >
                        CHAT ON WHATSAPP
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Comparison Note */}
        <section className="py-12 sm:py-16 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-4 sm:mb-6">
              Not Sure Which Program Is Right?
            </h2>
            <p className="text-base sm:text-lg text-stone-700 mb-6 sm:mb-8 px-4">
              Each program builds on foundational principles of presence, identity, and authority.
              The difference is in depth, personalization, and time commitment.
              Start where you are—every program delivers transformation.
            </p>
            <a
              href="https://wa.me/919518944051?text=I'd%20like%20to%20discuss%20which%20program%20is%20right%20for%20me"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 sm:px-10 py-3 sm:py-4 border-2 border-stone-900 text-stone-900 text-sm sm:text-base tracking-wide hover:bg-stone-900 hover:text-white transition-all duration-300 hover:scale-105"
            >
              SPEAK WITH US ON WHATSAPP
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-stone-100/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-8 sm:mb-12 text-center">
              Common Questions
            </h2>
            <div className="grid gap-6">
              <div className="p-6 bg-white border border-stone-200">
                <h3 className="font-medium text-stone-900 text-lg mb-2">Who is this coaching for?</h3>
                <p className="text-stone-600">These programs are designed for entrepreneurs, senior executives, and professionals who want to elevate their authority, confidence, and leadership presence.</p>
              </div>
              <div className="p-6 bg-white border border-stone-200">
                <h3 className="font-medium text-stone-900 text-lg mb-2">Is this just about image styling?</h3>
                <p className="text-stone-600">No. While we cover visual image, our core focus is internal identity shift. We use NLP and leadership psychology to align your inner mindset with your outer presentation.</p>
              </div>
              <div className="p-6 bg-white border border-stone-200">
                <h3 className="font-medium text-stone-900 text-lg mb-2">How can I contact Mansi Nimbargi directly?</h3>
                <p className="text-stone-600">You can chat directly via WhatsApp at +91 9518944051 or email Mansinimbargi15@gmail.com to discuss your specific needs.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Philosophy */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-6 sm:mb-8 text-center leading-tight">
              This Is an Investment in<br />Who You Become
            </h2>
            <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-stone-700 leading-relaxed">
              <p>
                These programs are not expenses. They are investments in your professional identity,
                your earning potential, and your legacy.
              </p>
              <p>
                When you show up with confidence, clarity, and authority, opportunities follow.
                Clients trust you faster. Partnerships materialize easier. Your income reflects your value.
              </p>
              <p className="text-lg sm:text-xl text-stone-900 font-medium">
                The question is not whether you can afford this. The question is whether you can afford not to.
              </p>
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
          </div>
        </div>
      </footer>
    </div>
  );
}
