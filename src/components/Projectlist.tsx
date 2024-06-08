import type Project from '../lib/types/Project';
import { ProjectCard } from './ProjectCard';

export const ProjectsList = ({ projects }: { projects: Array<Project> }) => {
    return (
        <>
            {projects.map((project) => (
                <ProjectCard key={project.name} project={project} />
            ))}
        </>
    );
};
