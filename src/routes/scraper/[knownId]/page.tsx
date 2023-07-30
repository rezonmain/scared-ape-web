import { JSONBlock } from "@/components/JSONBlock/JSONBlock";
import { ScraperCard } from "@/components/ScraperCard/ScraperCard";
import { Json } from "@/models/Json";
import { IScraper } from "@/models/Scraper";
import { useLoaderData } from "react-router-dom";

function AScraperPage() {
  const data = useLoaderData() as { scraper: IScraper; json: Json };
  return (
    <div className="mx-auto w-[90vw] md:max-w-xl flex flex-col gap-4 lg:max-w-3xl 2xl:max-w-4xl">
      <ScraperCard scraper={data.scraper} />
      <JSONBlock json={data.json} />
    </div>
  );
}

export { AScraperPage };
