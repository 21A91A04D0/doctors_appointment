import { Link } from "react-router-dom";
import "../styles/home.css";
import About from "./about";
import Services from "./services";
import Footer from "./footer";
const Home = () => {
  return (
    <div>
      <div className="container-fluid homepage">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-lg-6 text-center">
            <h1>Welcome to Our Website</h1>
            <p>Book your appointment now!</p>
            <Link to="/book" className="btn btn-primary ">
              Book Your Appointment
            </Link>
          </div>
        </div>
      </div>
    <div>
        <About/>
    </div>
    <div>
        <Services/>
    </div>
    <div>
        <Footer/>
    </div>
    </div>
  );
};

export default Home;
