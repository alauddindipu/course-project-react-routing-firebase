import Navbar from "../Navbar/Navbar";
import Footer from "./../Footer/Footer";

export default function Home() {
  return (<div>
    {/* <Header></Header> */}
    <Navbar></Navbar>

    <div className="grid grid-cols-1 m min-h-screen">
      <div>
        <img src="" alt="Banner"/>
        <p>Website Guidelines</p>
      </div>
      <div>
        <h2>Contain Public Data</h2>
      </div>
      <div>Contact Us with Submit button</div>
    </div>

    <Footer></Footer>
  </div>);
}
