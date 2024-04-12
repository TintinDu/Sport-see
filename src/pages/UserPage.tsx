import { useEffect, useState } from "react";
import { UserService } from "../services";
import { NavBar } from "../components/NavBar/NavBar";
import { WelcomeMessage } from "../components/WelcomeMessage.tsx/WelcomeMessage";
import { SideBar } from "../components/SideBar/SideBar";
import { Container } from "../components/Container/Container";
import { UserCharts } from "../components/Charts/UserCharts";
import {
  KeyDataType,
  UserMainDataType,
} from "../models/UserMainData/UserMainDataType";
import { UserPerformanceType } from "../models/UserPerformance/UserPerformanceType";
import { UserAverageSessionsType } from "../models/UserAverageSessions/UserAverageSessionsType";
import { UserActivityType } from "../models/UserActivity/UserActivityType";
import { useParams } from "react-router-dom";
import styled from "styled-components";

export function UserPage() {
  const { id } = useParams();
  const userId = parseInt(id!);

  const [userData, setUserData] = useState<UserMainDataType | null>(null);
  const [userPerformance, setUserPerformance] =
    useState<UserPerformanceType | null>(null);
  const [userAverageSessions, setUserAverageSessions] =
    useState<UserAverageSessionsType | null>(null);
  const [userActivity, setUserActivity] = useState<UserActivityType | null>(
    null,
  );
  const [userScore, setUserScore] = useState<number | null | undefined>(null);
  const [userKeyData, setUserKeyData] = useState<
    KeyDataType | null | undefined
  >(null);

  useEffect(() => {
    (async () => {
      try {
        const [mainData, performanceData, averageSessionsData, activityData] =
          await Promise.all([
            UserService.getUserMainData(userId),
            UserService.getUserPerformance(userId),
            UserService.getUserAverageSessions(userId),
            UserService.getUserActivity(userId),
          ]);

        // Filtrer les valeurs indésirables avant de les définir
        setUserData(mainData || null);
        setUserScore(mainData?.score || mainData?.todayScore || null);
        setUserKeyData(mainData?.keyData || null);
        setUserPerformance(performanceData || null);
        setUserAverageSessions(averageSessionsData || null);
        setUserActivity(activityData || null);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    })();
  }, [userId]);

  if (!userData) {
    return (
      <>
        <h2>
          Un problème est survenu lors de votre authentification. Veuillez vous
          reconnecter.
        </h2>
      </>
    );
  }

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
  `;

  return (
    <>
      <NavBar />
      <Container>
        <SideBar />
        <Wrapper>
          <WelcomeMessage userMainData={userData} />
          <UserCharts
            userKeyData={userKeyData}
            userPerformance={userPerformance}
            userAverageSessions={userAverageSessions}
            userActivity={userActivity}
            userScore={userScore}
          />
        </Wrapper>
      </Container>
    </>
  );
}
