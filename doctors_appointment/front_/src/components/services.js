import img1 from "../images/serv4.avif"
import img2 from "../images/serv5.avif"
import img3 from "../images/serv6.avif"
import img4 from "../images/serv7.avif"
import img5 from "../images/serv1.avif"
import img6 from "../images/serv2.avif"
import img7 from "../images/serv3.avif"
import "../styles/services.css"
const Services = () =>{
    return(
        <div>
            <div className="services">
                <h1 className="he">Services</h1>
                <div className="card card1">
                    <div className="card-body">
                        <p>Dental Care</p>
                        <div><img  src={img1} alt="Img1" className="img"/></div>
                    </div>
                </div>
                <div className="card card1">
                    <div className="card-body">
                        <p>Eye Care</p>
                        <div><img  src={img2} alt="Img1" className="img"/></div>
                    </div>
                </div>
                <div className="card card1">
                    <div className="card-body">
                        <p>Skin Care</p>
                        <div><img  src={img3} alt="Img1" className="img"/></div>
                    </div>
                </div>
                <div className="card card1">
                    <div className="card-body">
                        <p>Medicine</p>
                        <div><img  src={img4} alt="Img1" className="img"/></div>
                    </div>
                </div>
                <div className="card card1">
                    <div className="card-body">
                        <p>Advanced Technology</p>
                        <div><img  src={img5} alt="Img1" className="img"/></div>
                    </div>
                </div>
                <div className="card card1">
                    <div className="card-body">
                        <p>Hygienic</p>
                        <div><img  src={img6} alt="Img1" className="img"/></div>
                    </div>
                </div>
                <div className="card card1">
                    <div className="card-body">
                        <p>Advanced Treatment</p>
                        <div><img  src={img7} alt="Img1" className="img"/></div>
                    </div>
                </div>
            </div>
            

        </div>
    )
}
export default Services