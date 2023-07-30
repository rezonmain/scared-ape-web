import { auth } from "@/services/Auth";
import { redirect } from "react-router-dom";

async function yeetLoader() {
  auth.logout();
  return redirect("/auth");
}
export { yeetLoader };
