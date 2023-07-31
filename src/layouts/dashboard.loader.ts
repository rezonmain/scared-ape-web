import { auth } from "@/services/Auth";
import { redirect } from "react-router-dom";

const dashboardLoader = () => {
  const { user } = auth;
  if (!user) {
    return redirect("/auth");
  }
  return null;
};

export { dashboardLoader };
