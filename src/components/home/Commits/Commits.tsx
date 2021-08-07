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
      <h1 className="Commits__title">Commits</h1>

      {isLoading ? <p>Loading...</p> : null}

      <ul>
        {commits?.map((commitInfo) => {
          const { commit, committer, html_url } = commitInfo;
          const { login, html_url: htmlCommiter } = committer;

          return (
            <li className="Commits__item">
              <a
                href={html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="Commits__item__message"
              >
                {commit.message}
              </a>

              <a
                href={htmlCommiter}
                target="_blank"
                rel="noopener noreferrer"
                className="Commits__item__user"
              >
                {login}
              </a>
            </li>
          );
        })}
      </ul>
    </Styles>
  );
};

Commits.defaultProps = {};

export default Commits;
