import axios from "axios";
import { useState } from "react";
import { baseURL, config } from "../services";

function Form(props) {
  const [username, setUsername] = useState("");
  const [topic, setTopic] = useState("");
  const [advice, setAdvice] = useState("");
  const [rating ] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newAdvice = {
      username,
      topic,
      advice,
      rating,
    };
    await axios.post(baseURL, { fields: newAdvice }, config);
    props.setToggleFetch((toggleFetch) => !toggleFetch);
  };
//myForm info, label it so you can reference back to it in CSS
  return (
    <form onSubmit={handleSubmit}>
      <div className="formInputs">
        <div className="formUser">
      <input
        type="text"
        placeholder="username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
      //sets value of the name in the state to the current input value.
      </div>
      <div className="formTopic">
      <input
        type="text"
        placeholder="topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      </div>
      <div className="userAdvice">
      <textarea
        type="text"
        placeholder="Your much valued advice"
        value={advice}
        onChange={(e) => setAdvice(e.target.value)}
      />
      </div>
      <div className="formButton">
      <button>Submit</button>
      </div>
      </div>
    </form>
  );
}

export default Form;
