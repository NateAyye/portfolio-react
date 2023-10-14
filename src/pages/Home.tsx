import HeroSection from '@/components/hero';
import ProjectCard from '@/components/project-card';
import ShapeDivider from '@/components/shape-divider';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/hooks/use-theme';
import useWindowSize from '@/hooks/use-window-size';
import { projects, technologies } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Variants, motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';

interface HomeProps {}

const staggerVariants: Variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const childVariants: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      x: { stiffness: 1000, velocity: -100 },
    },
    dur: 2,
  },
  closed: {
    x: '100%',
    opacity: 0,
    transition: {
      x: { stiffness: 1000 },
    },
  },
};

const Home: React.FC<HomeProps> = () => {
  const { theme } = useTheme();
  const [x] = useWindowSize();
  const featuredProjects = projects.filter((project) => project.featured);

  const imageTheme =
    theme === 'dark'
      ? 'dark'
      : theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  return (
    <div className="">
      <HeroSection />

      <section className="max-w-screen-2xl mx-auto px-5 py-10">
        <h2 className="text-4xl font-dela text-center tracking-wide bg-accent2-300/60 text-emerald-500 w-fit mx-auto rounded-lg px-5 py-3 mb-40">
          Technologies
        </h2>
        <motion.div
          variants={staggerVariants}
          initial={'closed'}
          whileInView={'open'}
          className="grid grid-cols-2 px-6 md:grid-cols-4 lg:grid-cols-6 my-20 gap-6 max-w-7xl mx-auto font-semibold text-xl  text-white/90"
        >
          {technologies.map((tech) => (
            <motion.div
              variants={childVariants}
              key={tech.name}
              className=" bg-accent2-900/80 flex justify-center items-center gap-3 px-2 py-2 rounded-md"
            >
              <img
                width={40}
                height={40}
                className="h-10 w-10 object-contain drop-shadow-[0px_0px_1px_#ffffff22]"
                src={tech.icon}
                alt={tech.name + ' Icon'}
              />
              <span>{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section
        id="featured-projects"
        className="px-5 py-10 pt-40 relative bg-gradient-to-br from-accent2-500 from-0% via-accent2-400 via-30% to-blue-600 to-100%"
      >
        <ShapeDivider
          side="top"
          height={143}
          width={1.2}
          type="wave-opacity"
          color="hsl(var(--background))"
        />
        <h2 className="text-4xl text-center mb-40 font-dela tracking-wide bg-accent2-300/60 text-emerald-400 w-fit mx-auto rounded-lg px-5 py-3">
          Featured Projects
        </h2>
        <div className="lg:space-y-40">
          {featuredProjects.map((project, i) => {
            const inverted = i % 2 === 0;
            return (
              <div
                className={cn(
                  'grid lg:grid-rows-[600px] grid-cols-1 lg:grid-cols-2 relative max-w-[1720px] mx-auto  mb-20 px-6 gap-8',
                  project.description ? 'grid-rows-[200px,400px]' : 'grid-rows-[200px,400px]',
                )}
              >
                <motion.div
                  initial={{ opacity: 0, translateX: inverted ? '100%' : '-100%' }}
                  whileInView={{ opacity: 1, translateX: '0%' }}
                  transition={{ duration: 1, bounce: 0.5, ease: 'linear' }}
                  className={cn(
                    'absolute rounded-xl overflow-hidden shadow-md top-0 w-[120%] blur-[3px] hover:blur-0 focus:blur-0  transition-all duration-300',
                    inverted ? 'right-0' : 'left-0',
                  )}
                  style={
                    inverted
                      ? x < 1024
                        ? { gridColumn: '1 / 2', gridRow: '1 / 2' }
                        : { gridColumn: '2 / 3', gridRow: '1 / 2' }
                      : { gridColumn: '1 / 2', gridRow: '1 / 2' }
                  }
                >
                  <img
                    alt={project.title + ' Project Example'}
                    src={imageTheme === 'light' ? project.image_light : project.image_dark}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: inverted ? '-50%' : '50%' }}
                  whileInView={{ opacity: 1, x: '0%' }}
                  transition={{ duration: 1, bounce: 0.5 }}
                  className={cn(
                    'shadow-2xl bg-background shadow-black/40 rounded-xl overflow-hidden absolute bottom-0  h-full lg:h-auto lg:w-[120%] ',
                    inverted ? 'left-0' : 'right-0',
                  )}
                  style={
                    !inverted
                      ? x < 1024
                        ? { gridColumn: '1 / 2', gridRow: '2 / 3' }
                        : { gridColumn: '2 / 3', gridRow: '1 / 2' }
                      : { gridColumn: '1 / 2', gridRow: '2 / 2' }
                  }
                >
                  <ProjectCard {...project} />
                </motion.div>
              </div>
            );
          })}
        </div>

        <div className="py-40 flex justify-center items-center">
          <Button
            asChild
            size={'lg'}
            className="text-3xl text-center font-dela py-8 hover:bg-emerald-200 focus:bg-emerald-200 bg-emerald-300 text-accent2-600 shadow-lg"
          >
            <Link to={'/projects'}>More Projects...</Link>
          </Button>
        </div>

        <ShapeDivider
          side="bottom"
          height={128}
          width={1}
          type="tilt"
          flip
          color="hsl(var(--background))"
        />
        <ShapeDivider
          side="bottom"
          height={118}
          width={1}
          type="tilt"
          color="hsl(var(--background))"
        />
      </section>
    </div>
  );
};

export default Home;
