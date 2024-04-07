import React, {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import { useFormik } from "formik";

const AddUser = () => {
  const navigate = useNavigate();
  const [createData, setCreateData] = useState({
    id: "",
    bookname: "",
    authorname: "",
    ISBN: "",
    date: "",
    birthdate:"",
    biography:"",
  });
  const validationSchema = Yup.object().shape({
    bookname:Yup.string().required('bookname is required'),
    authorname:Yup.string().required('authorname is required'),
    ISBN:Yup.string().required('ISBN number is required'),
    date:Yup.string().required('date is required'),
    birthdate:Yup.string().required('birthdate is required'),
    biography:Yup.string().required('biography is required')
}) 
 const formik=useFormik({
  initialValues:{createData},
  validationSchema:validationSchema,
  onSubmit:async(values)=>{
    await axios
        .post(
          `https://660ea473356b87a55c4fa6c4.mockapi.io/api/Books`,
          values
        )
        .then(res=> console.log(res.data))
        .catch((err) => console.log(err));
      navigate("/");
  }
 })

 
  return (
    <>
    
      <div className="container  justify-content-center m-3 ms-5">
         <h3>Book Details</h3>
        
        <form onSubmit={formik.handleSubmit}>
            <input
              type="text"
              name="bookname"
              className="form-control p-3"
              value={formik.values.bookname}
              onChange={formik.handleChange}
              placeholder="Book Name"
            ></input>
             <div className="text-danger">{formik.errors.bookname}</div>
          <br />
         
         
            <input
              type="text"
              name="authorname"
              className="form-control p-3"
              value={formik.values.authorname}
              onChange={formik.handleChange}
              placeholder="Author Name"
            ></input>
              <div className="text-danger">{formik.errors.authorname}</div>
          <br />
        
         
            <input
              type="text"
              name="ISBN"
              className="form-control p-3"
              value={formik.values.ISBN}
              onChange={formik.handleChange}
              placeholder="ISBN Number"
            ></input>
             <div className="text-danger">{formik.errors.ISBN}</div>
          <br />
         
         
            
            <input
              type="text"
              name="date"
              className="form-control p-3"
              value={formik.values.date}
              onChange={formik.handleChange}
              placeholder="Date"
            ></input>
          <div className="text-danger">{formik.errors.date}</div>
         
          <br />
         
        
        <h3>Author Details</h3>
      
          <input
              type="text"
              name="authorname"
              className="form-control p-3"
              value={formik.values.authorname}
              onChange={formik.handleChange}
              placeholder="Author Name"
            ></input>
          <div className="text-danger">{formik.errors.authorname}</div>
          <br />
          
         
            <input
              type="text"
              name="birthdate"
              className="form-control p-3"
              value={formik.values.birthdate}
              onChange={formik.handleChange}
              placeholder="Date Of Birth"
            ></input>
            <div className="text-danger">{formik.errors.birthdate}</div>
          <br />
         
         
            <input
              type="text"
              name="biography"
              className="form-control p-3"
              value={formik.values.biography}
              onChange={formik.handleChange}
              placeholder="A Short Biography"
            ></input>
           <div className="text-danger">{formik.errors.biography}</div>
          <br />
         
         
          <button type="submit" className="btn btn-danger  ms-4" >
            Create
          </button>
          </form>
        </div>
     
    </>
  );
};

export default AddUser;
