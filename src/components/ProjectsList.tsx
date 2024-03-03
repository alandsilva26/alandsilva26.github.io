import { ProjectCard } from './ProjectCard';
import _data from '../content/projects/projects.json';
import type Project from '../lib/types/Project';
import { useState, type ChangeEvent } from 'react';
import { filterProjects, type Filter } from './data';
// import type { Filter } from './data';
// import { useState } from 'preact/compat';
// import type { ChangeEvent } from 'preact/compat';

const data = _data as Project[];

export const ProjectsList = () => {
    const [projects, setProjects] = useState([...data]);
    const [filter, setFilter] = useState<Filter>({
        name: '',
        description: '',
        language: '',
        tag: '',
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.currentTarget;
        const newFilters = {
            ...filter,
            [name]: value.toLocaleLowerCase(),
        };

        setFilter(newFilters);
        setProjects(filterProjects(data, newFilters));
    };

    return (
        <section className="projects--main">
            <div className="bumps">
                <div className="left-bump"></div>
                <div className="right-bump"></div>
            </div>
            <div className="projects--background-image"></div>
            <div className="background-color"></div>
            <div className="container">
                <form className="projects--form">
                    <div className="active-cyan-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Name"
                            aria-label="Search"
                            name="name"
                            value={filter.name}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="active-cyan-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Description"
                            aria-label="Search"
                            name="description"
                            value={filter.description}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="active-cyan-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Tag"
                            aria-label="Search"
                            name="tag"
                            value={filter.tag}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="active-cyan-4">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Language"
                            aria-label="Search"
                            name="language"
                            value={filter.language}
                            onChange={handleChange}
                        />
                    </div>
                </form>
                <div className="row py-5">
                    {projects.map((project) => (
                        <ProjectCard key={project.name} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
