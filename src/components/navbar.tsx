import { useAppContext } from '@/context/use-context';
import useScroll from '@/hooks/use-scroll';
import { navbarLinks } from '@/lib/constants';
import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ModeToggle } from './mode-toggle';
import { Button } from './ui/button';

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const { setHeaderHeight } = useAppContext();
  const location = useLocation();
  const { direction, position } = useScroll(20);
  const headerRef = React.useRef<HTMLHeadElement>(null);

  useEffect(() => {
    if (!headerRef.current) return;
    setHeaderHeight(headerRef.current.getBoundingClientRect().height);
  }, [setHeaderHeight]);

  return (
    <header
      ref={headerRef}
      className={cn(
        'fixed z-50 w-full transition-transform duration-300 ease-in-out',
        direction === 'down' ? '-translate-y-full' : 'translate-y-0',
      )}
    >
      <a
        href="#main-content"
        className="absolute opacity-0 focus:opacity-100 -top-full w-full bg-accent2-400 pointer-events-none focus:pointer-events-auto select-none py-2 text-center text-2xl font-bold text-emerald-200 focus:top-full"
      >
        Skip to main content
      </a>
      <div
        className={cn(
          'max-w-screen-3xl mx-auto flex items-center rounded-lg gap-3 px-3 py-2 transition-all duration-300 ease-in-out delay-150',
          position === 0 ? '' : 'mt-2 bg-background/70  shadow-sm backdrop-blur-[1px]',
        )}
      >
        <nav
          id="primary-navigation"
          aria-labelledby="primary-navigation-label"
          className="flex flex-1 justify-between items-center"
        >
          <span id="primary-navigation-label" className="sr-only">
            Primary Navigation
          </span>
          <Link
            to={'/'}
            aria-labelledby="go-home-link"
            className="group/logo flex justify-center items-center gap-4"
          >
            <span id="go-home-link" className="sr-only">
              Go to Home
            </span>
            <img
              src="https://github.com/NateAyye.png"
              alt=""
              className="rounded-full "
              height={70}
              width={70}
            />
            <span className="text-4xl tracking-tight font-bold font-sans group-hover/logo:underline decoration-2 underline-offset-2">
              Nathan Cuevas
            </span>
          </Link>
          <ul className="flex gap-3">
            {navbarLinks.map((link) => (
              <li key={link.name}>
                <Button
                  asChild
                  variant={'link'}
                  className={cn(
                    'text-foreground/80 decoration-2 decoration-emerald-400 underline-offset-4 text-lg',
                    location.pathname === link.href && 'bg-muted-foreground/40',
                  )}
                >
                  <Link to={link.href}>
                    <b className="text-emerald-400">//</b>&nbsp;{link.name}
                  </Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <ModeToggle />
      </div>
    </header>
  );
};

export default Navbar;
