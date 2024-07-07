import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/logreg.css"
import axios from "axios"
const Register = () =>{
    const [formdata, setFormdata] = useState({
        'email': '',
        'password': ''
    })
    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(formdata)

        axios.post('http://localhost:5000/createuser', formdata)
        .then((result) => {
            if (result.data.msg === "Registered Successfully"){
                alert("Registerd Successfully")
                window.location.href = '/login'
            }
            else{
                alert(result.data.msg)
            }
        })
        .catch((err) => {
            console.log("Error: ", err)
        })
    }
    return(
        <div className="regi">
            {/* <h1>Registration Page</h1> */}
            <div className="container-fluid">
                <div className="form-container" onSubmit={handleSubmit}>
                    <form className="card p-4 register-form">
                        <h3 className="text-center">Register</h3>
                        <label className="lb">Name</label>
                        <input type="text" name="name" required className="ip" placeholder="  Enter your name" onChange={(e) => setFormdata({...formdata, name: e.target.value})}/>
                        <br />
                        <label className="lb">Email</label>
                        <input type="email" name="email" required className="ip" placeholder="  Enter your email" onChange={(e) => setFormdata({...formdata, email: e.target.value})}/>
                        <br />
                        <label className="lb">Password</label>
                        <input type="password" name="password" required className="ip" placeholder="  Enter the password" onChange={(e) => setFormdata({...formdata, password: e.target.value})}/>
                        <br />
                        <button className="btn btn-danger button" type="submit">Register</button>
                        {/* <p className="mt-2 mb-0 para">OR</p> */}
                        <p className="p-1 mt-3 redirect">Don't have an account?  <Link to="/login" className="mx-2 text-primary text-decoration-none">Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register