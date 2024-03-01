import { UserActivityType } from "../../models/UserActivity/UserActivityType";
import { UserAverageSessionsType } from "../../models/UserAverageSessions/UserAverageSessionsType";
import { UserPerformanceType } from "../../models/UserPerformance/UserPerformanceType";

type ChartProps = {
  userActivity: UserActivityType | null | Promise<UserActivityType>;
  userPerformance: UserPerformanceType | null | Promise<UserPerformanceType>;
  userAverageSessions:
    | UserAverageSessionsType
    | null
    | Promise<UserAverageSessionsType>;
};

export const TestChart: React.FC<ChartProps> = ({
  userActivity,
  userAverageSessions,
  userPerformance,
}) => {
  if (
    userActivity instanceof Promise ||
    userPerformance instanceof Promise ||
    userAverageSessions instanceof Promise
  ) {
    return <div>Chargement...</div>;
  }
  return (
    <div>
      {userActivity?.sessions.map((session) => (
        <div key={session.calories}>{session.calories}</div>
      ))}
    </div>
  );
};
