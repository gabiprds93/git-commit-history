import React from "react";

// Types, Styles
import { CommitItemProps as Props } from "./CommitItem.types";
import Styles from "./CommitItem.styles";

const CommitItem: React.FC<Props> = (props) => {
  const { item } = props;

  const { commit, committer, html_url } = item;
  const { login, html_url: htmlCommiter } = committer;

  return (
    <Styles className="CommitItem">
      <a
        href={html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="CommitItem__message"
      >
        {commit.message}
      </a>

      <a
        href={htmlCommiter}
        target="_blank"
        rel="noopener noreferrer"
        className="CommitItem__user"
      >
        {login}
      </a>
    </Styles>
  );
};

CommitItem.defaultProps = {};

export default CommitItem;
