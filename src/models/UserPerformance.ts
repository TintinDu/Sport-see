/**
 * class UserPerformance - data modeling
 */

type DataType = {
  value: number;
  kind: number;
};
type KindType = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};

type UserPerformanceType = {
  kind: KindType;
  data: DataType[];
};

class UserPerformance implements UserPerformanceType {
  private readonly _data: DataType[];
  private readonly _kind: KindType;
  /**
   * @param {object} data - The data value.
   */
  constructor(data: UserPerformanceType) {
    this._data = data.data;
    this._kind = data.kind;
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
