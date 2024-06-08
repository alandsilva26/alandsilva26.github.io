import _data from '../content/projects/projects.json';
import type Project from '../lib/types/Project';
import { ProjectsList } from './Projectlist';

const data = _data.slice(0, 6) as Project[];

export const ProjectsPreview = () => {
    return (
        <div className="row py-5">
            <ProjectsList projects={data} />
        </div>
    );
};
