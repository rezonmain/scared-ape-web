import {
  Navigate,
  Outlet,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { DashboardLayout } from "./layouts/dashboard";
import { GlobalLayout } from "./layouts/global";
import { FloatingLayout } from "./layouts/floating";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      element={
        <GlobalLayout>
          <Outlet />
        </GlobalLayout>
      }
    >
      <Route
        element={
          <DashboardLayout>
            <Outlet />
          </DashboardLayout>
        }
      >
        <Route path="/" lazy={() => import("./routes/index")} />
        <Route path="/scraper" lazy={() => import("./routes/scraper")} />
        <Route path="/run" element={<div>Run</div>} />
        <Route
          path="/access-request"
          lazy={() => import("./routes/access-request")}
        />
      </Route>
      <Route
        element={
          <FloatingLayout>
            <Outlet />
          </FloatingLayout>
        }
      >
        <Route path="/auth" lazy={() => import("./routes/auth")}>
          <Route
            path="challenge/:token"
            lazy={() => import("./routes/auth/challenge")}
          />
          <Route path="yeet" lazy={() => import("./routes/auth/yeet")} />
        </Route>
        <Route
          path="/request-access"
          lazy={() => import("./routes/request-access")}
        />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

export { router };
