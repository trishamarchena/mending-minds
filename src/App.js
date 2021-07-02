import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Navbar from "./components/Navbar";
import Advice from "./components/Advice";
import Form from "./components/Form";
import "./App.css";

function App() {
  const [superAdvice, setSuperAdvice] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(true);
  useEffect(() => {
    const fetchAdvice = async () => {
      //make our API call to the URl with our config
      const resp = await axios.get(baseURL, config);
      //log the data
      setSuperAdvice(resp.data.records);
    };
    fetchAdvice();
  }, [toggleFetch]);

  return (
    <div className="App">
      <Navbar />
      <Route path="/">
        <main>
          <h1>Mending Minds</h1>
        </main>
      </Route>
      <Route exact path="/">
        <h3> Description </h3>
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



        // <div class= "backgrnd">
        // <video loop="" playsinline="" src="https://s3.amazonaws.com/calm-assets-videos/hls/aaf764eade43946661391ae8204118bc/aaf764eade43946661391ae8204118bc.mp4" class="SceneVideo__Video-sc-1g6lelq-2 hwCkrm"></video>
        // </div>