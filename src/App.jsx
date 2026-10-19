//import { usePage } from "./layout/PageContext";
import Layout from "./layout/Layout";
import Register from "./auth/Register";
import Login from "./auth/Login";
import ActivitiesPage from "./activities/ActivitiesPage";
import ActivityPage from "./activities/ActivityPage";
import Error404 from "./Error404.jsx";
import { Route, Routes } from "react-router";
import RoutinesPage from "./routines/RoutinesPage.jsx";
import RoutinePage from "./routines/RoutinePage.jsx";

/**
 * Fitness Trackr is a platform where fitness enthusiasts can share their workouts and
 * discover new routines. Anyone can browse the site and make an account, and users with an
 * account will be able to upload and manage their own activities.
 */
export default function App() {
  // const { page } = usePage();

  // if (page === "register") return <Register />;
  // if (page === "login") return <Login />;
  // if (page === "activities") return <ActivitiesPage />;

  // return <Error404 />;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<ActivitiesPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="activities" element={<ActivitiesPage />} />
        <Route path="activities/:id" element={<ActivityPage />} />
        <Route path="routines" element={<RoutinesPage />} />
        <Route path="routines/:id" element={<RoutinePage />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
