import "../styles/about.css";
import img1 from "../images/hom.avif"
import img2 from "../images/d1.avif"
import img3 from "../images/d2.avif"
import img4 from "../images/d3.avif"
const About = () => {
  return (
    <div>
      
        <div className="about">
            <h1 className="he">About</h1>
            <p>Our Doctors</p>
            
            <div className="card cd">
                <div className="card-body">
                    <p>Dental Care</p>
                    <div><img src ={img1}  className="img"/></div>
                    <div>
                        <p>Doctor:Sruthi <br/> <sub>M.B.B.S</sub></p>
                        <p>Specailist in<br/> Dental Care</p>
                    </div>
                    
                
                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>Eye Care</p>
                    <div><img src ={img2}  className="img"/></div>
                    <p>Doctor:Raj Kalyan <sub>M.B.B.S</sub></p>
                    <p>Specailist in <br/> Eye Care </p>

                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>Skincare</p>
                    <div><img src ={img3}  className="img"/></div>
                    <p>Doctor:Lilly Jasmine<sub> M.B.B.S</sub ></p>
                    <p>Specailist in<br/>  Skin Care</p>

                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>General</p>
                    <div><img src ={img4}  className="img"/></div>
                    <p>Doctor:Chidambaram <br/> <sub>M.B.B.S</sub></p>
                    <p>Specailist in <br/>  General Medicine</p>

                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>Dental Care</p>
                    <div><img src ={img1}  className="img"/></div>
                    <div>
                        <p>Doctor:Sruthi <br/> <sub>M.B.B.S</sub></p>
                        <p>Specailist in<br/> Dental Care</p>
                    </div>
                    
                
                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>Eye Care</p>
                    <div><img src ={img2}  className="img"/></div>
                    <p>Doctor:Raj Kalyan <sub>M.B.B.S</sub></p>
                    <p>Specailist in <br/> Eye Care </p>

                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>Skincare</p>
                    <div><img src ={img3}  className="img"/></div>
                    <p>Doctor:Lilly Jasmine<sub> M.B.B.S</sub ></p>
                    <p>Specailist in<br/>  Skin Care</p>

                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>General</p>
                    <div><img src ={img4}  className="img"/></div>
                    <p>Doctor:Chidambaram <br/> <sub>M.B.B.S</sub></p>
                    <p>Specailist in <br/>  General Medicine</p>

                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>Skincare</p>
                    <div><img src ={img3}  className="img"/></div>
                    <p>Doctor:Lilly Jasmine<sub> M.B.B.S</sub ></p>
                    <p>Specailist in<br/>  Skin Care</p>

                </div>
            </div>
            <div className="card cd">
                <div className="card-body">
                    <p>General</p>
                    <div><img src ={img4}  className="img"/></div>
                    <p>Doctor:Chidambaram <br/> <sub>M.B.B.S</sub></p>
                    <p>Specailist in <br/>  General Medicine</p>

                </div>
            </div>
            

        </div>

    </div>
  );
};

export default About;
