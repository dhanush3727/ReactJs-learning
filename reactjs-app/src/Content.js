import React from "react";

const Content = () => {
  function randomNames() {
    const names = ["Dhanush", "Bharani", "Sabari", "Yuvasri"];
    const int = Math.floor(Math.random() * 4);
    return names[int];
  }
  return <h1>Hi {randomNames()} Welcome</h1>;
};

export default Content;
