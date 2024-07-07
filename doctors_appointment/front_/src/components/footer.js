import { Link } from "react-router-dom"
import "../styles/menustyles.css"

const Footer = () =>{
    return(
        <div>
            <div  style={{
                    minHeight: "200px",
                    color: "green",
                    backgroundColor:"rgb(137,174,179)"
                }}>
                
                <h1>Doctor appointment in Online</h1>
                <dl>
                    <dt>Services</dt>
                    <dd>-Appointments</dd>
                  
                </dl>
                <Link to = "/contact " className="li"><h4>Contact Us</h4></Link>
            </div>
        </div>
    )
}
export default Footer