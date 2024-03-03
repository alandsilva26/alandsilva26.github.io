import type Project from "../lib/types/Project";

export const filterProjects = (projects: Project[], filters: {
    name: string,
    description: string,
    language: string,
    tag: string
}): Project[] => {
    let filteredProjects = [...projects];
    let { name, description, language, tag } = filters;

    if (name !== "") {
        filteredProjects = filteredProjects.filter((item) =>
            item.name.toLowerCase().includes(name)
        );
    }

    if (description !== "") {
        filteredProjects = filteredProjects.filter((item) => {
            if (item.shortDescription.toLowerCase().includes(description)) {
                return item;
            } else if (item.description?.toLowerCase().includes(description)) {
                return item;
            } else {
                return null;
            }
        });
    }

    if (tag !== "") {
        filteredProjects = filteredProjects.filter((item) => {
            let containsTag = false;
            for (let i = 0; i < item.tags.length; i++) {
                if (item.tags[i].toLowerCase().includes(tag)) {
                    containsTag = true;
                    break;
                }
            }
            if (containsTag) {
                return item;
            }
            return null;
        });
    }

    if (language !== "") {
        filteredProjects = filteredProjects.filter((item) => {
            let containsLanguage = false;
            if (item.languages) {
                for (let i = 0; i < item.languages.length; i++) {
                    if (item.languages[i].toLowerCase().includes(language)) {
                        containsLanguage = true;
                        break;
                    }
                }
            }

            if (item.hasOwnProperty("primaryLanguage") && !containsLanguage) {
                if (item.primaryLanguage.name.toLowerCase().includes(language)) {
                    containsLanguage = true;
                }
            }

            if (containsLanguage) {
                return item;
            }

            return null;
        });
    }

    return filteredProjects;
};