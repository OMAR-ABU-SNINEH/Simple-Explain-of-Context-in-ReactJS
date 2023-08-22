import React from "react";

function Main(props) {
  return (
    <>
      <div>Main Component</div>
      <h2>{props.children}</h2>
    </>
  );
}

Main.Current = () => <div>hi I'm main current </div>;

export default Main;
