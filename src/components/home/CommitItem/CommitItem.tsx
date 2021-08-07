import dayjs from "dayjs";

// Types, Styles
import { CommitItemProps as Props } from "./CommitItem.types";
import Styles from "./CommitItem.styles";

const CommitItem: React.FC<Props> = (props) => {
  const { item } = props;

  const { commit, committer, html_url } = item;
  const { login, html_url: htmlCommiter } = committer;
  const { date } = commit.committer;
  const dateFormat = dayjs(date).format("MMM DD, YYYY");

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

      <div className="CommitItem__info">
        <a href={htmlCommiter} target="_blank" rel="noopener noreferrer">
          {login}
        </a>

        <span>{` committed ${dateFormat}`}</span>
      </div>
    </Styles>
  );
};

CommitItem.defaultProps = {};

export default CommitItem;
