import React from "react";
import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <Card className="about">
      <h1>About</h1>
      <p>This is a react app to leave feedback for a product or service</p>
      <p>Version 1.0.0</p>
      <Link to="/">Back To Home</Link>
    </Card>
  );
};

export default About;
