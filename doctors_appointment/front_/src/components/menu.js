import { Link } from "react-router-dom"
import "../styles/menustyles.css"
import Contact from "./contact"
const Menu = () =>{
    return(
        <div>
            
                    <div>
                        <div className="navbar navbar-expand-lg">
                            <Link to = "/" className="li">Home</Link>
                            <Link to = "/about" className="li">About</Link>
                            <Link to = "/services" className="li">Services</Link>
                            <Link to = "/contact" className="li">Contact</Link>
                            <Link to = '/Login' className="li">< button className="btn btn-danger">Doctor's Login</button></Link>
                     

                        </div>
                            
                    </div>
                   
                    
    
             
           
            
        </div>
    )
}
export default Menu