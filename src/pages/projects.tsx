import { ProjectCard } from '@/components/ProjectCard';
import { useEffect, useState } from 'react';

const projects = [
  {
    title: 'Project Cygnus',
    description: 'A decentralized data visualization platform using Web3 technologies and real-time GPU acceleration.',
    link: '#',
    tags: ['React', 'Three.js', 'Solidity', 'Web3'],
  },
  {
    title: 'Neural Net Weaver',
    description: 'An interactive application for building and training neural networks directly in the browser.',
    link: '#',
    tags: ['TypeScript', 'Python', 'TensorFlow.js'],
  },
  {
    title: 'Quantum Leap',
    description: 'A simulation of quantum computing principles with a retro-futuristic user interface.',
    link: '#',
    tags: ['Svelte', 'Rust', 'WASM'],
  },
];

const Projects = () => {
  // You may want to fetch or import your projects data here
  // For now, we'll just show a placeholder
  return (
    <div className="min-h-screen w-full font-serif text-amber-100 overflow-x-hidden" style={{ backgroundImage: 'url(/home_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="absolute inset-0 bg-black/60 z-0" />
      <main className="relative z-10 w-full max-w-none mx-0 py-24 px-0">
        <h1 className="text-4xl font-bold mb-8 text-amber-300 pl-12 sm:pl-24 md:pl-32 text-left">Projects</h1>
        <div className="grid gap-8 pl-12 sm:pl-24 md:pl-32 pr-4">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Projects; 