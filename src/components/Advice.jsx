
import { baseURL, config } from "../services";
import Rating from "./Rating";
import axios from "axios";


function Advice(props) {
  const { username, topic, advice, rating } = props.advice.fields;

  const deleteAdvice = async () => {

    const adviceURL = `${baseURL}/${props.advice.id}`;
     await axios.delete(adviceURL, config );
     props.setToggleFetch((curr) => !curr);
  }


  return (
    <article>
      <main>
        <div className="myLabels">
        <h2>User {username}</h2>
        <h3> Topic {topic}</h3>
        <p>{advice}</p>
        <Rating rating={rating} />
        {props.index > 1 && <button onClick={deleteAdvice}>Delete!</button>}
        </div>
      </main>

    </article>
  );
}

export default Advice;
