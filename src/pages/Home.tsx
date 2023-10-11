import HeroSection from '@/components/hero';
import { technologies } from '@/lib/constants';
import { motion, Variants } from 'framer-motion';
import React from 'react';

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
  return (
    <div className="">
      <HeroSection />
      <section className="max-w-screen-2xl mx-auto px-5 py-10">
        <h2 className="text-4xl font-dela tracking-wide bg-accent2-300/60 text-emerald-400 w-fit mx-auto rounded-lg px-5 py-3">
          Technologies
        </h2>
        <motion.div
          variants={staggerVariants}
          initial={'closed'}
          whileInView={'open'}
          className="grid grid-cols-2 px-6 md:grid-cols-4 lg:grid-cols-6 my-20 gap-6 max-w-7xl mx-auto font-semibold text-xl text-white/90"
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
    </div>
  );
};

export default Home;
