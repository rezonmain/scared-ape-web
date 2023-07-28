import { parseCookie } from "@/utils/_";
import { redirect } from "react-router-dom";
import { z } from "zod";

async function requestAccessLoader({ request }: { request: Request }) {
  if (new URL(request.url).searchParams.has("new")) return null;
  if (new URL(request.url).searchParams.has("email")) return null;
  const cookies = parseCookie(document.cookie);
  try {
    const email = z
      .string()
      .email()
      .parse(decodeURIComponent(cookies.lastAccessRequest));
    return redirect(`/request-access?email=${email}`);
  } catch {
    return null;
  }
}

export { requestAccessLoader };
