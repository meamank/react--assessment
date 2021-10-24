import { useState } from "react";

const Image = (props) => {
  const [hover, setHover] = useState(false);

  return (
    <div className="image pb-10 pt-4">
      <img
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="card-img p-1"
        src={props.image}
        alt=""
      />
      {hover && (
        <div
          className="overlay p-1"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <p className="card-text p-1">
            <span>{props.tags}</span> by <span>{props.user}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Image;
