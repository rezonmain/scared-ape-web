import { UserDto } from "@/dto/auth.dto";
import { ApiError } from "@/types/ApiResponse";
import { api } from "@/utils/api";
import { redirect, type Params } from "react-router-dom";

async function challengeLoader({ params }: { params: Params }) {
  const token = params.token;
  if (!token) {
    redirect("/auth");
  }
  try {
    const user = await api<UserDto>(`/auth/challenge/${params.token}`);
    const redirectParams = new URLSearchParams({
      cuid: user.cuid,
      email: user.email,
      role: user.role,
      whitelist: user.whitelist.toString(),
    }).toString();
    return redirect(`/dashboard?${redirectParams}`);
  } catch (error) {
    if (error instanceof ApiError) {
      const redirectParams = new URLSearchParams({
        challengeError: error.content.error,
      }).toString();
      return redirect(`/auth?${redirectParams}`);
    }
    throw error;
  }
}

export { challengeLoader };
