/**
 * class UserActivity - data modeling
 */

type SessionType = {
  date: string;
  kilogram: number;
  calories: number;
};

type UserActivityType = {
  sessions: SessionType[];
};

class UserActivity implements UserActivityType {
  private readonly _sessions: SessionType[];
  /**
   * @param {object} data - The data value.
   */
  constructor(data: UserActivityType) {
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

export default UserActivity;
