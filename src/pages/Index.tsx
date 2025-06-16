import { useEffect, useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

function useUnscrambleName(scrambled: string, real: string, interval: number = 80) {
  const [display, setDisplay] = useState(scrambled);
  useEffect(() => {
    if (scrambled === real) {
      setDisplay(real);
      return;
    }
    let current = scrambled.split("");
    let target = real.split("");
    let steps = [];
    for (let i = 0; i < target.length; i++) {
      if (current[i] !== target[i]) steps.push(i);
    }
    let idx = 0;
    const timer = setInterval(() => {
      if (idx < steps.length) {
        current[steps[idx]] = target[steps[idx]];
        setDisplay(current.join(""));
        idx++;
      } else {
        clearInterval(timer);
        setDisplay(real);
      }
    }, interval);
    return () => clearInterval(timer);
  }, [scrambled, real, interval]);
  return display;
}

const useTypewriter = (text: string, speed = 50) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, speed]);

  return displayText;
};

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

const socialLinks = [
  { icon: Github, href: 'https://github.com/suriyaprakash500' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/suriyaprakash500/' },
  { icon: Mail, href: 'mailto:suriyaprakash500@gmail.com' },
];

const Index = () => {
  const scrambledName = "Sruyikpashar K";
  const realName = "Suriyaprakash K";
  const animatedName = useUnscrambleName(scrambledName, realName, 150);
  const typedTitle = useTypewriter("Web Dev/ML Enthusiast", 30);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setShowTitle(true);
    }, 100 * "Suriyaprakash K".length + 200);
    return () => clearTimeout(nameTimer);
  }, []);

  return (
    <>
      <div className="relative min-h-screen w-full font-serif text-amber-100 overflow-x-hidden" style={{ backgroundImage: 'url(/home_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <main className="relative z-10 w-full max-w-none mx-0 space-y-12">
          <header className="fixed top-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm z-20 flex justify-center w-full">
            <nav className="flex space-x-6 text-sm">
              <a href="#about" className="hover:text-amber-300 transition-colors">INIT</a>
              <a href="/projects" className="hover:text-amber-300 transition-colors">LOAD_PROJECTS</a>
              <a href="#contact" className="hover:text-amber-300 transition-colors">CONNECT</a>
            </nav>
          </header>

          <section id="hero" className="min-h-screen flex flex-col justify-center items-start text-left w-full pl-12 sm:pl-24 md:pl-32">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
              {animatedName}
              <span className="text-amber-300 animate-caret-blink">_</span>
            </h1>
            {showTitle && (
              <p className="text-lg sm:text-xl text-amber-300 mt-2">
                {typedTitle}
                <span className="animate-caret-blink">_</span>
              </p>
            )}
          </section>

          <section id="about" className="frame">
            <h2 className="frame-title">/ about_me</h2>
            <p>
              As a System Engineer at Infosys, I leverage my expertise in React, SAP HANA, and AWS to deliver high-quality solutions for various clients. I have over three years of experience in implementing responsive user interfaces, coordinating with front-end teams, and providing SAP HANA support. I am also proficient in Python and neural network libraries, having worked on face detection and data scraping projects during my internships at Fynd and Sciffer Analytics. I hold a Master's degree in Computer Science (Machine Intelligence) from Digital University Kerala. I am passionate about learning new technologies and applying them to real-world problems. I am always eager to collaborate with other professionals and contribute to the advancement of the tech industry.
            </p>
          </section>

          <section id="projects" className="frame">
            <h2 className="frame-title">/ projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          <footer id="contact" className="text-center py-12">
            <h2 className="text-2xl font-bold text-primary mb-4">[ Establish Connection ]</h2>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, i) => (
                <a key={i} href={link.href} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <link.icon className="h-8 w-8" />
                </a>
              ))}
            </div>
            <p className="text-muted-foreground text-sm mt-8">
              Built by Suriyaprakash K
            </p>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Index;
