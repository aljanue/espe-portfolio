import { createClient } from 'contentful';

// Load environment variables via Vite's import.meta.env
const spaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID || "";
const accessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN || "";
const environment = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT || "master";

// Only create the client if we have the minimum required credentials
export const contentfulClient = (spaceId && accessToken) 
  ? createClient({
      space: spaceId,
      accessToken: accessToken,
      environment: environment,
    })
  : null;
