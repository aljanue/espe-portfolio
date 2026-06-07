import type { PortfolioData, Project, Experience } from "../../data/portfolio";

export class ContentfulMapper {
  /**
   * Maps raw entries from Contentful into the PortfolioData domain model.
   */
  public static mapToPortfolioData(
    personalInfoRaw: any,
    quoteRaw: any,
    projectEntries: any[],
    experienceEntries: any[],
    socialEntries: any[]
  ): PortfolioData {
    
    // Map Personal Info
    const personalInfo = {
      name: personalInfoRaw?.name || "",
      subheadline: personalInfoRaw?.subheadline || "",
      jobTitle: personalInfoRaw?.jobTitle || "",
      badgeText: personalInfoRaw?.badgeText || "",
      copyrightName: personalInfoRaw?.copyrightName || personalInfoRaw?.name || "",
      bioParagraphs: personalInfoRaw?.bioParagraphs || [],
      email: personalInfoRaw?.email || "",
      phone: personalInfoRaw?.phoneNumber ? String(personalInfoRaw.phoneNumber) : "",
      location: personalInfoRaw?.location || "",
      avatarUrl: personalInfoRaw?.avatarUrl?.fields?.file?.url 
        ? `https:${personalInfoRaw.avatarUrl.fields.file.url}` 
        : undefined,
      useEnglish: personalInfoRaw?.useEnglish, // Might be undefined, which is fine
    };

    // Map Quote (if exists)
    const quote = quoteRaw && quoteRaw.text ? {
      text: quoteRaw.text,
      author: quoteRaw.author || undefined,
    } : undefined;

    // Map Projects
    const projects: Project[] = projectEntries.map((item) => {
      const fields = item.fields;
      return {
        id: item.sys.id,
        title: fields.title || "",
        category: fields.category || "",
        description: fields.description || "",
        imageUrl: fields.imageUrl?.fields?.file?.url ? `https:${fields.imageUrl.fields.file.url}` : "",
        accentColor: fields.accentColor,
        year: fields.year,
        client: fields.client,
        role: fields.role,
        sections: fields.sections?.map((sec: any) => {
          const secFields = sec.fields;
          return {
            type: secFields.type || "brand-intro",
            headline: secFields.headline,
            description: secFields.description,
            logoText: secFields.logoText,
            backgroundImageUrl: secFields.backgroundImageUrl?.fields?.file?.url 
              ? `https:${secFields.backgroundImageUrl.fields.file.url}` 
              : undefined,
            overlayText: secFields.overlayText,
            imageUrl: secFields.imageUrl?.fields?.file?.url 
              ? `https:${secFields.imageUrl.fields.file.url}` 
              : undefined,
            imagePosition: secFields.imagePosition || "left",
            mediaItems: secFields.mediaItems?.map((med: any) => ({
              imageUrl: med.fields?.imageUrl?.fields?.file?.url 
                ? `https:${med.fields.imageUrl.fields.file.url}` 
                : "",
              caption: med.fields?.caption,
              type: med.fields?.type || "photo",
            })),
          };
        }) || [],
      };
    });

    // Map Experiences
    const experiences: Experience[] = experienceEntries.map((item) => {
      const fields = item.fields;
      return {
        id: item.sys.id,
        company: fields.company || "",
        role: fields.role || "",
        period: fields.period || "",
        description: fields.description || "",
        logoText: fields.logoText,
      };
    });

    const fetchedSocials = socialEntries.map((item) => ({
      label: item.fields.label || "",
      url: item.fields.url || ""
    }));

    const socials = [...fetchedSocials];
    if (personalInfo.email && !socials.some(s => s.label.toLowerCase() === 'email' || s.url.includes('mailto:'))) {
      socials.push({
        label: "Email",
        url: `mailto:${personalInfo.email}`
      });
    }

    return {
      personalInfo,
      quote,
      projects,
      experiences,
      socials
    };
  }
}
