import React from "react";

//Services
import { useFetchCommits } from "../../../services/commits/commits.service.hooks";
// Types, Styles
import { CommitsProps as Props } from "./Commits.types";
import Styles from "./Commits.styles";

const Commits: React.FC<Props> = (props) => {
  const { data: commits, isLoading } = useFetchCommits();

  return (
    <Styles className="Commits">
      <h1>Commits</h1>

      {isLoading ? <p>Loading...</p> : null}

      <ul>
        {commits?.map((commitInfo) => {
          const { commit } = commitInfo;

          return <li>{commit.message}</li>;
        })}
      </ul>
    </Styles>
  );
};

Commits.defaultProps = {};

export default Commits;
