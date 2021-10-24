import { useState } from "react";
import Hover from "./Hover";

const Image = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="image pb-10 pt-4">
      <img
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="card-img p-1"
        src={props.image}
        alt="flower"
      />
      {hover && (
        <Hover
          onHover= {() => setHover(true)}
          onClose= {() => setHover(false)}
          tags= {props.tags}
          user= {props.user}
        />
      )}
    </div>
  );
};

export default Image;
