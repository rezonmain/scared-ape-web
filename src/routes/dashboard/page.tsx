import { useSearchParams } from "react-router-dom";
import { useStore } from "@/context/app/app.context";
import { useEffect } from "react";
import { Validator } from "@/utils/Validate";

export function DashboardPage() {
  const [params, setParams] = useSearchParams();
  const { dispatch, user } = useStore();

  useEffect(() => {
    if (!params.has("cuid")) return;
    const validator = new Validator();
    const user = validator.gerUserFromQueryParams(params);
    dispatch({ type: "set_user", payload: user });
    setParams({});
  }, [dispatch, params, setParams]);

  return (
    <div className="mx-auto h-screen flex items-center justify-center flex-col max-w-sm">
      <pre className="text-white">
        <code>{JSON.stringify(user, null, 2)}</code>
      </pre>
    </div>
  );
}
