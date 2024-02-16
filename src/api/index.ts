import axios from "axios";

export function test() {
  return axios.get(`http://localhost:3000/user/12`);
}
export function getUserMainData(userId: string) {
  return axios.get(`http://localhost:3000/user/${userId}`);
}
export function getUserActivity(userId: string) {
  return axios.get(`http://localhost:3000/user/${userId}/activity`);
}
export function getUserAverageSessions(userId: string) {
  return axios.get(`http://localhost:3000/user/${userId}/average-sessions`);
}
export function getUserPerformance(userId: string) {
  return axios.get(`http://localhost:3000/user/${userId}/performance`);
}
