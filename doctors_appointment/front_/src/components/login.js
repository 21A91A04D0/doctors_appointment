import { useState} from "react"

import axios from "axios"
import "../styles/logreg.css"
const Login = () =>{
    const [formdata, setFormdata] = useState({
        'email': '',
        'password': ''
    })
      
    const handleSubmit = (e) =>{
        e.preventDefault()

        axios.post('http://localhost:5000/getuser', formdata)
        .then((res) => {
            if(res.data.msg === "Login Successful"){
                alert("Login Successful")
                window.location.href = '/doclog'
            }
            else{
                alert(res.data.msg)
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }
    return(
        <div>
            <div className="loginpage">
              
                <div className="container-fluid">
                    <div className="form-container login" onSubmit={handleSubmit}>
                        <form className="card p-4 login-form">
                            <h3 className="text-center">Doctor's Login</h3>
                            <label className="lb">Email</label>
                            <input type="email" name="email" required className="ip" placeholder="  Enter your email" onChange={(e) => setFormdata({...formdata, email: e.target.value})}/>
                            <br />
                            <label className="lb">Password</label>
                            <input type="password" name="password" required className="ip" placeholder="  Enter the password" onChange={(e) => setFormdata({...formdata, password: e.target.value})}/>
                            <br />
                            <button className="btn btn-danger button" type="submit">Login</button>
                           
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login