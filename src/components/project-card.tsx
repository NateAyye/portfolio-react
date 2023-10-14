import { useTheme } from '@/hooks/use-theme';
import { Project } from '@/lib/constants';
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

interface ProjectCardProps extends Project {}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  links,
  description,
  image_dark,
  image_light,
}) => {
  const { theme } = useTheme();
  const descriptionRef = React.useRef<HTMLDivElement>(null);
  const [descriptionHeight, setDescriptionHeight] = React.useState<number>(0);

  const imageTheme =
    theme === 'dark'
      ? 'dark'
      : theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

  React.useEffect(() => {
    if (descriptionRef.current) {
      setDescriptionHeight(descriptionRef.current.offsetHeight);
    }
  }, []);

  return (
    <section className="relative h-full" style={{ paddingBottom: `${descriptionHeight / 2}px` }}>
      <img
        alt={title + ' Project Example'}
        src={imageTheme === 'light' ? image_light : image_dark}
        className=" rounded-xl"
      />
      <div className=" absolute z-50 bottom-0 w-full bg-background">
        <div ref={descriptionRef} className="relative px-5 py-2 shadow-[0_-10px_10px_-5px_#0003]">
          <div className="absolute bottom-full left-0 w-4 h-4 bg-[radial-gradient(circle_at_100%_0%,_transparent_16px,_hsl(var(--background))_16px)]"></div>
          <div className="absolute bottom-full right-0 w-4 h-4 bg-[radial-gradient(circle_at_0%_0%,_transparent_16px,_hsl(var(--background))_16px)]"></div>
          <h3 className="text-2xl">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {description.split(' ').slice(0, 20).join(' ') + '...'}
          </p>
          <div>
            {links.map((link) => (
              <Button key={link.label} variant={'link'} asChild>
                <Link to={link.url} className="font-bold">
                  <b className="text-emerald-900">//</b>&nbsp;{link.label}&nbsp;
                  {link.icon}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectCard;
