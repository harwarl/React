import React from "react";

function Header(props) {
  const { username, profileImg } = props;
  return (
    <div>
      <img src={profileImg} alt={profileImg} />
      <h1>{username}</h1>
    </div>
  );
}

export default Header;
