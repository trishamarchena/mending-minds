import axios from "axios";
import { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { baseURL, config, sortByCreatedTime } from "./services";
import Myvid from "./components/Myvid";
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
  return (
    <div className="App">
      <Navbar />
      <Myvid />
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