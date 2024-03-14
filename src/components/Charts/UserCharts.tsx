import styled from "styled-components";
import { UserActivityType } from "../../models/UserActivity/UserActivityType";
import { UserAverageSessionsType } from "../../models/UserAverageSessions/UserAverageSessionsType";
import { UserPerformanceType } from "../../models/UserPerformance/UserPerformanceType";
import { UserPerformanceChart } from "./UserPerformanceChart";
import { UserActivityChart } from "./UserActivityChart";
import { UserAverageSessionsChart } from "./UserAverageSessionsChart";
import { UserScoreChart } from "./UserScoreChart";

type ChartsProps = {
  userActivity: UserActivityType | null | Promise<UserActivityType>;
  userPerformance: UserPerformanceType | null | Promise<UserPerformanceType>;
  userAverageSessions:
    | UserAverageSessionsType
    | null
    | Promise<UserAverageSessionsType>;
  userScore: number | null | undefined;
};

export type UserActivityFormattedData = {
  name: string;
  calories: number;
  kilograms: number;
};

export type UserAverageSessionsFormattedData = {
  name: number;
  pv: number;
};

export type UserPerformanceFormattedData = {
  subject: string;
  A: number;
};

export type UserScoreFormattedData = {
  uv: number;
};

const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserCharts: React.FC<ChartsProps> = ({
  userActivity,
  userAverageSessions,
  userPerformance,
  userScore,
}) => {
  if (
    userActivity instanceof Promise ||
    userPerformance instanceof Promise ||
    userAverageSessions instanceof Promise
  ) {
    return <div>Chargement...</div>;
  }
  const userActivityFormattedData: UserActivityFormattedData[] | undefined =
    userActivity?.sessions.map((session) => ({
      name: session.day,
      calories: session.calories,
      kilograms: session.kilogram,
    }));

  const userAverageSessionsFormattedData:
    | UserAverageSessionsFormattedData[]
    | undefined = userAverageSessions?.sessions.map((session) => ({
    name: session.day,
    pv: session.sessionLength,
  }));

  const userPerformanceFormattedData:
    | UserPerformanceFormattedData[]
    | undefined = userPerformance?.data.map((item) => ({
    subject: userPerformance?.kind[item.kind],
    A: item.value,
  }));

  const userScoreFormattedData: UserScoreFormattedData[] | undefined = [
    { uv: userScore ?? 0 },
  ];

  const Div = styled.div`
    display: flex;
    flex-direction: row;
  `;

  return (
    <ChartContainer>
      {userActivityFormattedData && (
        <UserActivityChart data={userActivityFormattedData} />
      )}
      <Div>
        {userAverageSessionsFormattedData && (
          <UserAverageSessionsChart data={userAverageSessionsFormattedData} />
        )}
        {userPerformanceFormattedData && (
          <UserPerformanceChart data={userPerformanceFormattedData} />
        )}
        {userScoreFormattedData && (
          <UserScoreChart data={userScoreFormattedData} />
        )}
      </Div>
    </ChartContainer>
  );
};
