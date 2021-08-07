// Commits service interfaces and types

/** Commit full information.
 *
 * @interface Commit
 * @property {string} sha The id of the commit
 * @property {AccountInfo} author Information of the author
 * @property {AccountInfo} committer Information of the comimitter
 * @property {CommitInfo} commit Information of the commit
 * @property {string} html_url Link to the commit
 * @property {string} url Url to get commit json
 */
export interface Commit {
  sha: string;
  author: AccountInfo;
  committer: AccountInfo;
  commit: CommitInfo;
  html_url: string;
  url: string;
}

/** Account information.
 *
 * @interface AccountInfo
 * @property {number} id Id of the account
 * @property {string} html_url Link to the account
 * @property {string} login Username of the account
 * @property {string} repos_url Url to get repos json
 * @property {string} type Type of the account
 * @property {string} url Url to get account json
 */
export interface AccountInfo {
  id: number;
  html_url: string;
  login: string;
  repos_url: string;
  type: string;
  url: string;
}

/** Commit information.
 *
 * @interface CommitInfo
 * @property {Person} author Author of the commit
 * @property {Person} committer Commiter of the commit
 * @property {string} message Message of the commit
 * @property {string} url Url to get commit json
 */
export interface CommitInfo {
  author: Person;
  committer: Person;
  message: string;
  url: string;
}

/** Person information.
 *
 * @interface Person
 * @property {string} name Name of the person
 * @property {string} email Email of the person
 * @property {string} date Date of the commit
 */
export interface Person {
  name: string;
  email: string;
  date: string;
}
