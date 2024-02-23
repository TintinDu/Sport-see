/**
 * class UserMainData - data modeling
 */

type UserMainDataType = {
  userInfos: UserInfosType;
  todayScore: number;
  keyData: KeyDataType;
};

type UserInfosType = {
  firstName: string;
  lastName: string;
  age: number;
};

type KeyDataType = {
  caloriesCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

class UserMainData implements UserMainDataType {
  private readonly _userInfos: UserInfosType;
  private readonly _todayScore: number;
  private readonly _keyData: KeyDataType;
  /**
   * @param {object} data - The data value.
   */
  constructor(data: UserMainDataType) {
    this._userInfos = data.userInfos;
    this._todayScore = data.todayScore;
    this._keyData = data.keyData;
  }

  /**
   * Get the userInfos value.
   * @return {number} The _userInfos value
   */
  get userInfos(): UserInfosType {
    return this._userInfos;
  }

  /**
   * Get the todayScore value.
   * @return {spec} The _spec value
   */
  get todayScore(): number {
    return this._todayScore;
  }

  /**
   * Get the keyData object.
   * @return {Record<KeyDataType>} The _keyData object.
   */
  get keyData(): KeyDataType {
    return this._keyData;
  }
}

export default UserMainData;
