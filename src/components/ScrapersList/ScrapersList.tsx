import { usePaginatedScrapers } from "@/hooks/usePaginatedScrapers";
import { Skeleton } from "../ui/Skeleton/Skeleton";
import { ScraperCard } from "../ScraperCard/ScraperCard";
import { first } from "@/utils/_";
import { ScraperWidgetProps } from "../ScraperWidget/ScraperWidget";

const ScrapersList = () => {
  const { list, isLoading } = usePaginatedScrapers();

  return (
    <div className="w-full flex flex-row flex-wrap gap-8 justify-center items-start">
      {isLoading && <Skeleton type="card" />}
      {list &&
        list.map((scraper) => (
          <ScraperCard
            key={scraper.knownId}
            scraper={scraper}
            widget={
              first(scraper.associatedWidgets) as ScraperWidgetProps["widget"]
            }
          />
        ))}
    </div>
  );
};

export { ScrapersList };
