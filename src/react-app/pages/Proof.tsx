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
              Over 5 years of transforming how leaders show up, communicate, and command presence.
            </p>
          </div>
        </section>

        {/* Photo Gallery */}
        <section className="py-16 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-12 text-center">
              In Practice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-stone-200 aspect-[4/5] hover:shadow-2xl transition-all duration-500"
                >
                  <img
                    src={photo.url}
                    alt={photo.caption}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <p className="text-white text-sm tracking-wide">{photo.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certificates Section */}
        <section className="py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4 text-center">
              Certifications & Training
            </h2>
            <p className="text-stone-600 text-center mb-16 max-w-2xl mx-auto">
              Professional credentials that establish trust, authority, and legitimacy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="p-6 border-2 border-stone-100 bg-white hover:border-stone-200 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="aspect-[4/3] bg-stone-100 mb-6 overflow-hidden relative cursor-pointer">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-2xl text-stone-900 mb-2">{cert.title}</h3>
                  <p className="text-stone-600 mb-1">{cert.institution}</p>
                  <p className="text-stone-500 text-sm">{cert.year}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Who This Is For */}
        <section className="py-20 px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-16 text-center">
              Who This Is For
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-serif text-3xl text-stone-900 mb-6">This Is For You If:</h3>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-3 mt-1">✓</span>
                    <span>You're a new business owner or entrepreneur building authority in your field</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-3 mt-1">✓</span>
                    <span>You're a coach, consultant, or trainer who needs to command presence</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-3 mt-1">✓</span>
                    <span>You're transitioning into leadership and need to look the part</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-3 mt-1">✓</span>
                    <span>You value credibility over hype and structure over motivation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-amber-700 mr-3 mt-1">✓</span>
                    <span>You understand that identity transformation comes before income transformation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-3xl text-stone-900 mb-6">This Is Not For You If:</h3>
                <ul className="space-y-4 text-stone-700">
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">×</span>
                    <span>You're looking for quick fixes or surface-level tips</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">×</span>
                    <span>You want someone to tell you what to wear without understanding why</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">×</span>
                    <span>You're not ready to invest in your professional identity</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">×</span>
                    <span>You're looking for motivation rather than transformation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-stone-400 mr-3 mt-1">×</span>
                    <span>You prefer dabbling over committing to real change</span>
                  </li>
                </ul>
              </div>
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
