import React from "react";

const Main = (props) => {
  return (
    <main className="mr-auto ml-auto w-full max-w-screen-2xl">
      {props.children}
    </main>
  );
};

export default Main;
