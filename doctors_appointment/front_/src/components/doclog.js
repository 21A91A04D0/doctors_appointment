import React, { useEffect, useState } from "react";
import axios from "axios";

const Doclog = () => {
  const [dat, setDat] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/appointget")
      .then((response) => {
        setDat(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);  
      });
  });

  const Approve =(data) =>{
    // document.getElementById('dani').innerHTML = "Approved"
    //e.preventDefault()
    console.log(data)
    axios.post("http://localhost:5000/approve",data)
    .then(res=>{
      console.log(res.data);
      axios.delete('http://localhost:5000/deleteapprove/'+data._id).then(
        alert("data deleted Successfully")
      )})
        .catch(err=>{console.log(err)})
    }
  const reject = (data) =>{
    console.log(data)
    axios.post("http://localhost:5000/reject",data)
    .then(res=>{
      // console.log(es.data)
      axios.delete('http://localhost:5000/deletereject/'+data._id).then(
        alert('data rejected')
      )
    })
    .catch(err=>{console.log(err)})
  }

  return (
    <div>
      <div>
        <h1 className="he">Appointment Requests</h1>
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <table className="table" border={1}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile Number</th>
                <th>Mail Id</th>
                <th colSpan={2}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {dat.map(({_id, name, mobile, email}, index) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{mobile}</td>
                  <td>{email}</td>
                  <td>
                    <button className="btn btn-success"  onClick={()=>Approve({_id, name, mobile, email})}>APPROVE</button>
                  </td>
                  <td>
                    <button className="btn btn-danger" onClick={()=>reject({_id, name, mobile, email})} >REJECT</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
  }
  export default Doclog;
