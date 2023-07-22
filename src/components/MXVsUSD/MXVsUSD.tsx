import { useWidgetData } from "@/hooks/useWidgetData";
import { Spinner } from "flowbite-react";

const MXVsUSD = () => {
  const { json, isLoading } = useWidgetData("mx-vs-usd");

  return (
    <div>
      {isLoading && <Spinner />}
      {json && <pre>{JSON.stringify(json, null, 2)}</pre>}
    </div>
  );
};

export default MXVsUSD;
