import "./App.css";
import { test } from "./api";
import { NavBar } from "./components/NavBar/NavBar";

const user = await test();

console.log(user);

export function App() {
  return (
    <>
      <NavBar />
      <h2>Bonjour {user.data.data.userInfos.firstName}</h2>
    </>
  );
}
