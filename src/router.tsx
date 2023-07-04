import {
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route
        element={
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        }
      >
        <Route path="/dashboard" element={<div>Dashboard</div>} />
        <Route path="/scraper" element={<div>Scraper</div>} />
        <Route path="/run" element={<div>Run</div>} />
      </Route>
      <Route path="/auth" lazy={() => import("./routes/auth")} />
    </Route>
  )
);

export { router };
