import { UserActivityType } from "../../models/UserActivity/UserActivityType";
import { UserAverageSessionsType } from "../../models/UserAverageSessions/UserAverageSessionsType";
import { UserPerformanceType } from "../../models/UserPerformance/UserPerformanceType";
import { UserPerformanceChart } from "./UserPerformanceChart";

type ChartProps = {
  userActivity: UserActivityType | null | Promise<UserActivityType>;
  userPerformance: UserPerformanceType | null | Promise<UserPerformanceType>;
  userAverageSessions:
    | UserAverageSessionsType
    | null
    | Promise<UserAverageSessionsType>;
};

export type UserPerformanceFormattedData = {
  subject: string;
  A: number;
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

  const userPerformanceFormattedData:
    | UserPerformanceFormattedData[]
    | undefined = userPerformance?.data.map((item) => ({
    subject: userPerformance?.kind[item.kind],
    A: item.value,
  }));

  return (
    <div>
      {userPerformanceFormattedData && (
        <UserPerformanceChart data={userPerformanceFormattedData} />
      )}
    </div>
  );
};
