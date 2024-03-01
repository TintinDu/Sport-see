export type DataType = {
  value: number;
  kind: number;
};
export type KindType = {
  [key: number]: string;
};

export type UserPerformanceType = {
  userId: number;
  kind: KindType;
  data: DataType[];
};
