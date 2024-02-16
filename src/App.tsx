import "./App.css";
import userService from "./services";
import { NavBar } from "./components/NavBar/NavBar";

const user = await userService.test();

console.log(user);

export function App() {
  return (
    <>
      <NavBar />
      <h2>Bonjour {user.data.data.userInfos.firstName}</h2>
    </>
  );
}
