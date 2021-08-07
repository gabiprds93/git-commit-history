import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";

// Components
import Commits from "../Commits/Commits";
// Types, Styles
import { HomeProps as Props } from "./Home.types";
import Styles from "./Home.styles";

const Home: React.FC<Props> = (props) => {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Styles className="Home">
        <Commits />
      </Styles>
    </QueryClientProvider>
  );
};

Home.defaultProps = {};

export default Home;
