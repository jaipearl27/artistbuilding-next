import WorkPage, { WorkData } from '@/components/work/work-page';
// import { getWork } from '@/lib/Contentful/Highlights/get-highlights';
import React from 'react';

const Projects = async () => {
  const work = undefined // (await getWork()) as WorkData[];

  //Render new section for every 4 works
  const renderWork = (work: WorkData[]) => {
    const sections = []; // Initialize an empty array to store the sections

    for (let i = 0; i < work.length; i += 4) {
      const workSection = work.slice(i, i + 4);

      // Push each section into the sections array instead of returning it
      sections.push(
        <section
          key={i}
          id={`projects`}
          className='animate-fade-in relative min-h-screen flex-col gap-16 bg-black py-2 text-3xl text-white md:flex md:py-16 md:text-4xl'
        >
          {workSection ? <WorkPage work={workSection} /> : null}
        </section>
      );
    }

    return sections; // Return the array of sections
  };

  return <React.Fragment>{work ? renderWork(work) : null}</React.Fragment>;
};

export default Projects;
