import * as React from "react";

const projects = [
  { id: 1, name: "firstproject", stacks: ["HTML, CSS, REACT"] },
  { id: 2, name: "secondproject", stacks: ["HTML, CSS"] },
  { id: 3, name: "thirdproject", stacks: ["HTML, JAVASCRIPT, CSS"] },
];

const ProjectCard = () => {
  return (
    <div>
      {projects.map((project, index) => {
        return (
          <div key={index}>
            <h2>project: {project.name}</h2>

            {project.stacks.map((stack, index) => {
              return (
                <div key={index}>
                  <li>tech: {stack}</li>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ProjectCard;
