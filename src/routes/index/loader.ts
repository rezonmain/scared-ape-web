import { auth } from "@/services/Auth";
import { redirect } from "react-router-dom";

async function indexLoader() {
  const { user } = auth;
  if (user) return redirect("/scraper");
  return redirect("/auth");
}

export { indexLoader };
