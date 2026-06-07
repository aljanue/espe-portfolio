import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import type { PortfolioData } from "../data/portfolio";
import { PortfolioService } from "../services/portfolioService";

export function usePortfolio() {
  const { i18n } = useTranslation();
  const [data, setData] = useState<PortfolioData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function loadData() {
      try {
        setIsLoading(true);
        const result = await PortfolioService.fetchPortfolioData(i18n.language);
        if (isMounted) {
          setData(result);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err : new Error("Unknown error occurred"));
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadData();

    return () => {
      isMounted = false;
    };
  }, [i18n.language]);

  return { data, isLoading, error };
}
