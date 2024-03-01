import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { UserPage } from "./pages/UserPage";

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<UserPage />} />
      </Routes>
    </Router>
  );
}
