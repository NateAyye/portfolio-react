import { CardStackIcon, GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons';

import figmaIcon from '@/assets/icons/figma.svg';
import githubIcon from '@/assets/icons/github.svg';
import javascriptIcon from '@/assets/icons/javascript.svg';
import jestIcon from '@/assets/icons/jest.svg';
import mongoIcon from '@/assets/icons/mongodb.svg';
import nodeIcon from '@/assets/icons/node.svg';
import notionIcon from '@/assets/icons/notion.svg';
import npmIcon from '@/assets/icons/npm.svg';
import reactIcon from '@/assets/icons/react.svg';
import sassIcon from '@/assets/icons/sass.svg';
import typescriptIcon from '@/assets/icons/typescript.svg';
import webpackIcon from '@/assets/icons/webpack.svg';
import youtubeIcon from '@/assets/icons/youtube.svg';

import backendApi from '@/assets/projects/backend_api.png';
import backendApiLight from '@/assets/projects/backend_api_2.png';
import designDepo from '@/assets/projects/design-depo.png';
import designDepoLight from '@/assets/projects/design-depo_light.png';
import githubTheme from '@/assets/projects/githubTheme_1.png';
import githubThemeLight from '@/assets/projects/githubTheme_2.png';
import textEditor from '@/assets/projects/textEditor_1.png';
import textEditorLight from '@/assets/projects/textEditor_2.png';
import weatherForcast from '@/assets/projects/weather_forcast_1.png';
import weatherForcastLight from '@/assets/projects/weather_forcast_2.png';

export const navbarLinks = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Projects',
    href: '/projects',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export const technologies = [
  {
    name: 'Figma',
    icon: figmaIcon,
  },
  {
    name: 'Github',
    icon: githubIcon,
  },
  {
    name: 'Notion',
    icon: notionIcon,
  },
  {
    name: 'Javascript',
    icon: javascriptIcon,
  },
  {
    name: 'Jest',
    icon: jestIcon,
  },
  {
    name: 'MongoDB',
    icon: mongoIcon,
  },
  {
    name: 'Node',
    icon: nodeIcon,
  },
  {
    name: 'Npm',
    icon: npmIcon,
  },
  {
    name: 'React',
    icon: reactIcon,
  },
  {
    name: 'Sass',
    icon: sassIcon,
  },
  {
    name: 'Typescript',
    icon: typescriptIcon,
  },
  {
    name: 'Webpack',
    icon: webpackIcon,
  },
];

export const tags = [
  'React',
  'Next.js',
  'GraphQL',
  'TypeScript',
  'JavaScript',
  'HTML',
  'CSS',
  'TailwindCSS',
  'Chakra UI',
  'Framer Motion',
  'Node.js',
  'Express',
  'MongoDB',
  'PostgreSQL',
  'Prisma',
  'Supabase',
  'Webpack',
  'VSCode',
  'Theme',
  'DayJS',
  'Firebase',
  'AWS',
  'Vercel',
  'Styled Components',
] as const;

export type Tag = (typeof tags)[number];

export interface Project {
  title: string;
  description: string;
  image_light: string;
  image_dark: string;
  featured: boolean;
  tags: Tag[];
  links: {
    label: string;
    url: string;
    icon?: React.ReactNode | string;
  }[];
}

export const projects: Project[] = [
  {
    title: 'Design Depo',
    featured: true,
    description:
      "Our app offers an extensive repository of hex codes, ensuring that you'll never run out of unique colors and gradients to elevate your projects. With our user-friendly interface, you can organize your creative assets by saving individual hex codes, gradients, and fonts to your personal library.",
    image_dark: designDepo,
    image_light: designDepoLight,
    tags: ['GraphQL', 'React', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    links: [
      {
        label: 'View Code',
        url: 'https://github.com/NateAyye/design-depo',
        icon: <GitHubLogoIcon />,
      },
      {
        label: 'View Presentation',
        url: 'https://docs.google.com/presentation/d/1UPkbYrgesDr5y0rw2TGNBD_pF9-wd9MpsKZNVeAZERo/edit?usp=sharing',
        icon: <CardStackIcon />,
      },
      {
        label: 'Go To Live Site',
        url: 'https://design-depo-50c7f040c26d.herokuapp.com/',
        icon: `→`,
      },
    ],
  },
  {
    title: 'VS Code Dark Theme',
    featured: true,
    description:
      'VSCode Color Theme Based of of the Github Dark Dimmed Token Color Customizations Theme. With some minor tweaks to the colors and some added syntax highlighting.',
    image_dark: githubTheme,
    image_light: githubThemeLight,
    tags: ['VSCode', 'Theme'],
    links: [
      {
        label: 'View Code',
        url: 'https://github.com/NateAyye/custom-github-dark-theme',
        icon: <GitHubLogoIcon />,
      },
      {
        label: 'View Marketplace',
        url: 'https://marketplace.visualstudio.com/items?itemName=NathanCuevas.custom-github-dark-dimmed',
        icon: <CardStackIcon />,
      },
    ],
  },
  {
    title: '5 Day Weather Forecast',
    featured: true,
    description:
      "Using the dayjs library, I was able to create a 5 day forecast that displays the current day's weather and the next 4 days. The app also displays the current time and date. Now If you are traveling or have common places you go. You can look it up with ease and if its saved you can just click on it and it will display the weather for that location.",
    image_dark: weatherForcast,
    image_light: weatherForcastLight,
    tags: ['HTML', 'CSS', 'JavaScript', 'DayJS'],
    links: [
      {
        label: 'View Code',
        url: 'https://github.com/NateAyye/5-day-forecast',
        icon: <GitHubLogoIcon />,
      },
      {
        label: 'Go To Live Site',
        url: 'https://nateayye.github.io/5-day-forecast/',
        icon: `→`,
      },
    ],
  },
  {
    title: 'Local Text Editor',
    featured: false,
    description:
      'A text editor that allows you to save your work locally and save your work, It also has code highlighting to you can take your notes in the color and style that you recognize.',
    image_dark: textEditor,
    image_light: textEditorLight,
    tags: ['HTML', 'CSS', 'JavaScript', 'Webpack', 'Express', 'Node.js'],
    links: [
      {
        label: 'View Code',
        url: 'https://github.com/NateAyye/local-text-editor-pwa',
        icon: <GitHubLogoIcon />,
      },
      {
        label: 'Go To Live Site',
        url: 'https://still-waters-26108-e681736f7556.herokuapp.com/',
        icon: `→`,
      },
    ],
  },
  {
    title: 'Social Media Backend API',
    featured: false,
    description:
      'An Example of a Backend API Built with express and mongodb using mongoose as the ORM. This API is used to create, read, update, and delete posts and users. It also has a like and comment features.',
    image_dark: backendApi,
    image_light: backendApiLight,
    tags: ['JavaScript', 'MongoDB', 'Express', 'Node.js'],
    links: [
      {
        label: 'View Code',
        url: 'https://github.com/NateAyye/new-twitter-api',
        icon: <GitHubLogoIcon />,
      },
    ],
  },
];

export type FooterLink = {
  label: string;
  url: string;
  icon: React.ReactNode | string;
  bg?: string;
};

export const footerLinks: FooterLink[] = [
  {
    label: 'GitHub',
    bg: 'bg-gray-500',
    url: 'https://github.com/NateAyye',
    icon: <GitHubLogoIcon className="w-20 h-20" />,
  },
  {
    label: 'Linked In',
    bg: 'bg-blue-500',
    url: 'https://www.linkedin.com/in/nathan-cuevas/',
    icon: <LinkedInLogoIcon className="w-20 h-20" />,
  },
  {
    label: 'Youtube',
    bg: 'bg-red-500',
    url: 'https://www.youtube.com/@nathancuevas2298',
    icon: <img alt="youtube logo" width={80} height={80} src={youtubeIcon} />,
  },
];
