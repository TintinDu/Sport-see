/**
 * class UserAverageSessions - data modeling
 */

type SessionType = {
  day: number;
  sessionLength: number;
};

type UserAverageSessionsType = {
  sessions: SessionType[];
};

class UserAverageSessions implements UserAverageSessionsType {
  private readonly _sessions: SessionType[];
  /**
   * @param {object} data - The data value.
   */
  constructor(data: UserAverageSessionsType) {
    this._sessions = data.sessions;
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
