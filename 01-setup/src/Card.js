import React from 'react';
import Header from "./Header";
import Body from "./Body";

function Card(props){
  const commentObject = props.commentObject
  const { profileImg, username, comment} = commentObject

  console.log("E recah Here!!!")
  return (
    <>
    <Header profileImg={profileImg} username={username}/>
    <Body comment={comment}/>
    </>
  )
}

export default Card;