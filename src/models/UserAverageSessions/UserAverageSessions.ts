/**
 * class UserAverageSessions - data modeling
 */

import {
  SessionType,
  UserAverageSessionsType,
} from "./UserAverageSessionsType";

class UserAverageSessions implements UserAverageSessionsType {
  private readonly _userId: number;
  private readonly _sessions: SessionType[];
  /**
   * @param {object} data - The data value.
   */
  constructor(data: UserAverageSessionsType) {
    this._userId = data.userId;
    this._sessions = data.sessions;
  }

  /**
   * Get the userId value.
   * @return {number} The _userId value
   */
  get userId(): number {
    return this._userId;
  }

  /**
   * Get the sessions value.
   * @return {number} The _sessions value
   */
  get sessions(): SessionType[] {
    return this._sessions;
  }
}

export default UserAverageSessions;
