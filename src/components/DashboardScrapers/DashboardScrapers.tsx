import { ScraperDto } from "@/dto/scraper.dto";
import { api } from "@/utils/api";
import { useLocation } from "react-router-dom";
import useSWR from "swr";
const DashboardScrapers = () => {
  const location = useLocation();
  const { data, isLoading, error } = useSWR(location, () =>
    api<ScraperDto[]>("/scrapers")
  );
};
