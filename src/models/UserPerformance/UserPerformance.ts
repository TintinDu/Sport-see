/**
 * class UserPerformance - data modeling
 */

import { DataType, KindType, UserPerformanceType } from "./UserPerformanceType";

class UserPerformance implements UserPerformanceType {
  private readonly _userId: number;
  private readonly _data: DataType[];
  private readonly _kind: KindType;
  /**
   * @param {object} data - The data value.
   */
  constructor(data: UserPerformanceType) {
    this._userId = data.userId;
    this._data = data.data;
    this._kind = data.kind;
  }

  /**
   * Get the userId value.
   * @return {number} The _userId value
   */
  get userId(): number {
    return this._userId;
  }

  /**
   * Get the data value.
   * @return {number} The _datas value
   */
  get data(): DataType[] {
    return this._data;
  }

  /**
   * Get the datas value.
   * @return {number} The _datas value
   */
  get kind(): KindType {
    return this._kind;
  }
}

export default UserPerformance;
