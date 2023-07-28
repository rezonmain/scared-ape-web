import { QueryAlert } from "@/types/QueryAlert";
import { ApiError } from "@/types/ApiResponse";
import { LifecycleData } from "@/types/LifecycleData";
import { api } from "@/utils/api";
import { redirect } from "react-router-dom";

async function requestAccessAction({ request }: { request: Request }) {
  const email = (await request.formData()).get("email");
  try {
    const data = await api<{ email: string }>({
      url: `/access-request?email=${email}`,
      method: "post",
    });
    return redirect(`/request-access?email=${data.email}`);
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
      return redirect(`/request-access?${params}`);
    }
    throw error;
  }
}

export { requestAccessAction };
