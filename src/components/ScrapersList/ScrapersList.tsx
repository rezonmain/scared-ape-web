import { usePaginatedScrapers } from "@/hooks/usePaginatedScrapers";
import { Skeleton } from "../ui/Skeleton/Skeleton";
import { ScraperCard } from "../ScraperCard/ScraperCard";

const ScrapersList = () => {
  const { list, isLoading } = usePaginatedScrapers();

  return (
    <div className="w-full flex flex-row flex-wrap gap-8 justify-center">
      {isLoading && <Skeleton type="card" />}
      {list &&
        list.map((scraper) => (
          <ScraperCard key={scraper.knownId} scraper={scraper} />
        ))}
    </div>
  );
};

export { ScrapersList };
