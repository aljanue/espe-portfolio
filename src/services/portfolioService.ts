import type { PortfolioData } from "../data/portfolio";
import { portfolioData as mockData } from "../data/portfolio";
import { ContentfulService } from "./contentful/contentfulService";
import { contentfulClient } from "./contentful/contentfulClient";

const CACHE_DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours en milisegundos

interface CacheItem {
  timestamp: number;
  data: PortfolioData;
}

/**
 * Service to handle fetching portfolio data.
 * Acts as a Facade that fetches from Contentful if configured,
 * otherwise falls back to local mockup data.
 * Implements a 24-hour localStorage cache to minimize API calls.
 */
export class PortfolioService {
  /**
   * Retrieves portfolio data.
   * Fetches from Contentful if configured (and bypasses/uses cache).
   * Falls back to local mockup data asynchronously.
   */
  public static async fetchPortfolioData(locale: string = 'es'): Promise<PortfolioData> {
    const cacheKey = `portfolio_data_${locale}`;

    if (contentfulClient) {
      try {
        const cachedStr = localStorage.getItem(cacheKey);
        if (cachedStr) {
          const cachedItem: CacheItem = JSON.parse(cachedStr);
          const isExpired = Date.now() - cachedItem.timestamp > CACHE_DURATION_MS;
          
          if (!isExpired) {
            return cachedItem.data;
          }
        }

        const data = await ContentfulService.fetchPortfolioData(locale);
        
        const cacheItem: CacheItem = {
          timestamp: Date.now(),
          data: data
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheItem));

        return data;

      } catch (error) {
        console.error("Contentful fetch error, using mock data:", error);
      }
    } else {
      console.warn("Contentful is not configured (Missing env variables). Using local mock data.");
    }

    const mockLang = (locale === 'en' ? 'en' : 'es') as 'es' | 'en';
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData[mockLang] || mockData.es);
      }, 300);
    });
  }

  /**
   * Helper utility to forcefully clear the cache.
   */
  public static clearCache(locale?: string) {
    if (locale) {
      localStorage.removeItem(`portfolio_data_${locale}`);
    } else {
      localStorage.removeItem('portfolio_data_es');
      localStorage.removeItem('portfolio_data_en');
    }
  }
}
