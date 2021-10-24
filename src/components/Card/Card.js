import likeImage from "../../assests/favorite.svg";
import eyeImage from "../../assests/visibility.svg";
import Image from "../Image/Image";

const Card = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 p-3 p-lg-1" key={props.id}>
      <div className="shadow-sm card">
        <Image image= {props.image} tags= {props.tags} user= {props.user} />

        <div className="card-body row">
          <div className="col img-text">
            <img src={likeImage} alt="like icon" /> {props.likes}
          </div>

          <div className="col img-text vl">
            <img src={eyeImage} alt="view icon" /> {props.views}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
