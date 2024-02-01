import { StarFilled } from "@ant-design/icons";
import "./Skills.css";
function Rating() {
  return (
    <div className="rating">
        <span className="starrating"><StarFilled classname="star" style={{color:"yellow",fontSize:"1.5rem"}}/></span>
    </div>
  )
}

export default Rating