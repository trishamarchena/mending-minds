function Rating(props) {
  // declare a string called likes that is empty
  let likes = "";
  // use a for loop to iterate from 0 to the rating from props and add a heart exclamation emoji to likes each time
  for (let i = 0; i < props.rating; i += 1) {
    likes += '❣️';
    //this allows you to add the symbol every time there is a like.
  }
  // render the emojis
  return (
    <p>{likes}</p>
  ); 
}

export default Rating;