
import { Link } from "react-router-dom";
//make my navbar.

//start off using a function with a return statement.
//Link it to home.
function Navbar (){
  return(
      <nav>
        <Link to ="/Advice">Start your journey here!</Link>
        <Link to ="/"> Home </Link>
        <Link to ="/">Contact us</Link>
      </nav>
  )
}

export default Navbar;