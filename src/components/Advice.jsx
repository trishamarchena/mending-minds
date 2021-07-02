

import Rating from "./Rating";

function Advice(props) {
  const { username, topic, advice, rating } = props.advice.fields;

  // const deleteAdvice = async () => {

  //   const adviceURL = `${baseURL}/${props.advices.id}`;
  //    await axios.delete(adviceURL, config );
  //    props.setToggleFetch((curr) => !curr);
  // }


  return (
    <article>
      <main>
        <h2>{username}</h2>
        <h3> {topic}</h3>
        <p>{advice}</p>
        <Rating rating={rating} />
      </main>

    </article>
  );
}

export default Advice;
