import "./App.css";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function UpdateEmployee({ employee }) {
  const navigate = useNavigate();

  const location = useLocation();
  useEffect(() => {
    console.log(location);
    if (location.state !== null) {
      setEmployeeId(location.state.employee.employee_id);
      setFirstName(location.state.employee.first_name);
      setLastName(location.state.employee.last_name);
      setEmail(location.state.employee.email);
      setPhone(location.state.employee.phone);
      setHireDate(location.state.employee.hire_date);
      setJobTitle(location.state.employee.job_title);
      setSalary(location.state.employee.salary);
      setManagerId(location.state.employee.manager_id);
      setEmployeeCV(location.state.employee.cv);
    }
  }, []);
  const [employeeId, setEmployeeId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [hireDate, setHireDate] = useState();
  const [jobTitle, setJobTitle] = useState("");
  const [salary, setSalary] = useState("");
  const [managerId, setManagerId] = useState("");
  const [cv, setEmployeeCV] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:8080/reactupdateemployee",
        {
          employee_id: employeeId,
          first_name: firstName,
          last_name: lastName,
          email: email,
          phone: phone,
          hire_date: hireDate,
          job_title: jobTitle,
          salary: salary,
          manager_id: managerId,
        },
        {
          headers: {
            Authorization: "Basic bWljcm9jYXJlOjEyM2FBYmM=",
          },
        }
      )
      .then(navigate("/employees"));
  };

  return (
    <div className="container">
      <h1>Update Employee </h1>
      <h1>{message ? message : ""}</h1>
      <form id="createemp" action="#" onSubmit={handleSubmit}>
        <input
          id="first_name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          placeholder="First Name"
          className="form-control mb-4 col-4"
          required
        />
        <input
          id="last_name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          placeholder="Last Name"
          className="form-control mb-4 col-4"
          required
        />
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="form-control mb-4 col-4"
          required
        />
        <input
          id="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
          className="form-control mb-4 col-4"
          required
        />
        <input
          id="hire_date"
          type="date"
          value={hireDate}
          onChange={(e) => setHireDate(e.target.value)}
          placeholder="Hire Date"
          className="form-control mb-4 col-4"
          required
        />
        <input
          id="job_title"
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          placeholder="Job Title"
          className="form-control mb-4 col-4"
          required
        />
        <input
          id="salary"
          type="text"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          placeholder="Salary"
          className="form-control mb-4 col-4"
          required
        />
        <input
          id="manager_id"
          type="text"
          value={managerId}
          onChange={(e) => setManagerId(e.target.value)}
          placeholder="Manager Id"
          className="form-control mb-4 col-4"
          required
        />

        <button type="submit" id="button" className="btn btn-info col-2">
          update
        </button>
      </form>

      <a href="/employees"> Back to Employee List</a>
    </div>
  );
}

export default UpdateEmployee;
