
import "./Slideshow.css";
import img1 from "@/images/slideshow/img1.png";
import img3 from "@/images/slideshow/img3.png";
import img4 from "@/images/slideshow/img4.png";
import n1 from "@/images/slideshow/N1.png";
import n5 from "@/images/slideshow/N5.png";
import n6 from "@/images/slideshow/N6.png";
import n7 from "@/images/slideshow/N7.png";
import n4 from "@/images/slideshow/N4.png";

export default function Slideshow() {
    return (
        <div className="w-full bg-stone-50 py-10">
            <div className="slideshow-container max-w-full overflow-hidden">
                <input type="radio" name="position" defaultChecked />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />
                <input type="radio" name="position" />

                <main className="slideshow-carousel">
                    <div className="slideshow-item" style={{ backgroundImage: `url(${n1})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${n5})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${n6})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${n4})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${n7})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${img1})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${img3})` }}></div>
                    <div className="slideshow-item" style={{ backgroundImage: `url(${img4})` }}></div>
                </main>
            </div>
        </div>
    );
}
