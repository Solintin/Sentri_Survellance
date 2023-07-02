import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import { Toaster } from "react-hot-toast";
import Scrolltotop from "./components/UI/ScrollToTop";
// import { RequireAuth } from "./Utils/RequireAuth";
import {
  Camera,
  DashBoard,
  Landing,
  Registration,
  Admin,
  Event,
  CameraDetail,
  ClientProfile,
  Auth,
  Login,
  Report,
  CreateReport,
  AdminSettings,
  Onboarding,
  ArchiveEvent,
} from "./Pages";

const App = () => {
  return (
    <div className="w-full h-full text-sm text-[16px] font">
      <div>
        <Toaster
          toastOptions={{
            duration: 5000,
            position: "top-center",
            success: {
              style: {
                background: "#222",

                color: "#fff",
              },
            },
            error: {
              duration: 5000,
              position: "top-center",
              style: {
                background: "red",
                color: "#fff",
              },
            },
          }}
        />
      </div>
      <Router>
        <Scrolltotop />
        <Routes>
          {/*    AUTH PAGE */}
          <Route exact path="/auth" element={<Auth />}>
            <Route exact path="signup" element={<Registration />} />
            <Route exact path="signin" element={<Login />} />
          </Route>

          <Route exact path="/" element={<Landing />} />
          {/*    LANDING PAGE */}
          <Route exact path="/dashboard" element={<DashBoard />} />
          <Route exact path="/camera" element={<Camera />} />
          <Route exact path="/camera/:id" element={<CameraDetail />} />
          <Route exact path="/client" element={<ClientProfile />} />
          <Route exact path="/events" element={<Event />} />
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/onboarding" element={<Onboarding />} />
          <Route exact path="/archive" element={<ArchiveEvent />} />
          <Route exact path="/report/create" element={<CreateReport />} />
          <Route exact path="/admin/dashboard" element={<Admin />} />
          <Route exact path="/admin/settings" element={<AdminSettings />} />
          {/**Protected routes */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
