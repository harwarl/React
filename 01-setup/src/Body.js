import React from "react";

function Body(props) {
  const comment = props.comment;
  return (
    <div>
      <p>{comment}</p>
    </div>
  );
}

export default Body;
