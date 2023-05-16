import {useState} from 'react'
import axios from 'axios';

const Uploadfile=()=>{
const [employeeId,setEmployeeId]=useState(0)
const [selectedfile,setSelectedfile]=useState(null)
const [message,setMessage]=useState("")
const handleSubmit=(e) =>{
e.preventDefault();

console.log(employeeId)
console.log(selectedfile)
const formdata=new FormData()
formdata.append('employee_id',employeeId)
formdata.append('file_content',selectedfile)

axios.post('http://localhost:8080/reactuploadfile',formdata,{headers:{
    'Authorization':'Basic bWljcm9jYXJlOjEyM2FBYmM=',
    'Content-Type':'multipart/form-data'
       }}).then(resp =>
setMessage(resp.data)
)

}



return(
    <div className="container">
    <div>
     <h1>Employee CV upload</h1>
     <h6>{message}</h6>
    </div>
     <div className="card" >
        <div className="card-body" align="center">
          <h2 className="card-title">File Upload</h2>
          <div className="mb-3">
            <form  onSubmit={handleSubmit}>
            <input type="text" onChange={(e) =>setEmployeeId(e.target.value)} placeholder="empid" className="form-control mb-4 col-4" />
              <input
                className="form-control"  onChange={(e) =>setSelectedfile(e.target.files[0])} type="file" id="formFile" /><br />
              <input type="submit" value="Upload" className="btn btn-warning" />
            </form>
          </div>
        </div>
       </div>
  
      
   </div>
)

}

export default Uploadfile;