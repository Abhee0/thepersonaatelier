
export default function YouTubeShorts() {
    const shorts = [
        "U3wtbCysrxY",
        "-hBzY0zajM8",
        "4iDti_7W9Ew",
        "ntStpfDzlCA"
    ];

    return (
        <section className="py-16 sm:py-24 px-4 sm:px-6 bg-stone-50">
            <div className="max-w-7xl mx-auto">
                <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl text-stone-900 mb-12 sm:mb-16 text-center">
                    Watch & Transform
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {shorts.map((id, index) => (
                        <div key={index} className="aspect-[9/16] rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${id}?playlist=${id}&loop=1&rel=0&controls=0&showinfo=0`}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full object-cover"
                            ></iframe>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="http://www.youtube.com/@mansinimbargi"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-amber-700 font-medium border-b-2 border-amber-700 hover:text-amber-800 hover:border-amber-800 transition-colors tracking-wide"
                    >
                        VIEW MORE ON YOUTUBE →
                    </a>
                </div>
            </div>
        </section>
    );
}
