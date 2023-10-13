import { useAppContext } from '@/context/use-context';
import React from 'react';

interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  const { headerHeight } = useAppContext();
  return (
    <div className="max-w-screen-3xl mx-auto px-4" style={{ paddingTop: `${headerHeight}px` }}>
      <h1 className="text-4xl my-6 text-center font-dela underline underline-offset-8 decoration-4 decoration-emerald-400 ">
        <b className="text-emerald-400">//</b> My Story
      </h1>
      <section>
        <header>
          <h2 className="text-2xl font-bold underline underline-offset-4 decoration-2 decoration-emerald-400">
            <b className="text-emerald-400 ">//</b> My Development Timeline
          </h2>
          <small>
            All my accomplishments from the beginning of my software development journey.
          </small>
        </header>
        <div className="border px-3 py-1.5 rounded-lg grid grid-cols-[]">
          <div>
            <h3>Game Dev</h3>
            <p>
              It all started with the want to make games and get one on a store and watch it
              succeed.
            </p>
          </div>
          <div>
            <h3>Online Courses</h3>
            <p>
              I Needed <b>More</b> Knowledge. So I found Udemy (and online course/learning platform
              for people to learn and post tutorials). This helped a lot but eventually I realized
              the amound of things that needed to be learned to make a good 3D game.
            </p>
          </div>
          <div>
            <h3>Harvard's CS50</h3>
            <p>
              With a lot of knowledge gained mainly in C# and in 3D modeling. I decided I wanted a
              better understanding of how code works and how a computer looks at that code. So I
              decided to go and take the FREE Harvard's online CS50 Course.
            </p>
          </div>
          <div>
            <h3> CS50 Final</h3>
            <p>
              After a great amount of base knowlege gained with how a computer works behind the
              scenes using (c, python, javascript). I had my final project which I decided to make a
              web application for my final project since we had worked with jinja, flask and python
              to make a static site. But I was in for a treat.{' '}
            </p>
          </div>
          <div>
            <h3>What Next...</h3>
            <p>
              After this I Really enjoyed working with javascript, Next.js, React, CSS and HTML. So
              I decided to start the journey of becoming a full stack developer. I started with more
              Udemy since I knew there were some great courses on there.
            </p>
          </div>
          <div>
            <h3>UC Davis Bootcamp</h3>
            <p>
              Once I got a good base knowledge of HTML, CSS and Javascript. I decided to take a
              bootcamp to get a better understanding of how to work with a team and how to work with
              a full stack application. I learned a lot and I am very grateful for the experience.
            </p>
          </div>
          <div>
            <h3>Currently</h3>
            <p>
              Once I got a good base knowledge of HTML, CSS and Javascript. I decided to take a
              bootcamp to get a better understanding of how to work with a team and how to work with
              a full stack application. I learned a lot and I am very grateful for the experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
