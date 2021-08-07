import { useQuery } from "react-query";

// Services
import { fetchCommits } from "./commits.service";

/** Hook to get commits information.
 *
 * @returns {UseQueryResult} Returns a use query result with the commits information
 */
export const useFetchCommits = () => {
  return useQuery(["commits"], () => fetchCommits(), {
    enabled: true,
  });
};
