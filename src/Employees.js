import './App.css';
import {useState} from 'react'
import axios from 'axios'
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';

function Employees() {

  const navigate =useNavigate()
  const [employees,setEmployees]=useState([])
  //const [mystyle,setMystyle] = useState({})

  useEffect(()=>{
   axios.get('http://localhost:8080/reactemployees',{headers:{
'Authorization':'Basic bWljcm9jYXJlOjEyM2FBYmM='
   }}).then(
     resp =>
     {
      console.log(resp.data) 
      setEmployees(resp.data)}
   )


    },[])

    const deleteemployee=(event)=>{
        event.preventDefault();
        let url='http://localhost:8080/reactdeleteemployee/'.concat(event.currentTarget.getAttribute("value"));
        console.log(url)
        axios.get(url,{headers:{
            'Authorization':'Basic bWljcm9jYXJlOjEyM2FBYmM='}}).then(resp1 =>{
                axios.get('http://localhost:8080/reactemployees',{headers:{
'Authorization':'Basic bWljcm9jYXJlOjEyM2FBYmM='
   }}).then(
     resp =>

     {
      console.log(resp.data) 
      setEmployees(resp.data)}
   )}

            )
    }


    const downloadfile=(event)=>{
      
      //event.preventDefault();
      let url=`http://localhost:8080/reactdownload/`.concat(event.currentTarget.getAttribute("value"));
      console.log(url);
    
      axios.get(url,{headers:{
          'Authorization':'Basic bWljcm9jYXJlOjEyM2FBYmM=',
          'Content-Type':'multipart/form-data'}})
          .then(resp1 =>{
              axios.get('http://localhost:8080/reactemployees',{headers:{
'Authorization':'Basic bWljcm9jYXJlOjEyM2FBYmM='

 }})
 .then(
   resp =>

   {
    console.log(resp.data) 
    
    setEmployees(resp.request.responseUrl)
   setEmployees(resp.data)
  }
 )}

          )
  }

// const downloadfile=(event)=>{

// }

    // const display = (e)=>{
    //   if(e.currentTarget.getAttribute("value1")===true){
    //     setMystyle({
    //       display:'block'
    //     })
    //     console.log('im in block');
    //   }
      
    //   else{
    //     setMystyle({
    //       display:'none'
    //     })
    //   }

    // }

    const updateemployee=(employee) =>{
        navigate('/updateemployee',{state:{employee}})
    }
  


  return (
    <div className="App">
     <div className="container" align="center">
<div className="d-flex justify-content-end">
<input type="text" id="myInput"  placeholder="Search for data.." /> 
  <form method="post"> 
         <input type="submit" value="Sign Out" className='btn btn-success'/> 
         </form>
         </div>
<table id="myTable" className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Employee Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Delete</th>
      <th scope="col">Edit</th>
      <th scope='col'>Download</th>
    </tr>
  </thead>
  <tbody>
   {employees.map((employee,index) =>
   (
    <tr key={employee.employee_id}>
      <td>{employee.employee_id}</td>
      <td>{employee.first_name}</td>
      <td>{employee.last_name}</td>
      <td>{employee.email}</td>
      <td>{employee.phone}</td>
      <td><a href='/' value={employee.email} onClick={(e)=>deleteemployee(e)}>delete</a></td>
      <td><a href="##" onClick={() => updateemployee(employee)}>edit</a></td>
  <td style={(employee.cv) ? {display:'block'}: {display:'none'}}>
     <a href={`http://localhost:8080/reactdownload/`.concat(employee.employee_id)} value1={(employee.cv) ? true:false}  value={employee.employee_id} id="download" onClick={(e) => downloadfile(e)}>
      Download
      </a>      
      </td>

    </tr>
   )
    )}
   
  </tbody>
</table>
</div>
<a href="/employees">go to employees</a>
    </div>
  );

   }
export default Employees;