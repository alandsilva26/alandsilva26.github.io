export default interface Project {
    name: string;
    shortDescription: string;
    description?: string;
    github?: string;
    slug?: string;
    featured: boolean;
    websiteLink?: string;
    images?: string[];
    tags: string[];
    primaryLanguage: {
        name: string;
        color?: string;
    };
    languages?: string[];
}
