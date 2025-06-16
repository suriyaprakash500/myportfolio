import { useEffect, useState } from 'react';
import { ProjectCard } from '@/components/ProjectCard';
import { Github, Linkedin, Twitter, Mail, ArrowDown } from 'lucide-react';

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const nameTimer = setTimeout(() => {
      setShowTitle(true);
    }, 100 * "Suriyaprakash K".length + 200);
    return () => clearTimeout(nameTimer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Here you can add your form submission logic
    console.log({ name, email, message });
    setIsSubmitting(false);
  };

  return (
    <>
      <div className="relative min-h-screen w-full font-serif text-amber-100 overflow-x-hidden" style={{ backgroundImage: 'url(/home_bg.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <main className="relative z-10 w-full max-w-none mx-0 space-y-12">
          <header className="fixed top-0 left-0 right-0 p-4 bg-black/50 backdrop-blur-sm z-20">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
              <a href="/" className="text-amber-300 font-bold text-xl">SK</a>
              <div className="flex space-x-8">
                <a href="#about" className="hover:text-amber-300 transition-colors relative group">
                  INIT
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all" />
                </a>
                <a href="/projects" className="hover:text-amber-300 transition-colors relative group">
                  LOAD_PROJECTS
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all" />
                </a>
                <a href="#contact" className="hover:text-amber-300 transition-colors relative group">
                  CONNECT
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-300 group-hover:w-full transition-all" />
                </a>
              </div>
            </nav>
          </header>

          <section id="hero" className="min-h-screen flex flex-col justify-center items-start text-left w-full pl-12 sm:pl-24 md:pl-32">
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
            <div className="flex items-center gap-16">
              <div className="relative">
                <div className="w-80 h-80 rounded-lg overflow-hidden border-4 border-amber-500/30 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <img 
                    src="/profile.jpg" 
                    alt="Van Gogh Art" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-80 h-80 rounded-lg border-4 border-amber-500/20 transform -rotate-3 -z-10" />
              </div>
              <div className="max-w-2xl">
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-amber-200 to-amber-400 bg-clip-text text-transparent">
                  {animatedName}
                  <span className="text-amber-300 animate-caret-blink">_</span>
                </h1>
                {showTitle && (
                  <p className="text-lg sm:text-xl text-amber-300 mt-2">
                    {typedTitle}
                    <span className="animate-caret-blink">_</span>
                  </p>
                )}
              </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ArrowDown className="h-6 w-6 text-amber-300" />
            </div>
          </section>

          <section id="about" className="frame">
            <h2 className="frame-title">/ about_me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-amber-100/90 leading-relaxed">
                  As a System Engineer at Infosys, I leverage my expertise in React, SAP HANA, and AWS to deliver high-quality solutions for various clients. I have over three years of experience in implementing responsive user interfaces, coordinating with front-end teams, and providing SAP HANA support. I am also proficient in Python and neural network libraries, having worked on face detection and data scraping projects during my internships at Fynd and Sciffer Analytics. I hold a Master's degree in Computer Science (Machine Intelligence) from Digital University Kerala. I am passionate about learning new technologies and applying them to real-world problems. I am always eager to collaborate with other professionals and contribute to the advancement of the tech industry.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-amber-200">Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-amber-900/30 p-4 rounded-lg">
                    <h4 className="text-amber-300 mb-2">Frontend</h4>
                    <ul className="space-y-1 text-amber-100/80">
                      <li>React</li>
                      <li>TypeScript</li>
                      <li>Tailwind CSS</li>
                    </ul>
                  </div>
                  <div className="bg-amber-900/30 p-4 rounded-lg">
                    <h4 className="text-amber-300 mb-2">Backend</h4>
                    <ul className="space-y-1 text-amber-100/80">
                      <li>Python</li>
                      <li>Node.js</li>
                      <li>AWS</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="frame">
            <h2 className="frame-title">/ projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </section>

          <section id="contact" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
              <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-amber-100 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-2 bg-black/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-amber-100"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-amber-100 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2 bg-black/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-amber-100"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-amber-100 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full px-4 py-2 bg-black/50 border border-amber-500/30 rounded-lg focus:outline-none focus:border-amber-500 text-amber-100 min-h-[150px]"
                      placeholder="Your message"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-amber-500 text-black font-medium rounded-lg hover:bg-amber-400 transition-colors disabled:opacity-50"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              </div>
            </div>
          </section>

          <footer className="text-center py-12">
            <div className="container mx-auto px-4">
              <div className="flex justify-center space-x-6 mb-8">
                <a href="https://github.com/suriyaprakash-ks" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/suriyaprakash-ks/" target="_blank" rel="noopener noreferrer" className="text-amber-300 hover:text-amber-400 transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
              <p className="text-amber-100/60">© 2024 Suriyaprakash K. All rights reserved.</p>
            </div>
          </footer>
        </main>
      </div>
    </>
  );
};

export default Index;
