export type SessionType = {
  day: number;
  sessionLength: number;
};

export type UserAverageSessionsType = {
  userId: number;
  sessions: SessionType[];
};
