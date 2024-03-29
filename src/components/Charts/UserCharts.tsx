import styled from "styled-components";
import { UserActivityType } from "../../models/UserActivity/UserActivityType";
import { UserAverageSessionsType } from "../../models/UserAverageSessions/UserAverageSessionsType";
import { UserPerformanceType } from "../../models/UserPerformance/UserPerformanceType";
import { UserPerformanceChart } from "./UserPerformanceChart";
import { UserActivityChart } from "./UserActivityChart";
import { UserAverageSessionsChart } from "./UserAverageSessionsChart";
import { UserScoreChart } from "./UserScoreChart";
import { userPerformanceKind } from "../../constants/userPerformance.constants";

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
  name: number;
  calories: number;
  kilograms: number;
};

export type UserAverageSessionsFormattedData = {
  name: string;
  pv: number;
};

export type UserPerformanceFormattedData = {
  subject: string;
  A: number;
};

export type UserScoreFormattedData = {
  value: number;
};

const ChartContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
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
      name: userActivity.sessions.indexOf(session) + 1,
      calories: session.calories,
      kilograms: session.kilogram,
    }));

  const week = ["L", "M", "M", "J", "V", "S", "D"];
  const userAverageSessionsFormattedData:
    | UserAverageSessionsFormattedData[]
    | undefined = userAverageSessions?.sessions.map((session) => ({
    name: week[session.day - 1],
    pv: session.sessionLength,
  }));

  // ajout de données fictives en début et fin du tableau pour le style
  userAverageSessionsFormattedData?.push({
    name: " ",
    pv: 0,
  });
  userAverageSessionsFormattedData?.unshift({
    name: " ",
    pv: 0,
  });

  const userPerformanceFormattedData:
    | UserPerformanceFormattedData[]
    | undefined = userPerformance?.data.map((item) => ({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore - userPerformanceKind is a constant object
    subject: userPerformanceKind[userPerformance?.kind[item.kind]],
    A: item.value,
  }));

  const getUserScoreFormattedData = () => {
    if (userScore) {
      return [{ value: userScore * 100 }];
    }
    return [{ value: 0 }];
  };

  const userScoreFormattedData: UserScoreFormattedData[] =
    getUserScoreFormattedData();

  return (
    <>
      {userActivityFormattedData && (
        <UserActivityChart data={userActivityFormattedData} />
      )}
      <ChartContainer>
        {userAverageSessionsFormattedData && (
          <UserAverageSessionsChart data={userAverageSessionsFormattedData} />
        )}
        {userPerformanceFormattedData && (
          <UserPerformanceChart data={userPerformanceFormattedData} />
        )}
        {userScoreFormattedData && (
          <UserScoreChart data={userScoreFormattedData} />
        )}
      </ChartContainer>
    </>
  );
};
