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

    &__item {
      align-items: flex-start;
      border: 1px solid var(--palette-border);
      display: flex;
      flex-direction: column;
      padding: 0.8rem 1.6rem;

      &:hover {
        background-color: var(--palette-background);
      }

      &__message {
        font-size: 1.4rem;
        margin-bottom: 0.4rem;
      }

      &__user {
        font-size: 1.2rem;
      }

      & a {
        color: var(--palette-text);
        font-weight: 600;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export default CommitsStyled;
