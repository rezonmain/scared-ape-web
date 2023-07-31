import { Json } from "@/models/Json";
import { Box } from "../ui/Box/Box";
import { Dates } from "@/utils/Dates";
import { Indicator } from "../ui/Indicator/Indicator";

const JSONBlock = ({ json }: { json: Json }) => {
  return (
    <Box className="p-2 flex flex-col gap-2">
      <div className="flex items-center gap-2 mb-2">
        <p className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          Scraped data
        </p>
        {json.status === "latest" && <Indicator />}
      </div>
      <p className="text-sm font-normal text-gray-700 dark:text-gray-400">
        {Dates.toLocal(json.createdAt ?? "")}
      </p>
      <div className="format rounded-lg p-2 max-w-full">
        <pre className="overflow-x-auto">
          {JSON.stringify(JSON.parse(json.json), null, 2)}
        </pre>
      </div>
    </Box>
  );
};

export { JSONBlock };
