import { ChallengeSentDto } from "@/dto/auth.dto";
import { ApiError } from "@/types/ApiResponse";
import { LifecycleData } from "@/types/LifecycleData";
import { api } from "@/utils/api";
import { redirect } from "react-router-dom";

async function authAction({ request }: { request: Request }) {
  const email = (await request.formData()).get("email");
  try {
    const data = await api<ChallengeSentDto>({
      url: `/auth?email=${email}`,
      method: "post",
    });
    return redirect(`/auth?challengeTo=${data.opts.email}`);
  } catch (error) {
    if (error instanceof ApiError) {
      return new LifecycleData({ data: null, error });
    }
    throw error;
  }
}

export { authAction };
