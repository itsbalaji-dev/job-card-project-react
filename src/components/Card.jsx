import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="parent">
      <div className="card">
        <div className="top">
          <img src={props.img} alt="" />
          <button className="save">
            Save <Bookmark style={{ width: 15, color: "#dadada" }} />
          </button>
        </div>

        <div className="middle">
          <h2 className="company-name">
            {props.company} <span className="time"> {props.posted} </span>
          </h2>
          <h3 className="role">{props.role}</h3>
          <div className="tags">
            <h4 className="tag-1">{props.type}</h4>
            <h4 className="tag-2"> {props.level}</h4>
          </div>
        </div>
        <div className="buttom">
          <div className="left">
            <h3 className="wages">{props.wage}</h3>
            <h4 className="location">{props.location}</h4>
          </div>
          <button className="apply-now">Apply now</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
