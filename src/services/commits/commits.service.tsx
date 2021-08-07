// Commits services
import axios from "axios";

// Types
import { Commit } from "./commits.service.types";

/** Service to get commits data.
 *
 * @returns {Promise<Commit>} Returns a promise with the result of the commits data
 */
export const fetchCommits = async (): Promise<Commit[]> => {
  const url =
    "https://api.github.com/repos/gabiprds93/git-commit-history/commits";

  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
