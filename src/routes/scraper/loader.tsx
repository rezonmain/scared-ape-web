import { ScraperDto } from "@/dto/scraper.dto";
import { api } from "@/utils/api";

async function scraperLoader() {
  try {
    return await api<ScraperDto>(`/scraper`);
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { scraperLoader };
