import React from "react";
function LoadingScreen(props) 

{
  return <div id={props.load ? "loading" : "loaded"}></div>;
}

export default LoadingScreen;
