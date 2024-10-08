import {useEffect, useState} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";
import {NavLink} from "react-router-dom";
import Banner from "../Banner/Banner";
import HowItWorks from "../HowItWorks/HowItWorks";
import Contact from "../Contact/Contact";

export default function Home() {
  const [course, setCourse] = useState([]);

  useEffect(() => {
    fetch(`https://course-project-react-route-86ggir4kk-alauddindipus-projects.vercel.app/course`).then(res => res.json()).then(data => setCourse(data));
  }, []);
  console.log(course);

  return (<div>
    <Navbar></Navbar>

    <div className="grid grid-cols-1 m min-h-screen">
      <div>
        <Banner></Banner>
      </div>
      <div>
        <HowItWorks></HowItWorks>
      </div>

      <div className="flex justify-center">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 lg:gap-12 md:gap-12 xl:12">
          {
            course.map(c => (<div className="card card-compact bg-base-100 w-40 h-60 shadow-xl" key={c.course_id}>
              <figure>
                <img src={c.img_url} alt={c.title}/>
              </figure>
              <div className="card-body">
                <h2 className="card-title">{c.title}</h2>
                <p>{c.author}</p>
                <p>
                  {/* <span className="bg-warning p-2 rounded">{c.price} BDT</span> */}
                  <span className="bg-success p-2 rounded">{c.ratings}</span>
                </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div> */
                }
              </div>
            </div>))
          }
        </div>
      </div>
      <div>
        <Contact></Contact>
      </div>
    </div>

    <Footer></Footer>
  </div>);
}
