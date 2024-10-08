import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Navbar from './Shared/Navbar/Navbar';
import Footer from './Shared/Footer/Footer';

const CourseDetails = () => {

// const courseDetails = useLoaderData();

// console.log(courseDetails);

// console.log("Details not getting");
//     return (
//         <div>
//             <h2>Course Derails</h2>
//         </div>
//     );

  // const {_id,details} = products;

  const { id } = useParams();

  const [course, setCourse] = useState([]);

  useEffect(() => {
      fetch(`http://localhost:5000/course/${id}`)
          .then((res) => res.json())
          .then((data) => setCourse(data));
  }, []);
  console.log(course);
console.log(id);

  // const { _id, title, details } = course;
  // console.log(course._id);

  return (
    <div>
    <Navbar></Navbar>
            <div>
                <p className="text-3xl py-10">Available Products: {course.length}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-12 md:gap-12 xl:12 mb-20">
                {/* {course.map((c) => ( */}
                    <div className="card card-compact bg-base-100 w-96 shadow-xl" key={course.course_id}>
                        <figure>
                            <img
                                src={course.img_url}
                                alt={course.title} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.title}</h2>
                            <p>{course.author}</p>
                            <p><span className="bg-warning p-2 rounded">{course.price} BDT</span> <span className="bg-success p-2 rounded">{course.ratings}</span></p>
                            <div className="card-actions justify-end">
                                
                            </div>
                        </div>
                    </div>
                {/* ))} */}
            </div>
            <Footer></Footer>
        </div>
  );

}

export default CourseDetails;
