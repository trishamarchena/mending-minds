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

  return (
    <form onSubmit={handleSubmit}>
      {/* <input
        min={0}
        max={5}
        value={rating}
        onChange={(e) => setRating(e.target.valueAsNumber)}
      /> */}
      <div className="formInputs">
        <div className="formUser">
      <input
        type="text"
        placeholder="username"
        value={username} 
        onChange={(e) => setUsername(e.target.value)}
      />
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
