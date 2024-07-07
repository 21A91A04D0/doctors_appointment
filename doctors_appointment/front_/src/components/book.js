import { useState, useEffect } from "react"
import "../styles/logreg.css"
import axios from "axios"
const Book = () =>{
    const [formdat, setFormdata] = useState({
        name:"",
        email:"",
        mobile:""
    })
      
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formdat)
        axios.post("http://localhost:5000/appointdoc", {formdat})
        .then((res)=> alert(res.data.msg))
        // window.location.reload()
        
      
    }
    return(
        <div className="book">
            <div className="container-fluid">
                <div className="form-container" onSubmit={handleSubmit}>
                    <form className="card p-4 register-form">
                        <h3 className="text-center">Book Your Appointment</h3>
                        <label className="lb">Name</label>
                        <input type="text" name="name" required className="ip" placeholder="  Enter your name" onChange={(e) => setFormdata({...formdat, name: e.target.value})}/>
                        <br />
                        <label className="lb">Email</label>
                        <input type="email" name="email" required className="ip" placeholder="  Enter your email" onChange={(e) => setFormdata({...formdat, email: e.target.value})}/>
                        <br />
                        <label className="lb">Mobile Number</label>
                        <input type="tel" name="mobile" required className="ip" placeholder="  Enter mobile number" onChange={(e) => setFormdata({...formdat, mobile: e.target.value})}/>
                        <br />
                        <button className="btn btn-danger button" type="submit">book your appointment!</button> 
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Book