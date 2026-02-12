
import "./Slideshow.css";
import img1 from "@/images/slideshow/img1.png";
import img2 from "@/images/slideshow/img2.png";
import img3 from "@/images/slideshow/img3.png";
import img4 from "@/images/slideshow/img4.png";
import img5 from "@/images/slideshow/img5.png";

export default function Slideshow() {
    return (
        <div className="w-full bg-stone-50 py-10">
            <div className="slideshow-container max-w-full overflow-hidden">
                <input type="radio" name="position" defaultChecked />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />

                <main className="slideshow-carousel">
                    <div className="slideshow-item" style={{ backgroundImage: `url(${img1})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${img2})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${img3})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${img4})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${img5})` }}></div>
                </main>
            </div>
        </div>
    );
}
