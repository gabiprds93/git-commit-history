import React from "react";

// Types, Styles
import { HomeProps as Props } from "./Home.types";
import Styles from "./Home.styles";

const Home: React.FC<Props> = (props) => {
  return <Styles className="Home">Home</Styles>;
};

Home.defaultProps = {};

export default Home;
