export type SessionType = {
  date: string;
  kilogram: number;
  calories: number;
};

export type UserActivityType = {
  userId: number;
  sessions: SessionType[];
};
