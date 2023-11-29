import React from "react";

const Header = ({ title }) => {
  return (
    <header
    // Inline Style
    // style={{
    //   backgroundColor: "blue",
    //   color: "white",
    // }}
    >
      <h1>{title}</h1>
    </header>
  );
};
//It is default props it use If any mistake or the data isn't transfer for this header file so it is use
Header.defaultProps = {
  title: "To do List",
};

export default Header;
