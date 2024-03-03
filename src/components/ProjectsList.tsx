import { useState } from "preact/hooks";
import { ProjectCard } from "./ProjectCard";
import _data from '../content/projects/projects.json';
import type Project from "../lib/types/Project";

const data = _data as Project[];

export const ProjectsList = () => {
    return (<section class="projects--main">
        <div class="bumps">
            <div class="left-bump"></div>
            <div class="right-bump"></div>
        </div>
        <div class="projects--background-image"></div>
        <div class="background-color"></div>
        <div class="container">
            <div class="projects--form">
                <div class="active-cyan-4">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Name"
                        aria-label="Search"
                        name="name"
                    />
                </div>
                <div class="active-cyan-4">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Description"
                        aria-label="Search"
                        name="description"
                    />
                </div>
                <div class="active-cyan-4">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Tag"
                        aria-label="Search"
                        name="tag"
                    />
                </div>
                <div class="active-cyan-4">
                    <input
                        class="form-control"
                        type="text"
                        placeholder="Language"
                        aria-label="Search"
                        name="language"
                    />
                </div>
            </div>
            <div class="row py-5">
                {data.map(project => {
                    return <ProjectCard project={project} />
                })}
            </div>
        </div>
    </section>);
}