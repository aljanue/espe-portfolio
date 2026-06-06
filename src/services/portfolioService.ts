import type { PortfolioData } from "../data/portfolio";
import { portfolioData as mockData } from "../data/portfolio";

/**
 * Service to handle fetching portfolio data.
 * This can easily be swapped to fetch from a real external API.
 */
export class PortfolioService {
  private static API_URL = import.meta.env.VITE_API_URL || "";

  /**
   * Fetches the portfolio data from the API.
   * If no API URL is configured, falls back to local mockup data.
   */
  public static async fetchPortfolioData(): Promise<PortfolioData> {
    if (!this.API_URL) {
      // Simulate API network latency
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(mockData);
        }, 300);
      });
    }

    try {
      const response = await fetch(`${this.API_URL}/portfolio`);
      if (!response.ok) {
        throw new Error(`Failed to fetch portfolio data: ${response.statusText}`);
      }
      return await response.json();
    } catch (error) {
      console.error("API Fetch failed, falling back to mock data:", error);
      return mockData;
    }
  }
}
