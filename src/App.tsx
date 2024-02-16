import sportSee from "/sportSee.svg";
import "./App.css";
import { test } from "./api";

const user = await test();

console.log(user);

export function App() {
  return (
    <>
      <h1 className="logo">
        <img src={sportSee} alt="Logo SportSee" />
      </h1>
      <h2>Bonjour {user.data.data.userInfos.firstName}</h2>
    </>
  );
}
