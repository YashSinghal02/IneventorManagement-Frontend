import "./LeftSide.css"
import { Link } from 'react-router-dom'
import { MdLogout } from "react-icons/md";

function LeftSide() {
  return (
    <div className="leftside-main">
      <ul >
        <li><Link to="/allcard">All Products</Link></li>
        <li><Link to="/addcard">Add Products</Link></li>
        {/* <li><Link to="/signup">SignUp</Link></li> */}
     <li className="logout">
  <Link to="/"><span>Logout   <MdLogout className="logout-icon" /></span>  </Link>
</li>

      </ul>
    </div>
  )
}

export default LeftSide
