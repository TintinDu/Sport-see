import axios from "axios";

// faire une condition pour basculer de données réelles aux données mockées
// variable d'environnement

// instanciation de chacune des classes

const test = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/user/12`);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
const getUserMainData = (userId: string) => {
  return axios.get(`http://localhost:3000/user/${userId}`);
};
const getUserActivity = (userId: string) => {
  return axios.get(`http://localhost:3000/user/${userId}/activity`);
};
const getUserAverageSessions = (userId: string) => {
  return axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
};
const getUserPerformance = (userId: string) => {
  return axios.get(`http://localhost:3000/user/${userId}/performance`);
};

export const UserService = {
  test,
  getUserMainData,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
};

export default UserService;
