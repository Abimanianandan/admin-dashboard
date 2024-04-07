import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Dashboard = ({setId}) => {
  const [userData, setUserData] = useState([]);
  const [deleteData,setDeleteData]=useState([]);
  const navigate=useNavigate();

  const handleEdit=(id)=>{
      setId(id)
      navigate(`/edit/${id}`)
  }

  const handleDelete=async(id)=>{
     await axios.delete(`https://660ea473356b87a55c4fa6c4.mockapi.io/api/Books/${id}`)
     .then(res=>setDeleteData(res.data))
     .catch((err)=>console.log(err))
  }

  useEffect(() => {
    fetchData();
  }, [deleteData]);

  const fetchData = async () => [
    await axios
      .get("https://660ea473356b87a55c4fa6c4.mockapi.io/api/Books")
      .then((res) => setUserData(res.data))
      .catch((err) => console.log(err)),
  ];
  return (
    <>
      
   
    <div className="container ">
      <div className="d-flex justify-content-between mt-1">
      <h1 className="text-primary">Book Details</h1>
    <Link to={"adduser"} className="btn btn-success fs-5 rounded">Add User</Link>
      </div>
    
         <table class="table table-hover border border-3 m-2">
      <thead>
        <tr className="table-info">
          <th scope="col" className="text-danger fs-4 ">#</th>
          <th scope="col" className="text-danger fs-4">Title</th>
          <th scope="col" className="text-danger fs-4">Author</th>
          <th scope="col" className="text-danger fs-4">ISB number</th>
          <th scope="col" className="text-danger fs-4">Publication Date</th>
          <th scope="col" className="text-danger fs-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <th scope="row" className="table-light fs-5">{item.id}</th>
                <td className="fw-bold table-light fs-5">{item.bookname}</td>
                <td className="fw-bold table-light fs-5">{item.authorname}</td>
                <td className="fw-bold table-light fs-5">{item.ISBN}</td>
                <td className="fw-bold table-light fs-5">{item.date}</td>
                <td className="table-light "> <button className="btn btn-primary mt-3 fs-5"onClick={()=>{handleEdit(item.id)}}>Edit</button>
                <button className="btn btn-danger ms-3 mt-3 fs-5"onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
               
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
    <h1 className="text-primary">Author Details</h1>
    <table class="table table-hover border border-3 ">
      <thead >
        <tr className="table-info">
          <th scope="col" className="text-danger fs-4">#</th>
          <th scope="col" className="text-danger fs-4">Author Name</th>
          <th scope="col" className="text-danger fs-4">DOB</th>
          <th scope="col" className="text-danger fs-4">Biography</th>
          <th scope="col" className="text-danger fs-4">Action</th>
         
        </tr>
      </thead>
      <tbody>
        {userData.map((item, index) => {
          return (
            <>
              <tr key={index}>
                <th scope="row" className="table-light fs-5">{item.id}</th>
                <td className="fw-bold col-3 table-light fs-5">{item.authorname}</td>
                <td className="fw-bold col-2 table-light fs-5">{item.birthdate}</td>
                <td className="fw-bold col-4 table-light fs-5">{item.biography}</td>
                <td className="table-light"> <button className="btn btn-primary mt-3 fs-5"onClick={()=>{handleEdit(item.id)}}>Edit</button>
                <button className="btn btn-danger ms-3 mt-3 fs-5"onClick={()=>{handleDelete(item.id)}}>Delete</button></td>
               
              </tr>
            </>
          );
        })}
      </tbody>
    </table>
    </div>
  </>
  );
};

export default Dashboard;
