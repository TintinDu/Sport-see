import "./App.css";
import { UserService } from "./services";
import { NavBar } from "./components/NavBar/NavBar";
import { WelcomeMessage } from "./components/WelcomeMessage.tsx/WelcomeMessage";
import { SideBar } from "./components/SideBar/SideBar";
import { Container } from "./components/Container/Container";

export function App() {
  const userMainData = UserService.getUserMainData(12);

  if (!userMainData) {
    return (
      <>
        <h2>
          Oups un problème est survenu lors de votre authentification. Veuillez
          vous reconnecter.
        </h2>
      </>
    );
  }

  return (
    <>
      <NavBar />
      <Container>
        <SideBar />
        <WelcomeMessage userMainData={userMainData} />
      </Container>
    </>
  );
}
