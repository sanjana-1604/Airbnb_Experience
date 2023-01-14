import img1 from '../img/img1.png'
import img2 from '../img/img2.png'
import img3 from '../img/img3.png'
import img4 from '../img/img4.png'
import img5 from '../img/img5.png'
import img6 from '../img/img6.png'
import img7 from '../img/img7.png'
import img8 from "../img/img8.png"
import img9 from '../img/img9.png'

export default function HeroComponet() {
    return (
        <div className="Hero">
            <div className="hero_image">
                <div className="image_1">
                    <img src={img1} alt="logo" />
                </div>
                <div className="image_2">
                    <img src={img2} alt="logo" />
                </div>
                <div className="image_3">
                    <img src={img3} alt="logo" />
                </div>
                <div className="image_4">
                    <img src={img4} alt="logo" />
                </div>
                <div className="image_5">
                    <img src={img5} alt="logo" />
                </div>
                <div className="image_6">
                    <img src={img6} alt="logo" />
                </div>
                <div className="image_7">
                    <img src={img7} alt="logo" />
                </div>
                <div className="image_8">
                    <img src={img8} alt="logo" />
                </div>
                <div className="image_9">
                    <img src={img9} alt="logo" />
                </div>
            </div>
            <h1 className="heading">Online Experiences</h1>
            <p className="paragraph">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </div>
    )
}