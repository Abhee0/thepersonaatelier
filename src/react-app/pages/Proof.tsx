import Navigation from "@/react-app/components/Navigation";
import { Link } from "react-router";
import cer1 from "@/images/cer_1.png";
import cer2 from "@/images/cer_2.png";
import impCert from "@/images/Mansi Muke Certificate IMP (1)-1.png";
import cer3 from "@/images/cer_3.png";
import iqpCert from "@/images/Mansi Muke Certificate IQP-1.png";
import { useEffect } from "react";

// Gallery Images
import pro2_1 from "@/images/pro_2_1.png";
import pro4 from "@/images/pro_4.png";
import pro5 from "@/images/pro_5.png";
import pro6 from "@/images/pro_6.png";
import pro7 from "@/images/pro_7.png";
import pro2_2 from "@/images/pro_2_2.png";
import pro2_3 from "@/images/pro_2_3.png";

// Client Stories
import c1 from "@/images/cilentpic/c1.webp";
import c2 from "@/images/cilentpic/c2.webp";
import c3 from "@/images/cilentpic/c3.webp";
import c4 from "@/images/cilentpic/c4.webp";
import c5 from "@/images/cilentpic/c5.webp";
import c6 from "@/images/cilentpic/c6.webp";
import c7 from "@/images/cilentpic/c7.webp";
import c8 from "@/images/cilentpic/c8.webp";
import c9 from "@/images/cilentpic/c9.webp";
import c10 from "@/images/cilentpic/c10.webp";
import c11 from "@/images/cilentpic/c11.webp";
import n2 from "@/images/slideshow/N2.webp";
import n3 from "@/images/slideshow/N3.webp";

