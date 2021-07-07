import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config, sortByCreatedTime } from "./services";
import Navbar from "./components/Navbar";
import Home from "./components/Home"
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
  //write your homepage information below and render all of your information on your page.
  //VIDEO CODE BELOW BELONGS TO THECALMAPP.COM
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
      <Home />
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