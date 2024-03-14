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
import { UserKeyData } from "../components/UserKeyData/UserKeyData";

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
    const fetchData = async () => {
      try {
        const mainData = await UserService.getUserMainData(userId);
        const performanceData = await UserService.getUserPerformance(userId);
        const averageSessionsData =
          await UserService.getUserAverageSessions(userId);
        const activityData = await UserService.getUserActivity(userId);

        // Filtrer les valeurs indésirables avant de les définir
        if (mainData) {
          setUserData(mainData);
          mainData.score
            ? setUserScore(mainData.score)
            : setUserScore(mainData.todayScore);
          setUserKeyData(mainData.keyData);
        }
        if (performanceData) {
          setUserPerformance(performanceData);
        }
        if (averageSessionsData) {
          setUserAverageSessions(averageSessionsData);
        }
        if (activityData) {
          setUserActivity(activityData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
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
  `;

  return (
    <>
      <NavBar />
      <Container>
        <SideBar />
        <Wrapper>
          <WelcomeMessage userMainData={userData} />
          <UserCharts
            userPerformance={userPerformance}
            userAverageSessions={userAverageSessions}
            userActivity={userActivity}
            userScore={userScore}
          />
          <UserKeyData userKeyData={userKeyData} />
        </Wrapper>
      </Container>
    </>
  );
}
