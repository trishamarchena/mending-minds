
import { Link } from "react-router-dom";
//make my navbar.
//start off using a function with a return statement.
//Link it to home and the Advice page.
//Make sure you label it for use in CSS.
function Navbar (){
  return(
      <nav>
        <div className= "navbar">
        <Link to ="/Advice">Start your journey here!</Link>
        <Link to ="/"> Home </Link>
        </div>
      </nav>
  )
}

export default Navbar;