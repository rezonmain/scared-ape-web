import { AlertProps } from "@/components/Alert/Alert";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { useCurrentColorScheme } from "./useCurrentColorScheme";

const useToastFromQuery = () => {
  const theme = useCurrentColorScheme();
  const [params, set] = useSearchParams();
  const showAlert = params.get("showAlert");

  useEffect(() => {
    if (!params.get("showAlert")) return;
    const message = params.get("message") ?? "";
    const type = params.get("type") as AlertProps["type"];
    toast(message, { theme, type });
    set();
  }, [showAlert, params]);
};

export { useToastFromQuery };
