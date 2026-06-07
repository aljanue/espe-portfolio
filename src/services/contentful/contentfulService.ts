import type { PortfolioData } from "../../data/portfolio";
import { contentfulClient } from "./contentfulClient";
import { ContentfulMapper } from "./contentfulMapper";

export class ContentfulService {
  /**
   * Fetches data from Contentful and maps it to the domain model.
   * @param locale 'es' or 'en'
   * @returns PortfolioData
   * @throws Error if client is not configured or fetch fails
   */
  public static async fetchPortfolioData(locale: string = 'es'): Promise<PortfolioData> {
    if (!contentfulClient) {
      throw new Error("Contentful client is not configured.");
    }

    const lang = locale === 'es' ? 'es' : 'en-US';

    // Fetch all required entries in parallel
    const [
      personalInfoEntries, 
      quoteEntries, 
      projectEntries, 
      experienceEntries
    ] = await Promise.all([
      contentfulClient.getEntries({ content_type: 'personalInfo', locale: lang, limit: 1 }),
      contentfulClient.getEntries({ content_type: 'quote', locale: lang, limit: 1 }),
      contentfulClient.getEntries({ content_type: 'project', locale: lang, include: 3 }),
      contentfulClient.getEntries({ content_type: 'experience', locale: lang, order: ['-fields.order'] as any })
    ]);

    const personalInfoRaw = personalInfoEntries.items[0]?.fields || {};
    const quoteRaw = quoteEntries.items[0]?.fields || null;

    return ContentfulMapper.mapToPortfolioData(
      personalInfoRaw,
      quoteRaw,
      projectEntries.items,
      experienceEntries.items
    );
  }
}
