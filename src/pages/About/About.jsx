import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="h-[20vh]">
      <Link to="/contact">
        <h1>Hello world about!</h1>
      </Link>
    </div>
  );
};

export default About;
