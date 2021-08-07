import styled from "styled-components";

// Types
import { CommitsStyledProps as Props } from "./Commits.types";

const CommitsStyled = styled.div<Props>`
  &.Commits {
    padding: 3.6rem;
  }

  .Commits {
    &__title {
      padding-bottom: 2.4rem;
    }
  }
`;

export default CommitsStyled;
