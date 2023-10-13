import { useAppContext } from '@/context/use-context';
import React from 'react';

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = () => {
  const { headerHeight } = useAppContext();
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ paddingTop: `${headerHeight}px`, background: 'url(images/herobg.png)' }}
    >
      <section className="text-center space-y-6">
        <header>
          <h1 className="text-8xl font-dela">404</h1>
          <p className="text-4xl font-dela">Page Not Found</p>
        </header>
        <div>
          <p className="text-xl font-dela">Try going back to the</p>
          <a href="/" className="text-xl text-emerald-300 font-dela underline">
            &larr; Homepage
          </a>
        </div>
      </section>
    </div>
  );
};

export default NotFound;
