import { footerLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { EnvelopeClosedIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Link } from 'react-router-dom';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {footerLinks.map((link) => (
          <Link
            className={cn(
              'bg-gray-500 text-4xl font-dela text-white/80 font-bold flex justify-center items-center gap-5 py-6 px-3',
              link.bg,
            )}
            to={link.url}
          >
            {link.icon} {link.label}
          </Link>
        ))}
      </div>
      <Link
        to="mailto:nathanacuevas97@gmail.com"
        className="flex bg-emerald-400 hover:bg-emerald-500 focus:bg-emerald-500 text-xl font-semibold justify-center items-center gap-4 hover:text-2xl hover:font-bold py-4 focus:text-2xl focus:font-bold"
      >
        <EnvelopeClosedIcon className="w-6 h-6" />
        <p>Send Me an Email</p>
      </Link>
      <div className="flex bg-emerald-400 text-xl font-semibold justify-center items-center">
        <p className="text-center  py-4">
          Made with{' '}
          <span className="animate-pulse" role="img" aria-label="love">
            ❤️
          </span>{' '}
          by Nathan Cuevas
        </p>
        <p className=" text-center py-4">&nbsp;&copy; {new Date().getFullYear()}</p>
        <span></span>
      </div>
    </footer>
  );
};

export default Footer;
