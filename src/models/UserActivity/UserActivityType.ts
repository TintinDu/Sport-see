export type SessionType = {
  day: string;
  kilogram: number;
  calories: number;
};

export type UserActivityType = {
  userId: number;
  sessions: SessionType[];
};
