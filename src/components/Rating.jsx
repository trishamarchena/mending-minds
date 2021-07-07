import {useState} from 'react';

function Rating() {
const [rating, setRating]= useState(0);
//set count function to count amount on times people click on something they find useful.
const count = (e) =>{
e.preventDefault();

setRating(rating + 1 );
}

return(
<div className="ratingIguess">
<button onClick={count}>💚💚</button>

<h4>{rating} people found this useful!</h4>
</div>
)
}
export default Rating;