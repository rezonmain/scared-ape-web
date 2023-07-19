import { PageLoad } from "@/components/ui/PageLoad/PageLoad";
import { useEffect } from "react";
import { redirect } from "react-router-dom";

export function YeetPage() {
  useEffect(() => {
    redirect("/dahboard");
  }, []);
  return <PageLoad />;
}
