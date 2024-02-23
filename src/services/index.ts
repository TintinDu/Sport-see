import axios from "axios";
import UserMainData from "../models/UserMainData/UserMainData";
import { mockData } from "../__mock__/data";
import UserActivity from "../models/UserActivity/UserActivity";
import UserAverageSessions from "../models/UserAverageSessions/UserAverageSessions";
import UserPerformance from "../models/UserPerformance/UserPerformance";

const isDevelopment = process.env.NODE_ENV === "development";

const getUserMainData = (userId: number) => {
  try {
    if (isDevelopment) {
      const userData = mockData.USER_MAIN_DATA.find(({ id }) => id === userId);
      const userMainData = userData ? new UserMainData(userData) : null;
      return userMainData;
    }
    // return axios.get(`http://localhost:3000/user/${userId}`);
  } catch (error) {
    console.error("Error fetching user main data:", error);
  }
};
const getUserActivity = (userId: number) => {
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
    return axios.get(`http://localhost:3000/user/${userId}/activity`);
  } catch (error) {
    console.error("Error fetching user main data:", error);
  }
};

const getUserAverageSessions = (userId: number) => {
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
    return axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
  } catch (error) {
    console.error("Error fetching user main data:", error);
  }
};
const getUserPerformance = (userId: number) => {
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
    return axios.get(`http://localhost:3000/user/${userId}/performance`);
  } catch (error) {
    console.error("Error fetching user main data:", error);
  }
};

export const UserService = {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