export default function ProofPage() {
  useEffect(() => {
    document.title = "Client Success & Certificates | The Persona Atelier";

    const schema = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      "mainEntity": {
        "@type": "Person",
        "name": "Mansi Nimbargi",
        "interactionStatistic": [
          {
            "@type": "InteractionCounter",
            "interactionType": "https://schema.org/WriteAction",
            "userInteractionCount": "42"
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const photos = [
    {
      url: pro2_1,
      caption: "Leadership presence coaching session"
    },
    {
      url: pro4,
      caption: "Professional image consultation"
    },
    {
      url: pro5,
      caption: "Corporate workshop facilitation"
    },
    {
      url: pro6,
      caption: "Executive coaching"
    },
    {
      url: pro7,
      caption: "Personal styling session"
    },
    {
      url: pro2_2,
      caption: "Professional transformation"
    },
    {
      url: pro2_3,
      caption: "Group Mentoring"
    }
  ];

  const certificates = [
    {
      title: "NLP Practitioner",
      institution: "International NLP Association",
      year: "2019",
      image: cer1
    },
    {
      title: "Leadership Coaching",
      institution: "International Coaching Federation",
      year: "2020",
      image: cer2
    },
    {
      title: "Image Consulting",
      institution: "Association of Image Consultants International",
      year: "2021",
      image: impCert
    },
    {
      title: "Guided Meditation Facilitator",
      institution: "Mindfulness Institute",
      year: "2022",
      image: cer3
    },
    {
      title: "Image Quest Practitioner",
      institution: "Image Management Qualification",
      year: "2023",
      image: iqpCert
    }
  ];

  return (
    <div className="min-h-screen bg-stone-50">
      <Navigation />

      <main>

        {/* Hero */}
        <section className="pt-32 pb-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h1 className="font-serif text-6xl md:text-7xl text-stone-900 mb-6">
              Credentials & Experience
            </h1>
            <p className="text-xl text-stone-600 max-w-3xl mx-auto">
              Over 6 years of transforming how leaders show up, communicate, Transformed 3500+ students & 40 + individuals.
            </p>
          </div>
        </section>

        {/* Introduction Section */}
        <section className="py-20 sm:py-28 px-6 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 sm:mb-20">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-stone-900 mb-8 leading-tight">
                "I Don’t Just Transform How You Look.<br />
                <span className="text-amber-800">I Transform How You Are Perceived."</span>
              </h2>
              <p className="text-lg sm:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto mb-8 font-light">
                I am a <strong>Leadership Presence Coach, Image Management Expert, Soft Skills Trainer, NLP Practitioner, and Guided Meditation Facilitator</strong> — helping ambitious individuals elevate their image, identity, confidence, and influence.
              </p>
              <p className="text-lg sm:text-xl text-stone-700 leading-relaxed max-w-3xl mx-auto font-light">
                My work sits at the intersection of <strong>personal branding, psychology, communication, and visual authority</strong>. I don’t believe in surface-level makeovers or temporary confidence boosts. I build long-term presence, credibility, and personal power.
              </p>
            </div>

            <div className="bg-stone-50 p-8 md:p-12 border-l-4 border-amber-800 shadow-sm my-16 mx-4 sm:mx-0">
              <p className="font-serif text-2xl sm:text-3xl text-stone-800 italic text-center leading-relaxed">
                "Over the past 6+ years, I have consulted and transformed 40+ clients, trained professionals, entrepreneurs, corporates, and institutions — helping them be seen, heard, respected, and remembered."
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-20 sm:mb-28">
              <div>
                <h3 className="font-serif text-3xl text-stone-900 mb-6">My Philosophy: Presence Is Power</h3>
                <p className="text-stone-700 mb-6 text-lg">Your image is not just about clothes or grooming. It is about:</p>
                <ul className="space-y-4">
                  {["How confidently you carry yourself", "How clearly you communicate", "How others perceive your authority", "How aligned you feel with the person you want to become"].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-amber-700 mr-3 text-xl leading-none">•</span>
                      <span className="text-stone-700 text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-stone-100 p-8 md:p-10 rounded-lg h-full flex items-center">
                <p className="text-xl text-stone-800 font-medium italic leading-relaxed">
                  "When your inner identity and outer image are aligned, you stop trying to prove yourself — and start commanding respect naturally."
                </p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="font-serif text-3xl sm:text-4xl text-stone-900 mb-12">Why My Approach Is Different</h3>
              <div className="grid sm:grid-cols-2 gap-6 text-left">
                {[
                  { title: "Image Management & Personal Branding", desc: "To elevate how you look and present yourself" },
                  { title: "Soft Skills & Communication Training", desc: "To strengthen how you speak and influence" },
                  { title: "NLP & Mindset Work", desc: "To eliminate self-doubt and confidence blocks" },
                  { title: "Guided Meditation & Self-Awareness", desc: "To build calm, clarity, and emotional control" }
                ].map((item, i) => (
                  <div key={i} className="bg-stone-50 p-8 border border-stone-200 hover:border-amber-700/50 transition-colors shadow-sm hover:shadow-md">
                    <h4 className="font-serif text-xl text-stone-900 mb-3">{item.title}</h4>
                    <p className="text-stone-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-12 text-2xl text-stone-900 font-serif">
                This means you don’t just <span className="italic text-amber-800">look</span> confident — you <span className="italic text-amber-800">become</span> confident.
              </p>
            </div>

          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 sm:py-24 px-6 bg-stone-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-16 text-center">
              In Practice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white shadow-lg aspect-[4/5] hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <div className="p-8 w-full">
                      <div className="h-0.5 w-12 bg-amber-500 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100"></div>
                      <p className="text-white text-lg font-serif tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-100">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Stories */}
        <section className="py-16 sm:py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-16 text-center">
              Client Stories
            </h2>
            <div className="masonry-grid sm:masonry-2-col lg:masonry-3-col gap-8">
              {[c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, n2, n3].map((img, index) => (
                <div key={index} className="break-inside-avoid mb-8 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group">
                  <img
                    src={img}
                    alt={`Client story ${index + 1}`}
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            {/* Fallback grid for browsers without masonry support */}
            <style>{`
              @supports not (grid-template-rows: masonry) {
                .masonry-grid {
                  display: columns;
                  column-gap: 2rem;
                }
                .sm\\:masonry-2-col {
                  column-count: 2;
                }
                .lg\\:masonry-3-col {
                  column-count: 3;
                }
                 /* Mobile fallback to single column */
                @media (max-width: 640px) {
                  .masonry-grid {
                     column-count: 1;
                  }
                }
              }
            `}</style>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20 sm:py-28 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4 text-center">
              Certifications & Training
            </h2>
            <p className="text-stone-600 text-center mb-16 max-w-2xl mx-auto text-lg">
              Professional credentials that establish trust, authority, and legitimacy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-8 border border-stone-100 bg-stone-50 hover:bg-white hover:border-stone-200 hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] bg-white mb-6 overflow-hidden relative border border-stone-100 p-4 flex items-center justify-center">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-2 group-hover:text-amber-800 transition-colors">{cert.title}</h3>
                  <p className="text-stone-600 mb-1 font-medium">{cert.institution}</p>
                  <p className="text-stone-400 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 sm:py-28 px-6 bg-stone-900 text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl mb-20 text-center">
              Who This Is For
            </h2>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <div className="bg-stone-800/50 p-10 rounded-sm border border-stone-700/50">
                <h3 className="font-serif text-3xl mb-8 text-amber-500">Who I Work With</h3>
                <ul className="space-y-6 text-stone-200">
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-4 text-xl mt-0.5">✓</span>
                    <span className="text-lg">New business owners & entrepreneurs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-4 text-xl mt-0.5">✓</span>
                    <span className="text-lg">Coaches, consultants, trainers & facilitators</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-4 text-xl mt-0.5">✓</span>
                    <span className="text-lg">Professionals transitioning into leadership</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-500 mr-4 text-xl mt-0.5">✓</span>
                    <span className="text-lg">Individuals who want authority, confidence & a powerful presence</span>
                  </li>
                </ul>
                <p className="mt-10 text-lg text-white font-medium border-t border-stone-700 pt-8 italic leading-relaxed">
                  If you want to upgrade your image, elevate your identity, and strengthen your influence — you’re in the right place.
                </p>
              </div>
              <div className="bg-stone-800/50 p-10 rounded-sm border border-stone-700/50">
                <h3 className="font-serif text-3xl mb-8 text-stone-400">This Is Not For You If:</h3>
                <ul className="space-y-6 text-stone-400">
                  <li className="flex items-start">
                    <span className="mr-4 text-xl mt-0.5">×</span>
                    <span className="text-lg">You're looking for quick fixes or surface-level tips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 text-xl mt-0.5">×</span>
                    <span className="text-lg">You want someone to tell you what to wear without understanding why</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 text-xl mt-0.5">×</span>
                    <span className="text-lg">You're not ready to invest in your professional identity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 text-xl mt-0.5">×</span>
                    <span className="text-lg">You're looking for motivation rather than transformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-4 text-xl mt-0.5">×</span>
                    <span className="text-lg">You prefer dabbling over committing to real change</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* My Promise */}
        <section className="py-20 sm:py-28 px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8">My Promise to You</h2>
            <p className="text-xl text-stone-700 mb-16 max-w-3xl mx-auto leading-relaxed">
              I don’t offer generic advice or cookie-cutter transformations.<br />
              I offer <strong>strategic, personalized, high-impact transformation</strong> — so you can:
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                "Walk into rooms with confidence",
                "Speak with clarity and authority",
                "Look premium, polished & powerful",
                "Stop doubting yourself",
                "Start being seen as a leader"
              ].map((item, i, arr) => (
                <div
                  key={i}
                  className={`p-8 border-2 border-stone-100 hover:border-amber-700/30 hover:bg-stone-50 transition-all duration-300 flex items-center justify-center min-h-[160px] group ${i === arr.length - 1 ? 'sm:col-span-2 lg:col-span-4 bg-stone-50 border-stone-200' : ''}`}
                >
                  <p className={`font-serif text-xl ${i === arr.length - 1 ? 'text-amber-800 text-2xl' : 'text-stone-800'} group-hover:scale-105 transition-transform duration-300`}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 px-6 bg-stone-900 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight">
              Ready to Upgrade<br />Your Image, Identity<br />& Influence?
            </h2>
            <p className="text-xl text-stone-300 mb-12 max-w-2xl mx-auto">
              Choose the program that aligns with where you are and where you're going.
              Or reach out directly to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/programs"
                className="inline-block px-10 py-4 bg-white text-stone-900 text-base tracking-wide hover:bg-stone-100 transition-colors"
              >
                CHOOSE YOUR PROGRAM
              </Link>
              <a
                href="https://wa.me/919518944051"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 border-2 border-white text-white text-base tracking-wide hover:bg-white hover:text-stone-900 transition-colors"
              >
                CHAT ON WHATSAPP
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-12 px-6 bg-stone-100 border-t border-stone-200">
        <div className="max-w-7xl mx-auto text-center text-stone-600 text-sm">
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
