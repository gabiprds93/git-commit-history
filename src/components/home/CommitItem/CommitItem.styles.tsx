import styled from "styled-components";

import { CommitItemStyledProps as Props } from "./CommitItem.types";

const CommitItemStyled = styled.li<Props>`
  &.CommitItem {
    align-items: flex-start;
    border: 1px solid var(--palette-border);
    display: flex;
    flex-direction: column;
    padding: 0.8rem 1.6rem;

    &:hover {
      background-color: var(--palette-background);
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

  .CommitItem {
    &__message {
      font-size: 1.4rem;
      margin-bottom: 0.4rem;
    }

    &__user {
      font-size: 1.2rem;
    }
  }
`;

export default CommitItemStyled;
