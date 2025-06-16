import { ProjectCard } from '@/components/ProjectCard';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Moodify',
    description: 'Developed a full-stack web application that analyzes sentences and classifies them as positive, negative, or neutral. It uses sentiment analysis to recommend to classify emotions being delivered in the sentence. The frontend is built with React, while the backend leverages Flask with Python for machine learning.',
    link: '#',
    tags: ['Reactjs', 'Flask', 'Textblob', 'JavaScript', 'Python'],
  },
  {
    title: 'Priority Classification',
    description: 'Grouped data by combinations of columns such as priority and type to calculate cumulative percentages for each classification bucket. Calculated month wise, priority wise, time wise cumulative percentages and updated the detailed analysis on an excel sheet.',
    link: '#',
    tags: ['Python', 'Pandas', 'Excel'],
  },
  {
    title: 'Homestay',
    description: 'Developed the frontend of a Homestay application using React, implementing features like login, sign-up, and booking. Built responsive UI components for user authentication and booking management, ensuring a smooth user experience. Optimized performance and maintained state management using React hooks.',
    link: '#',
    tags: ['React', 'JavaScript', 'HTML', 'CSS', 'Node'],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen w-full font-serif text-amber-100 overflow-x-hidden" style={{ backgroundImage: 'url(/home_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90 z-0" />
      <main className="relative z-10 w-full max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-amber-200 mb-4">My Projects</h1>
          <div className="w-24 h-1 bg-amber-700/50 mx-auto mb-6"></div>
          <p className="text-amber-100/80 text-lg max-w-2xl mx-auto">
            A collection of my work showcasing expertise in web development, data analysis, and machine learning.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>

        <div className="mt-16">
          <a 
            href="/" 
            className="inline-flex items-center text-amber-300 hover:text-amber-200 transition-colors group"
          >
            <span className="mr-2">←</span>
            Back to Main
          </a>
        </div>
      </main>
    </div>
  );
};

export default Projects; 