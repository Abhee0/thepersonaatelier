// Slideshow.jsx
import "./Slideshow.css";
import img1 from "@/images/slideshow/img1.webp";
import img3 from "@/images/slideshow/img3.webp";
import img4 from "@/images/slideshow/img4.webp";
import n1 from "@/images/slideshow/N1.webp";
import n5 from "@/images/slideshow/N5.webp";
import n6 from "@/images/slideshow/N6.webp";
import n7 from "@/images/slideshow/N7.webp";
import n4 from "@/images/slideshow/N4.webp";

const images = [n1, n5, n6, n4, n7, img1, img3, img4];

export default function Slideshow() {
    return (
        <div className="slideshow-wrapper">
            <div className="slideshow-container">
                {images.map((_, i) => (
                    <input
                        key={i}
                        type="radio"
                        name="position"
                        defaultChecked={i === 3}
                    />
                ))}

                <main className="slideshow-carousel">
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className="slideshow-item"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    ))}
                </main>
            </div>
        </div>
    );
}