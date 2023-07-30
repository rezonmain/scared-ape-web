import { ScraperDto } from "@/dto/scraper.dto";
import { api } from "@/utils/api";
import { Params, redirect } from "react-router-dom";

async function aScraperLoader({ params }: { params: Params }) {
  const knownId = params.knownId;
  if (!knownId) {
    return redirect("/scraper");
  }
  try {
    const requests = [
      api<ScraperDto>(`/scraper/${knownId}`),
      api<ScraperDto>(`/scraper/${knownId}/json`),
    ];
    const [scraper, json] = await Promise.all(requests);
    return { scraper, json };
  } catch (error) {
    return null;
  }
}

export { aScraperLoader };
