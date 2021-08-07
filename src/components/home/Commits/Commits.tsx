// Components
import CommitItem from "../CommitItem/CommitItem";
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
        {commits?.map((commit) => {
          return <CommitItem key={commit.sha} item={commit} />;
        })}
      </ul>
    </Styles>
  );
};

Commits.defaultProps = {};

export default Commits;
