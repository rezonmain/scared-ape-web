import { ChallengeSentDto } from "@/dto/auth.dto";
import { QueryAlert } from "@/types/QueryAlert";
import { ApiError } from "@/types/ApiResponse";
import { LifecycleData } from "@/types/LifecycleData";
import { api } from "@/utils/api";
import { redirect } from "react-router-dom";

async function authAction({ request }: { request: Request }) {
  const email = (await request.formData()).get("email");
  try {
    const challenge = await api<ChallengeSentDto>({
      url: `/auth?email=${email}`,
      method: "post",
    });
    return redirect(`/auth?challengeTo=${challenge.email}`);
  } catch (error) {
    if (error instanceof ApiError) {
      return new LifecycleData({ data: null, error });
    }
    if (error instanceof Error) {
      const params = new QueryAlert({
        title: "Something went wrong",
        message: error.message,
        type: "error",
      }).params;
      return redirect(`/auth?${params}`);
    }
    throw error;
  }
}

export { authAction };
