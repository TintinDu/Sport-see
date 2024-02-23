export type UserMainDataType = {
  id: number;
  userInfos: UserInfosType;
  todayScore?: number;
  score?: number;
  keyData: KeyDataType;
};

export type UserInfosType = {
  firstName: string;
  lastName: string;
  age: number;
};

export type KeyDataType = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};
