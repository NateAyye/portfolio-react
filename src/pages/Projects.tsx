import ProjectCard from '@/components/project-card';
import { Button } from '@/components/ui/button';
import { useAppContext } from '@/context/use-context';
import { projects, tags } from '@/lib/constants';
import { Cross2Icon } from '@radix-ui/react-icons';
import React from 'react';

function compareTags(selectedTags: string[], projectTags: string[], tolerance?: number) {
  if (!tolerance) tolerance = 0;
  let matches = 0;
  for (let i = 0; i < selectedTags.length; i++) {
    if (projectTags.includes(selectedTags[i])) {
      matches++;
    }
  }
  if (matches >= selectedTags.length - tolerance) {
    return true;
  }
  return false;
}

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = () => {
  const { headerHeight } = useAppContext();
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = React.useState(projects);
  return (
    <div
      className="p-3 max-w-screen-2xl mx-auto space-y-3"
      style={{ paddingTop: `${headerHeight}px` }}
    >
      <h1 className="text-4xl my-6 text-center font-dela underline underline-offset-8 decoration-4 decoration-emerald-400 ">
        <b className="text-emerald-400">//</b> All Projects
      </h1>
      <h2 className="font-dela text-3xl px-1">Tags:</h2>
      <small className="font-medium text-muted-foreground px-4">
        Select the tags in order to sort the projects.
      </small>
      <div className="flex flex-wrap gap-x-4 gap-y-2 p-2 rounded  border ">
        {tags.map((tag) => {
          if (selectedTags.includes(tag)) return;
          return (
            <Button
              className="border bg-transparent text-foreground hover:text-background active:text-foreground focus:text-inherit text-sm rounded m-0 px-2 py-0.5"
              onClick={() => {
                setSelectedTags((prev) => [...prev, tag]);
                setFilteredProjects((prev) => prev.filter((project) => project.tags.includes(tag)));
              }}
              key={tag}
            >
              {tag}
            </Button>
          );
        })}
      </div>
      {!selectedTags.length ? null : (
        <>
          <h2 className="font-dela text-3xl px-1">Filters:</h2>
          <div className="flex flex-wrap gap-x-4 gap-y-2 p-2 rounded  border ">
            {selectedTags.map((tag) => (
              <Button
                className="group border py-0.5 px-2 pl-6 bg-transparent text-foreground hover:bg-destructive hover:border-red-500/40 hover:text-destructive-foreground active:text-foreground focus:text-inherit text-sm rounded m-0"
                onClick={() => {
                  const filteredTags = [...selectedTags].filter((t) => t !== tag);
                  setSelectedTags(filteredTags);

                  if (!filteredTags.length) return setFilteredProjects(projects);

                  setFilteredProjects(
                    projects.filter((project) => compareTags(filteredTags, project.tags)),
                  );
                }}
                key={tag}
              >
                {tag}
                <Cross2Icon className="ml-2 opacity-0 group-hover:opacity-100" />
              </Button>
            ))}
          </div>
        </>
      )}
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
