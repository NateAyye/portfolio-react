import ShapeDivider from '@/components/shape-divider';
import { Button } from '@/components/ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { useAppContext } from '@/context/use-context';
import { useTheme } from '@/hooks/use-theme';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';

import heroAnimation from '@/assets/DevAtWork.gif';
import heroBg from '@/assets/herobg.png';

import React from 'react';

interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const { theme } = useTheme();
  const { headerHeight } = useAppContext();

  const bgOverlayColor =
    theme === 'dark'
      ? 'rgba(0, 0, 0, 0.1)'
      : theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'rgba(0, 0, 0, 0.1)'
      : 'rgba(255, 255, 255, 0.2)';

  return (
    <div
      style={{
        position: 'relative',
        paddingTop: `${headerHeight}px`,
        backgroundImage: `linear-gradient(${bgOverlayColor}, ${bgOverlayColor}), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: `100vh`,
      }}
    >
      <section className="text-white max-w-screen-3xl mx-auto py-20 px-10 grid place-items-center grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: '-100%' }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <small className="text-lg font-semibold bg-accent2-300/40 px-3 py-1.5 rounded-lg">
            👋 Hi, my name is <b>Nathan Cuevas</b>
          </small>
          <h1 className="text-3xl lg:text-5xl font-bold leading-[1.5em]">
            I am a{' '}
            <span className="font-dela text-emerald-300 drop-shadow-md text-4xl lg:text-6xl tracking-wider">
              Full-Stack
            </span>{' '}
            web developer with a passion for learning and building things.
          </h1>
          <p className="text-sm lg:text-base font-medium opacity-80">
            I am a Bootcamp graduate that has been self learning going on 2 years now in software
            development. I am currently working in React and Next.js, but I'm always looking to
            learn new things and add to my skillset.
          </p>
          <div>
            <Button
              asChild
              variant={'link'}
              className="text-background/80 decoration-2 decoration-emerald-400 underline-offset-8 text-lg"
            >
              <a href="/about">
                <b className="text-emerald-400">//</b>&nbsp;Contact Me
              </a>
            </Button>
            <Button
              asChild
              variant={'link'}
              className="text-background/80 decoration-2 decoration-emerald-400 underline-offset-8 text-lg"
            >
              <a href="#featured-projects">
                <b className="text-emerald-400">//</b>&nbsp;Featured Projects
              </a>
            </Button>
          </div>
        </motion.div>
        <div className="relative">
          <motion.img
            initial={{ opacity: 0, x: '100%' }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            alt="developer at work"
            src={heroAnimation}
            width={500}
            height={500}
          />
          <HoverCard>
            <HoverCardTrigger asChild>
              <Button
                variant={'link'}
                size={'icon'}
                aria-labelledby="image-info-label"
                className="absolute right-1 bottom-1 cursor-pointer opacity-70 hover:text-white transition-colors duration-300"
              >
                <span id="image-info-label" className="sr-only">
                  More Info
                </span>
                <InfoCircledIcon className="w-5 h-5" />
              </Button>
            </HoverCardTrigger>
            <HoverCardContent side="top" className="shadow-lg">
              <p>
                <a
                  className="text-accent2 hover:underline focus:underline underline-offset-2 decoration-1"
                  href="https://www.freepik.com/free-vector/programming-concept-illustration_7118756.htm#query=software%20engineer&position=7&from_view=keyword&track=ais"
                >
                  Image by storyset
                </a>{' '}
                on Freepik
              </p>
              <br />
              <p>
                Animated Using{' '}
                <a
                  className="text-accent2 hover:underline focus:underline underline-offset-2 decoration-1"
                  href="https://helpx.adobe.com/animate/get-started.html"
                >
                  Adobe Animate
                </a>
              </p>
            </HoverCardContent>
          </HoverCard>
        </div>
      </section>
      <ShapeDivider type="wave-opacity" side="bottom" height={84} width={1.04} />
    </div>
  );
};

export default HeroSection;
