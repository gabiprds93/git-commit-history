// Interfaces and types from component CommitItem

// Types
import { Commit } from "../../../services/commits/commits.service.types";

// Component Props
export interface CommitItemProps {
  item: Commit;
}

// Styled Component Props
export interface CommitItemStyledProps {
  className: string;
}
