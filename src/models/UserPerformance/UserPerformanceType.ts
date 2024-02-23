export type DataType = {
  value: number;
  kind: number;
};
export type KindType = {
  1: string;
  2: string;
  3: string;
  4: string;
  5: string;
  6: string;
};

export type UserPerformanceType = {
  userId: number;
  kind: KindType;
  data: DataType[];
};
