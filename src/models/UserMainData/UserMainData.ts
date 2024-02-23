/**
 * class UserMainData - data modeling
 */

import {
  KeyDataType,
  UserInfosType,
  UserMainDataType,
} from "./UserMainDataType";

class UserMainData implements UserMainDataType {
  private readonly _id: number;
  private readonly _userInfos: UserInfosType;
  private readonly _todayScore?: number;
  private readonly _score?: number;
  private readonly _keyData: KeyDataType;
  /**
   * @param {object} data - The data value.
   */
  constructor(data: UserMainDataType) {
    this._id = data.id;
    this._userInfos = data.userInfos;
    this._todayScore = data.todayScore;
    this._score = data.score;
    this._keyData = data.keyData;
  }

  /**
   * Get the id value.
   * @return {number} The _id value
   */
  get id(): number {
    return this._id;
  }

  /**
   * Get the userInfos value.
   * @return {UserInfosType} The _userInfos value
   */
  get userInfos(): UserInfosType {
    return this._userInfos;
  }

  /**
   * Get the todayScore value.
   * @return {number | undefined} The _todayScore value
   */
  get todayScore(): number | undefined {
    return this._todayScore;
  }

  /**
   * Get the score value.
   * @return {number | undefined} The _score value
   */
  get score(): number | undefined {
    return this._score;
  }

  /**
   * Get the keyData object.
   * @return {KeyDataType} The _keyData object.
   */
  get keyData(): KeyDataType {
    return this._keyData;
  }
}

export default UserMainData;
