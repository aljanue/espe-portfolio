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
   * Obtiene los datos del portafolio.
   * Si Contentful está configurado, intenta obtenerlos desde allí (o de la caché).
   * Si falla o no está configurado, recurre a los datos mockup locales de forma asíncrona.
   */
  public static async fetchPortfolioData(locale: string = 'es'): Promise<PortfolioData> {
    const cacheKey = `portfolio_data_${locale}`;

    if (contentfulClient) {
      try {
        // 1. Comprobar si hay datos válidos en Caché (localStorage)
        const cachedStr = localStorage.getItem(cacheKey);
        if (cachedStr) {
          const cachedItem: CacheItem = JSON.parse(cachedStr);
          const isExpired = Date.now() - cachedItem.timestamp > CACHE_DURATION_MS;
          
          if (!isExpired) {
            console.log(`[Cache] Usando datos cacheados para idioma: ${locale}`);
            return cachedItem.data;
          } else {
            console.log(`[Cache] Caché expirada para idioma: ${locale}. Solicitando nuevos datos...`);
          }
        }

        // 2. Si no hay caché válida, descargar de Contentful
        const data = await ContentfulService.fetchPortfolioData(locale);
        
        // 3. Guardar los datos frescos en Caché con el timestamp actual
        const cacheItem: CacheItem = {
          timestamp: Date.now(),
          data: data
        };
        localStorage.setItem(cacheKey, JSON.stringify(cacheItem));
        console.log(`[Cache] Nuevos datos guardados en caché para idioma: ${locale}`);

        return data;

      } catch (error) {
        console.error("Error al obtener datos de Contentful, usando mock data:", error);
      }
    } else {
      console.warn("Contentful no está configurado (Faltan variables de entorno). Usando datos locales simulados.");
    }

    // Fallback: Retornar datos locales
    // (No guardamos en caché los mocks locales para no ensuciar el storage de un usuario que no tiene Contentful)
    const mockLang = (locale === 'en' ? 'en' : 'es') as 'es' | 'en';
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockData[mockLang] || mockData.es);
      }, 300);
    });
  }

  /**
   * Utilidad para limpiar la caché de forma manual.
   * Puede ser útil si en un futuro añades un botón oculto de "Refrescar" para ti misma.
   */
  public static clearCache(locale?: string) {
    if (locale) {
      localStorage.removeItem(`portfolio_data_${locale}`);
    } else {
      localStorage.removeItem('portfolio_data_es');
      localStorage.removeItem('portfolio_data_en');
    }
    console.log(`[Cache] Caché limpiada${locale ? ` para ${locale}` : ' por completo'}`);
  }
}
