// import logo from './logo.svg';
import './App.css';
// import Message from './Message'
import {useState} from 'react'
import axios from 'axios'

// import './Employees.js'
// import Employees from './Employees.js';
// import { useEffect } from "react";
function App() {
  const [firstName,setFirstName]=useState("")
  const [lastName,setLastName]=useState("")
  const [email,setEmail]=useState("")
  const [phone,setPhone]=useState("")
  const [hireDate,setHireDate]=useState()
  const [jobTitle,setJobTitle]=useState("")
  const [salary,setSalary]=useState("")
  const [managerId,setManagerId]=useState("")
  const [cv,setEmployeeCV]=useState("")
const [message,setMessage]=useState("") 
  const handleSubmit =() =>{
   axios.post('http://localhost:8080/reactemployees',{
first_name:firstName,
last_name:lastName,
email:email,
phone:phone,
hire_date:hireDate,
job_title:jobTitle,
salary:salary,
manager_id:managerId,
cv:cv

   },{headers:{
'Authorization':'Basic bWljcm9jYXJlOjEyM2FBYmM='
   }}).then(
     resp =>

     {
      console.log(resp.status) 
      setMessage(resp.data)
      }
   )

    
    }


  return (
    <div className="container">
     
        <h1>Employee Management System</h1>
        <h1>{message}</h1>
        <form id="createemp" action="#" onSubmit={handleSubmit}>
            <input id="first_name" onChange={(e) => setFirstName(e.target.value)} type="text"  placeholder="First Name" className="form-control mb-4 col-4" required/> 
            <input id="last_name" onChange={(e) => setLastName(e.target.value)} type="text"  placeholder="Last Name" className="form-control mb-4 col-4" required/>
            <input id="email" type="text"  onChange={(e) => setEmail(e.target.value)} placeholder="Email" className="form-control mb-4 col-4" required/>
            <input id="phone" type="text"  onChange={(e) => setPhone(e.target.value)} placeholder="Phone" className="form-control mb-4 col-4" required/>
            <input id="hire_date" type="date"  onChange={(e) => setHireDate(e.target.value)} placeholder="Hire Date" className="form-control mb-4 col-4" required/>
            <input id="job_title" type="text"  onChange={(e) => setJobTitle(e.target.value)} placeholder="Job Title" className="form-control mb-4 col-4" required/>
            <input id="salary" type="text"  onChange={(e) => setSalary(e.target.value)} placeholder="Salary" className="form-control mb-4 col-4" required/>
            <input id="manager_id" type="text"  onChange={(e) => setManagerId(e.target.value)} placeholder="Manager Id" className="form-control mb-4 col-4" required/>
           
            <button type="submit" id="button" className="btn btn-info col-2">create</button>
        </form>
 
        <a href="/employees"> Back to Employee List</a>
    </div>
  );
}

export default App;