import { useWidgetData } from "@/hooks/useWidgetData";

const MXVsUSD = () => {
  const { json, isLoading } = useWidgetData("mx-vs-usd");

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      <pre>{JSON.stringify(json, null, 2)}</pre>
    </div>
  );
};

export default MXVsUSD;
