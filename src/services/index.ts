import axios, { AxiosResponse } from "axios"; // Importez AxiosResponse
import UserMainData from "../models/UserMainData/UserMainData";
import { mockData } from "../__mock__/data";
import UserActivity from "../models/UserActivity/UserActivity";
import UserAverageSessions from "../models/UserAverageSessions/UserAverageSessions";
import UserPerformance from "../models/UserPerformance/UserPerformance";
import { UserActivityType } from "../models/UserActivity/UserActivityType";
import { UserAverageSessionsType } from "../models/UserAverageSessions/UserAverageSessionsType";
import { UserPerformanceType } from "../models/UserPerformance/UserPerformanceType";
import { UserMainDataType } from "../models/UserMainData/UserMainDataType";

const isDevelopment = process.env.NODE_ENV === "development";
const getUserMainData = async (
  userId: number,
): Promise<UserMainDataType | null> => {
  try {
    if (isDevelopment) {
      const userData = mockData.USER_MAIN_DATA.find(({ id }) => id === userId);
      const userMainData = userData ? new UserMainData(userData) : null;
      return userMainData;
    }

    const response = await axios.get(`http://localhost:3000/user/${userId}`);
    const userMainData = new UserMainData(response.data.data);
    return userMainData;
  } catch (error) {
    console.error("Error fetching user main data:", error);
    return null;
  }
};

const getUserActivity = async (
  userId: number,
): Promise<UserActivityType | null> => {
  try {
    if (isDevelopment) {
      const UserActivityData = mockData.USER_ACTIVITY.find(
        (data) => data.userId === userId,
      );
      const userActivity = UserActivityData
        ? new UserActivity(UserActivityData)
        : null;
      return userActivity;
    }
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/user/${userId}/activity`,
    );
    const userActivity = new UserActivity(response.data.data);
    return userActivity;
  } catch (error) {
    console.error("Error fetching user activity data:", error);
    return null;
  }
};

const getUserAverageSessions = async (
  userId: number,
): Promise<UserAverageSessionsType | null> => {
  try {
    if (isDevelopment) {
      const userAverageSessionsData = mockData.USER_AVERAGE_SESSIONS.find(
        (data) => data.userId === userId,
      );
      const userAverageSessions = userAverageSessionsData
        ? new UserAverageSessions(userAverageSessionsData)
        : null;
      return userAverageSessions;
    }
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/user/${userId}/average-sessions`,
    );
    const userAverageSessions = new UserAverageSessions(response.data.data);
    return userAverageSessions;
  } catch (error) {
    console.error("Error fetching user average sessions data:", error);
    return null;
  }
};

const getUserPerformance = async (
  userId: number,
): Promise<UserPerformanceType | null> => {
  try {
    if (isDevelopment) {
      const userPerformanceData = mockData.USER_PERFORMANCE.find(
        (data) => data.userId === userId,
      );
      const userPerformance = userPerformanceData
        ? new UserPerformance(userPerformanceData)
        : null;
      return userPerformance;
    }
    const response: AxiosResponse = await axios.get(
      `http://localhost:3000/user/${userId}/performance`,
    );
    const userPerformance = new UserPerformance(response.data.data);
    return userPerformance;
  } catch (error) {
    console.error("Error fetching user performance data:", error);
    return null;
  }
};

export const UserService = {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
