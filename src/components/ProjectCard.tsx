import { AiOutlineStar, AiOutlineGithub } from "react-icons/ai";
import { HiOutlineLink } from "react-icons/hi";
import type Project from "../lib/types/Project";
import "../styles/components/project-card.scss";

const ProjectCard = ({ project }: { project: Project }) => {
    const {
        name,
        shortDescription,
        primaryLanguage,
        github,
        websiteLink,
        featured,
    } = project;

    let formattedDescription = shortDescription;

    let starClass = featured ? "icons star featured" : "icons star";

    if (formattedDescription.length > 200) {
        formattedDescription = formattedDescription.slice(0, 197) + "...";
    }

    return (
        <div class="col-lg-4 col-md-6 col-sm-12 project-item--wrapper">
            <article class="project-item text-break p-3">
                <div class="project-item--body ">
                    <h6 class="project-item--title">
                        <a href={github}>{name}</a>
                    </h6>
                    <p>{formattedDescription}</p>
                </div>
                <div class="project-item--footer">
                    <div
                        class="project-item--color"
                        style={{ backgroundColor: primaryLanguage.color }}
                    ></div>
                    <div class="project-item--language">{primaryLanguage.name}</div>
                    {github !== "" && github !== undefined ? (
                        <div class={starClass}>
                            <a href={github + "/stargazers"}>
                                <AiOutlineStar />
                            </a>
                        </div>
                    ) : featured ? (
                        <div class="icons star featured">
                            <AiOutlineStar />
                        </div>
                    ) : null}
                    {github !== "" && github !== undefined ? (
                        <div class="icons">
                            <a href={github}>
                                <AiOutlineGithub />
                            </a>
                        </div>
                    ) : null}
                    {websiteLink !== "" && websiteLink !== undefined ? (
                        <div class="icons">
                            <a href={websiteLink}>
                                <HiOutlineLink />
                            </a>
                        </div>
                    ) : null}
                </div>
            </article>
        </div>
    );
}

export { ProjectCard };