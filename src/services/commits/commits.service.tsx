// Commits services
import axios from "axios";

// Types
import { Commits } from "./commits.service.types";

/** Service to get commits data.
 *
 * @returns {Promise<Commits>} Returns a promise with the result of the commits data
 */
export const fetchCommits = async (): Promise<Commits> => {
  const url =
    "https://api.github.com/repos/gabiprds93/git-commit-history/commits";

  try {
    const { data } = await axios.get(url);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
