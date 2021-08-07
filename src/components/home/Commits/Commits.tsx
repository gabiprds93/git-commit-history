import React from "react";

//Services
import { useFetchCommits } from "../../../services/commits/commits.service.hooks";
// Types, Styles
import { CommitsProps as Props } from "./Commits.types";
import Styles from "./Commits.styles";

const Commits: React.FC<Props> = (props) => {
  const { data } = useFetchCommits();
  console.log(data);

  return <Styles className="Commits">Commits</Styles>;
};

Commits.defaultProps = {};

export default Commits;
