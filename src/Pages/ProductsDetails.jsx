// import React, {useEffect, useState} from "react";
// import {useLoaderData, useParams} from "react-router-dom";

// const ProductsDetails = () => {
//   const {id} = useParams();

//   return <div>Products Details of:{id}</div>;
// };

// export default ProductsDetails;

import React, {useContext, useEffect, useState} from "react";
import {Link, Navigate, useParams} from "react-router-dom";
import {AuthContext} from "../Provider/AuthProvider";
//import {AuthContext} from "../../Provider/AuthProvider";

const ProductsDetails = () => {
  const {user} = useContext(AuthContext);
  if (
    !user
    ?.email) 
    return <Navigate to="/login"/>;
  const [courses, setCourses] = useState([]);
  const {id} = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/products/${id}`);
      const data = await response.json();
      if (data) {
        setCourses(data);
      } else {
        setCourses(null);
      }
    };

    fetchData();
  }, []);

  return (<div>
    <div className="card bg-base-100 w-full shadow-xl text-xl  ">
      <figure>
        <img src={courses
            ?.img_url} alt="course"/>
      </figure>
      <div className="card-body text-center text-[indigo]">
        <h2 className="card-title  text-left">
          Course Title: {
            courses
              ?.title
          }!
          <br/>
          Price: {
            courses
              ?.price
          }
          <br/>
          Duration: {
            courses
              ?.duration
          }
          <br/>
          Lesson: {
            courses
              ?.lession
          }
          <br/>
          Level: {
            courses
              ?.level
          }
          <br/>
          Ratings: {
            courses
              ?.ratings
          }
        </h2>
        <p className="text-justify text-[darkcyan]">{
            courses
              ?.details
          }</p>
        <br/>
        <div className="card-actions justify-center">
          <button className="btn btn-success text-[white]">
            Let's Enroll
          </button>
          <Link to="/">
            {" "}
            <button className="btn btn-info text-[white]">Any Query?</button>
          </Link>
        </div>
      </div>
    </div>
  </div>);
};

export default ProductsDetails;
