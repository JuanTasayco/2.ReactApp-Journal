import { Route, Routes } from "react-router";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/auth/*" element={<AuthRoutes></AuthRoutes>}></Route>
      <Route path="/*" element={<JournalRoutes></JournalRoutes>}></Route>
    </Routes>
  );
};
