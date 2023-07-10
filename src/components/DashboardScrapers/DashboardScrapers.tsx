import { usePaginatedScrapers } from "@/hooks/usePaginatedScrapers";
import { Skeleton } from "../ui/Skeleton/Skeleton";
import { ScraperCard } from "../ScraperCard/ScraperCard";

const DashboardScrapers = () => {
  const { list, isLoading } = usePaginatedScrapers();

  return (
    <div>
      {isLoading && <Skeleton type="card" />}
      {list &&
        list.map((scraper) => (
          <ScraperCard key={scraper.knownId} scraper={scraper} />
        ))}
    </div>
  );
};

export { DashboardScrapers };
