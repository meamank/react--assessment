const Hover = (props) => {
  return (
    <>
      <div
        className="overlay p-1"
        onMouseEnter={props.onHover}
        onMouseLeave={props.onClose}
      >
        <p className="card-text p-1">
          <span>{props.tags}</span> by <span>{props.user}</span>
        </p>
      </div>
    </>
  );
};

export default Hover;
