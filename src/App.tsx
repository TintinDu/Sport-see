import "./App.css";
import { UserService } from "./services";
import { NavBar } from "./components/NavBar/NavBar";
import { WelcomeMessage } from "./components/WelcomeMessage.tsx/WelcomeMessage";
import { mockData } from "./__mock__/data";
import UserMainData from "./models/UserMainData/UserMainData";

const user = await UserService.test();

console.log(user);

export function App() {
  const userData = mockData.USER_MAIN_DATA.find(({ id }) => id === 12);
  const userMainData = userData ? new UserMainData(userData) : null;

  return (
    <>
      <NavBar />
      {userMainData && <WelcomeMessage userMainData={userMainData} />}
    </>
  );
}
