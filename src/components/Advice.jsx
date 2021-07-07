
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
        <div className= "theBody">
        <div className="username">
        <h2>User: {username}</h2>
        </div>
        <div className="topic">
        <h3> Topic: {topic}</h3>
        </div>
        <div className="advice">
        <p>{advice}</p>
        </div>
        <div className="rating">
        <Rating rating={rating} />
        </div>
        <div className="deleteButton">
        {props.index > 1 && <button onClick={deleteAdvice}>Delete!</button>}
        </div>
        </div>
      </main>

    </article>
  );
}

export default Advice;
