import Navigation from "@/react-app/components/Navigation";
import { useEffect, useState } from "react";
import m1 from "@/images/models/m1.png";
import m2 from "@/images/models/m2.png";
import m3 from "@/images/models/m3.png";
import m4 from "@/images/models/m4.png";
import m5 from "@/images/models/m5.png";
import ProgramModal from "@/react-app/components/ProgramModal";

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
      type: "Group Coaching (3-Day Masterclass)",
      image: m1,
      description: "A powerful group coaching masterclass for new business owners, coaches, consultants, trainers, facilitators, and professionals transitioning into entrepreneurship — designed to help you look confident, feel credible, and present yourself with authority. This program teaches you how to DIY your grooming, makeup, dressing, communication, and professional behavior — so you never feel confused, dependent, or underconfident again.",
      features: [
        "DIY Body Analysis Guide — understand your body shape & proportions",
        "How to Style Yourself — outfits that suit your role, body & goals",
        "Color Selection Guide — what colors elevate your skin tone & presence",
        "Prints, Patterns & Fabrics Guide — what enhances vs distracts",
        "Accessories Shape Selection — bags, belts, watches, shoes & more",
        "Complete E-Workbook — your lifelong personal styling & presence manual",
        "DIY Makeup Basics — everyday professional makeup made simple",
        "Business & Tea Etiquette Training — confident social & professional conduct",
        "How to Build a Powerful First Impression — instantly earn respect & trust",
        "How to Start Conversations Confidently — break the ice with ease",
        "Show Up as a Credible Professional — speak, act & present with authority"
      ],
      painPoints: [
        "Feel confused about how to dress or present yourself",
        "Depend on others for grooming, makeup or styling",
        "Feel awkward while meeting clients or new people",
        "Struggle to start conversations confidently",
        "Be overlooked, underestimated or taken lightly"
      ],
      paymentLink: "https://razorpay.me/@mansiimageconsultant",
      whatsappLink: "https://wa.me/919518944051?text=I'm%20interested%20in%20The%20Authority%20Accelerator%20program",
      ideal: "New entrepreneurs and professionals seeking foundational presence skills"
    },
    {
      name: "The Persona Signature Program",
      price: "₹15,000",
      type: "Personal Color & Styling",
      image: m2,
      description: "Turn heads. Elevate your persona. Become visually unforgettable. A premium 4-session transformation program designed to align your colors, body structure, wardrobe, grooming, and overall presence — so your appearance reflects confidence, credibility, and high-value identity.",
      features: [
        "Personal Color Analysis & Curated Palette — colors that enhance your glow & authority",
        "Body Shape Assessment & Styling Strategy — silhouettes that flatter & empower",
        "Wardrobe Audit & Upgrade — aligned with your profession & desired presence",
        "Grooming & Makeup Guidance — for office, parties & special occasions",
        "One-Time Personal Shopping Assistance — curated & purposeful buys",
        "Handpicked Accessories Guide — customized for your business & profession",
        "Turning-Heads Image Upgrade — look confident, premium & magnetic",
        "Confidence Boost & Styling Support — for the next 2 months"
      ],
      outcomes: [
        "People notice you the moment you enter a room",
        "You look polished, premium & naturally confident",
        "Your visual persona supports your authority & credibility",
        "You feel proud, empowered & aligned in your appearance"
      ],
      painPoints: [
        "Wear colors that dull your glow",
        "Feel invisible or overlooked in social or professional spaces",
        "Feel confused about what suits your body or profession",
        "Second-guess your appearance before stepping out"
      ],
      paymentLink: "https://razorpay.me/@mansiimageconsultant",
      whatsappLink: "https://wa.me/919518944051?text=I'm%20interested%20in%20The%20Persona%20Signature%20Program",
      ideal: "Leaders and professionals creating their distinctive identity",
      featured: true
    },
    {
      name: "The Leadership Identity Program",
      price: "₹25,000",
      type: "Leadership Presence",
      image: m3,
      description: "Become the leader, entrepreneur, or authority figure you aspire to be. A structured personality assessment & leadership presence program that helps you define your identity, sharpen your communication, build confidence, and step fully into leadership or entrepreneurship.",
      features: [
        "Personality & leadership style assessment",
        "Identity & personal positioning clarity",
        "Confidence, mindset & authority building",
        "Communication, influence & presence training",
        "Vision setting for leadership or entrepreneurial roles"
      ],
      outcomes: [
        "You speak with confidence & command respect",
        "People see you as a leader — even before you claim the title",
        "You feel aligned with the person you want to become"
      ],
      painPoints: [
        "Doubt your potential or second-guess yourself",
        "Feel stuck in an old identity or comfort zone",
        "Feel invisible in leadership spaces",
        "Struggle to express authority or influence"
      ],
      paymentLink: "https://razorpay.me/@mansiimageconsultant",
      whatsappLink: "https://wa.me/919518944051?text=I'm%20interested%20in%20The%20Leadership%20Identity%20Program",
      ideal: "Senior professionals and executives stepping into leadership roles"
    },
    {
      name: "The Virtual Signature Transformation",
      price: "₹7,500",
      type: "Complete Image + Shopping Alignment Experience",
      image: m5,
      description: "100% Online. 100% Personalized. 100% Transformational. This is not basic consultation. This is a complete digital image reinvention — from clarity to confident execution.",
      features: [
        "Deep Image Assessment (Live Zoom – 3 Sessions) — Color, Body, Face, Style & Brand",
        "Personalized Digital Style Dossier (PDF) — Your unique blueprint for colors, fabrics & style",
        "Virtual Wardrobe Refinement — Keeping what works & creating 15–20 ready outfits",
        "Personalized Shopping Blueprint — Exact categories, budget strategy & investment clarity",
        "1 Live Virtual Shopping Session (60 mins) — Guided shopping for clarity & confidence",
        "30 Days Post-Transformation Support — Outfit approvals, styling guidance & confidence check-ins"
      ],
      outcomes: [
        "Clear understanding of what suits you",
        "Faster dressing with intention",
        "Strong personal brand presence",
        "Elevated everyday style",
        "Smart, structured shopping",
        "Zero guesswork"
      ],
      painPoints: [
        "Wasting money on wrong colors",
        "Buying clothes that stay unused",
        "Emotional shopping",
        "Style confusion",
        "Looking washed out in photos",
        "Feeling “nothing suits me”"
      ],
      paymentLink: "https://razorpay.me/@mansiimageconsultant",
      whatsappLink: "https://wa.me/919518944051?text=I'm%20interested%20in%20The%20Virtual%20Signature%20Transformation",
      ideal: "Professionals worldwide seeking a complete remote image transformation"
    }
  ];

  // State for modal
  const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <ProgramModal
        isOpen={!!selectedProgram}
        onClose={() => setSelectedProgram(null)}
        program={selectedProgram}
      />

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

        {/* Programs List */}
        <section className="py-12 sm:py-20 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto space-y-24 sm:space-y-32">
            {programs.map((program, index) => (
              <div
                key={index}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-start`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="aspect-[3/4] sticky top-24">
                    <div className="absolute inset-0 bg-stone-200 transform translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4"></div>
                    <img
                      src={program.image}
                      alt={program.name}
                      className="relative w-full h-full object-cover shadow-lg"
                    />
                    {program.featured && (
                      <div className="absolute top-4 left-4 bg-amber-700 text-white px-4 py-1 text-sm tracking-widest font-medium uppercase shadow-md">
                        Most Popular
                      </div>
                    )}
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2">
                  <div className="space-y-6">
                    <div>
                      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 mb-2 leading-tight">
                        {program.name}
                      </h2>
                      <p className="text-amber-700 text-sm sm:text-base tracking-widest font-medium uppercase mb-4">
                        {program.type}
                      </p>
                      <div className="text-3xl sm:text-4xl font-serif text-stone-900">
                        {program.price}
                      </div>
                    </div>

                    <p className="text-lg text-stone-700 leading-relaxed border-l-2 border-amber-700 pl-4">
                      {program.description}
                    </p>

                    {/* Features */}
                    <div className="bg-stone-50 p-6 sm:p-8 rounded-sm border border-stone-100">
                      <h4 className="text-sm font-bold text-stone-900 tracking-wide uppercase mb-6 flex items-center gap-2">
                        <span className="w-8 h-[1px] bg-stone-900"></span>
                        What's Included
                      </h4>
                      <ul className="space-y-3">
                        {program.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-stone-700">
                            <span className="text-amber-700 mr-3 mt-1">✔</span>
                            <span className="text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Outcomes */}
                    {/* @ts-ignore */}
                    {program.outcomes && (
                      <div className="bg-amber-50/50 p-6 sm:p-8 rounded-sm border border-amber-100">
                        <h4 className="text-sm font-bold text-amber-900 tracking-wide uppercase mb-6 flex items-center gap-2">
                          <span className="w-8 h-[1px] bg-amber-900"></span>
                          Your Transformation
                        </h4>
                        <ul className="space-y-3">
                          {/* @ts-ignore */}
                          {program.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start text-stone-800">
                              <span className="text-amber-600 mr-3 text-lg">✦</span>
                              <span className="text-sm sm:text-base font-medium">{outcome}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Pain Points */}
                    {/* @ts-ignore */}
                    {program.painPoints && (
                      <div>
                        <h4 className="text-sm font-bold text-stone-500 tracking-wide uppercase mb-4 mt-8">
                          After this, you will NO LONGER:
                        </h4>
                        <ul className="space-y-2">
                          {/* @ts-ignore */}
                          {program.painPoints.map((point, idx) => (
                            <li key={idx} className="flex items-start text-stone-600">
                              <span className="text-red-400 mr-3 text-xs mt-1">❌</span>
                              <span className="text-sm sm:text-base">{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Ideal For */}
                    <div className="pt-6 border-t border-stone-200">
                      <p className="text-stone-600 italic">
                        <span className="font-medium text-stone-900 not-italic uppercase text-xs tracking-wide block mb-1">Ideal For</span>
                        {program.ideal}
                      </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <button
                        onClick={() => setSelectedProgram(program)}
                        className="flex-1 bg-stone-900 text-white py-4 px-8 text-center text-sm tracking-widest hover:bg-stone-800 transition-colors uppercase font-medium"
                      >
                        Enroll Now
                      </button>
                      <a
                        href={program.whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-stone-300 text-stone-900 py-4 px-8 text-center text-sm tracking-widest hover:bg-stone-50 transition-colors uppercase font-medium flex items-center justify-center gap-2"
                      >
                        <span>WhatsApp Chat</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-white overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="aspect-[3/4] bg-stone-100 relative z-10 overflow-hidden transform md:rotate-3 transition-transform hover:rotate-0 duration-700">
                  <img
                    src={m4}
                    alt="Confident professional"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-10 -left-10 w-full h-full border-2 border-amber-700/20 z-0 hidden md:block"></div>
              </div>

              <div className="order-1 md:order-2">
                <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-6 sm:mb-8 leading-tight">
                  This Is an Investment in<br />
                  <span className="text-amber-700 italic">Who You Become.</span>
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
                  <div className="pt-4 border-l-4 border-amber-700 pl-6 my-6">
                    <p className="text-xl sm:text-2xl text-stone-900 font-serif italic">
                      "The question is not whether you can afford this. The question is whether you can afford not to."
                    </p>
                  </div>
                </div>
              </div>
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
