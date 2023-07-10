import { FaTelegram, FaClock } from "react-icons/fa";
import ms from "ms";
import { IScraper } from "@/models/Scraper";
import { Icon } from "../ui/Icon/Icon";
import { Tooltip } from "../ui/Tooltip/Tooltip";
import { useAppStore } from "@/context/app/app.context";
import { Button } from "../ui/Button/Button";

interface ScraperCardProps {
  scraper: IScraper;
}

const ScraperCard = ({ scraper }: ScraperCardProps) => {
  const { user } = useAppStore();
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {scraper.name}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {scraper.description}
      </p>
      <div className="flex flex-row items-center gap-6">
        {scraper.status === "active" && (
          <div>
            <span className="inline-flex mx-1 w-3 h-3 bg-green-500 rounded-full"></span>
            <span>Active</span>
          </div>
        )}
        {scraper.shouldNotifyChanges && (
          <div className="flex flex-row items-center gap-1">
            <FaTelegram />
            <span>Notifies changes</span>
          </div>
        )}
        <Tooltip
          text={`Scraper runs every ${ms(scraper.interval * 1000, {
            long: true,
          })} `}
        >
          <div className="flex flex-row items-center gap-1">
            <FaClock />
            <span>{ms(scraper.interval * 1000)}</span>
          </div>
        </Tooltip>
      </div>
      <div className="w-full">
        <Button
          className="ml-auto block"
          disabled={!user || user.role !== "pyro"}
        >
          See runs
        </Button>
      </div>
    </div>
  );
};

export { ScraperCard };