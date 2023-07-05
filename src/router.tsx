import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        }
      >
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/scraper" lazy={() => import("./routes/scraper")} />
        <Route path="/run" element={<div>Run</div>} />
      </Route>
      <Route path="/auth" lazy={() => import("./routes/auth")}>
        <Route
          path="challenge/:token"
          lazy={() => import("./routes/auth/challenge")}
        />
      </Route>
    </>
  )
);

export { router };
