import { Navigate, Route, Routes } from "react-router-dom";
import { AppStateProvider } from "./state.jsx";
import Layout from "./components/Layout.jsx";
import Gate from "./pages/Gate.jsx";
import Login from "./pages/auth/Login.jsx";
import Signup from "./pages/auth/Signup.jsx";
import AthleteHome from "./pages/athlete/Home.jsx";
import MentalRep from "./pages/athlete/MentalRep.jsx";
import CheckIn from "./pages/athlete/CheckIn.jsx";
import { Help, Toolbox } from "./pages/athlete/Toolbox.jsx";
import Progress from "./pages/athlete/Progress.jsx";
import Pulse from "./pages/coach/Pulse.jsx";
import Completion from "./pages/coach/Completion.jsx";
import Season from "./pages/coach/Season.jsx";
import Tool from "./pages/coach/Tool.jsx";
import Overview from "./pages/admin/Overview.jsx";
import Teams from "./pages/admin/Teams.jsx";
import Content from "./pages/admin/Content.jsx";

export default function App() {
  return (
    <AppStateProvider>
      <div className="app">
        <Routes>
          <Route path="/" element={<Gate />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route path="/athlete" element={<Layout role="athlete" />}>
            <Route index element={<AthleteHome />} />
            <Route path="rep" element={<MentalRep />} />
            <Route path="check-in" element={<CheckIn />} />
            <Route path="toolbox" element={<Toolbox />} />
            <Route path="toolbox/:id" element={<Toolbox />} />
            <Route path="help" element={<Help />} />
            <Route path="progress" element={<Progress />} />
          </Route>

          <Route path="/coach" element={<Layout role="coach" />}>
            <Route index element={<Pulse />} />
            <Route path="completion" element={<Completion />} />
            <Route path="season" element={<Season />} />
            <Route path="tool" element={<Tool />} />
          </Route>

          <Route path="/admin" element={<Layout role="admin" />}>
            <Route index element={<Overview />} />
            <Route path="teams" element={<Teams />} />
            <Route path="content" element={<Content />} />
          </Route>

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </AppStateProvider>
  );
}
