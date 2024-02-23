import axios from "axios";
import UserMainData from "../models/UserMainData/UserMainData";
import { mockData } from "../__mock__/data";

const isDevelopment = process.env.NODE_ENV === "development";

const getUserMainData = (userId: number) => {
  try {
    if (isDevelopment) {
      const userData = mockData.USER_MAIN_DATA.find(({ id }) => id === userId);
      const userMainData = userData ? new UserMainData(userData) : null;
      return userMainData;
    }
    // let userMainData;
    // const response = await axios.get(`http://localhost:3000/user/${userId}`);

    // if ("data" in response) {
    //   userMainData = response.data;
    // } else {
    //   // Handle the case where the response is already the user main data
    //   userMainData = response;
    // }
    // return userMainData;
  } catch (error) {
    console.error("Error fetching user main data:", error);
  }
};
const getUserActivity = (userId: number) => {
  return axios.get(`http://localhost:3000/user/${userId}/activity`);
};
const getUserAverageSessions = (userId: number) => {
  return axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
};
const getUserPerformance = (userId: number) => {
  return axios.get(`http://localhost:3000/user/${userId}/performance`);
};

export const UserService = {
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};
