import "./RightSide.css"
import { Outlet } from "react-router-dom";


function RightSide() {
  return (
   <div className="rightside-main">
      <Outlet /> 
    </div>
  )
}

export default RightSide
