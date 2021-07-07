import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config, sortByCreatedTime } from "./services";
import Navbar from "./components/Navbar";
import Advice from "./components/Advice";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [superAdvice, setSuperAdvice] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
//use toggle to prevent from having to refresh every single time I insert new info.
  useEffect(() => {
    const fetchAdvice = async () => {
      //make our API call to the URl with our config
      const resp = await axios.get(baseURL, config);
      setSuperAdvice(sortByCreatedTime(resp.data.records));
    };
    fetchAdvice();
  }, [toggleFetch]);
//VIDEO CODE BELOW BELONGS TO THECALMAPP.COM
//write your homepage information below and render all of your information on your page.
  return (
    <div className="App">
      <Navbar />

      <video autoPlay loop muted src="https://s3.amazonaws.com/calm-assets-videos/hls/aaf764eade43946661391ae8204118bc/aaf764eade43946661391ae8204118bc.mp4"></video>
      <Route path="/">
        <main>
          <h1>Mending Minds</h1>
        </main>
      </Route>
      <Route exact path="/">
        <div div className= "description">
        <h3> This website is designed for us to help each other mentally. On the top right you can start your journey by either looking at the top rated advice that has worked for others, as well as assisting and helping others by adding what has worked best for you.
          Either way, we look forward to helping you get one step closer to mental health in whatever way possible. </h3>
          </div>
          <footer>
            <h4>Patricia Marchena, Mending Minds &copy; </h4>
          </footer>
      </Route>
      <Route path="/Advice">
        {superAdvice.map((advice, index) => (
          <Advice
            key={advice.id}
            index={index}
            advice={advice}
            setToggleFetch={setToggleFetch}
          />
        ))}
        <Form setToggleFetch={setToggleFetch} />

      </Route>
    </div>
  );
}
export default App;