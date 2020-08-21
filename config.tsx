import React from 'react'
import { IconPrefix, IconName } from '@fortawesome/fontawesome-svg-core'

export const colors = {
  red: '#944654',
  black: '#020202',
  beige: '#F7F4EA',
  white: '#FFFFFF',
  gray: '#9DA2AB',
  blue1: '#8EB8E5',
  blue2: '#7C99B4',
}

export const metaTags = {
  home: [
    <title key="title">Evan Ruby | Full Stack Web Developer</title>,
    <meta
      key="description"
      name="description"
      content={`What do a technologist with a knack for solving problems,
        a lover of open source software, and an electronic music junkie have in common?.
        They all refer to Evan Ruby, a Detroit-based web developer.`}
    />,
    <meta key="og-title" property="og:title" content="Evan Ruby | Full Stack Web Developer" />,
    <meta key="og-type" property="og:type" content="website" />,
    <meta key="og-image" property="og:image" content="https://evanruby.io/images/nevada-falls-selfie.jpg" />,
    <meta key="og-url" property="og:url" content="https://evanruby.io" />,
  ],
  skills: [
    <title key="title">Evan Ruby | Developer Skills</title>,
    <meta
      key="description"
      name="description"
      content={`I have a very particular set of skills.
        Skills I have acquired over about 3 years.
        Skills that make me a great developer of software.
        If you get in touch with me, that could be the start of something great.`}
    />,
    <meta key="og-title" property="og:title" content="Evan Ruby | Developer Skills" />,
    <meta key="og-type" property="og:type" content="website" />,
    <meta key="og-image" property="og:image" content="https://evanruby.io/images/nevada-falls-selfie.jpg" />,
    <meta key="og-url" property="og:url" content="https://evanruby.io/developer-skills" />,
  ],
  experience: [
    <title key="title">Evan Ruby | Work Experience</title>,
    <meta
      key="description"
      name="description"
      content={`Leading up to being Full Stack Developer at Bedrock Detroit,
        I had the pleasure of spending 3 consecutive summers as an intern for RocketLoans,
        I have been part of the Rock Family of Companies for approximately 4 years.`}
    />,
    <meta key="og-title" property="og:title" content="Evan Ruby | Work Experience" />,
    <meta key="og-type" property="og:type" content="website" />,
    <meta key="og-image" property="og:image" content="https://evanruby.io/images/nevada-falls-selfie.jpg" />,
    <meta key="og-url" property="og:url" content="https://evanruby.io/work-experience" />,
  ],
}

export const navItems = [
  {
    displayText: 'Developer Skills',
    href: '/developer-skills',
  },
  {
    displayText: 'Work Experience',
    href: '/work-experience',
  },
]

export const facts = [
  `I was born and raised in West Bloomfield, MI, a suburb outside the city of Detroit.
  In May 2017, I graduated from Michigan State University with a major in Advertising and a minor in Computer Science.
  Now, I am happily working downtown at Bedrock Detroit.`,
  `Outside of the office, I spend most of my time honing my skills as an electronic music producer and DJ.
  I also enjoy attending music festivals, my favorites are Movement Music Festival and Electric Forest.
  Depending on the weather, I'm always game for kayaking, hiking, or snowboarding`,
  "Fun fact, I once solved a Rubik's Cube in under 30 seconds.",
]

interface Skill {
  prefixClass?: IconPrefix
  iconClass: IconName
  name: string
  brandColor: string
  stars: string[]
  addHalf?: boolean
}

interface SkillGroup {
  groupName: string
  skills: Skill[]
}

export const skillGroups: SkillGroup[] = [
  {
    groupName: 'Front-End',
    skills: [
      {
        iconClass: 'react',
        name: 'React',
        brandColor: '#00d8ff',
        stars: ['*', '*', '*', '*', '*'],
      },
      {
        iconClass: 'vuejs',
        name: 'Vue',
        brandColor: '#42b883',
        stars: ['*', '*', '*', '*'],
      },
      {
        iconClass: 'angular',
        name: 'Angular',
        brandColor: '#b52e31',
        stars: ['*', '*', '*'],
      },
    ],
  },
  {
    groupName: 'Back-End',
    skills: [
      {
        iconClass: 'node-js',
        name: 'Node',
        brandColor: '#44883e',
        stars: ['*', '*', '*', '*'],
        addHalf: true,
      },
      {
        iconClass: 'python',
        name: 'Python',
        brandColor: '#ffde57',
        stars: ['*', '*', '*'],
      },
      {
        iconClass: 'php',
        name: 'PHP',
        brandColor: '#8892be',
        stars: ['*', '*', '*'],
      },
    ],
  },
  {
    groupName: 'Other Tech',
    skills: [
      {
        iconClass: 'amazon',
        name: 'AWS',
        brandColor: '#ff9900',
        stars: ['*', '*', '*', '*'],
        addHalf: true,
      },
      {
        iconClass: 'wordpress',
        name: 'WordPress',
        brandColor: '#21759b',
        stars: ['*', '*', '*'],
        addHalf: true,
      },
      {
        iconClass: 'docker',
        name: 'Docker',
        brandColor: '#0db7ed',
        stars: ['*', '*', '*'],
      },
    ],
  },
  {
    groupName: 'Soft',
    skills: [
      {
        prefixClass: 'far',
        iconClass: 'stopwatch',
        name: 'Time Management',
        brandColor: colors.gray,
        stars: ['*', '*', '*', '*', '*'],
      },
      {
        prefixClass: 'fas',
        iconClass: 'question-circle',
        name: 'Problem Solving',
        brandColor: colors.red,
        stars: ['*', '*', '*', '*', '*'],
      },
      {
        prefixClass: 'far',
        iconClass: 'hand-paper',
        name: 'Accountability',
        brandColor: colors.blue1,
        stars: ['*', '*', '*', '*', '*'],
      },
    ],
  },
]

export const positionsHeld = [
  {
    titles: [
      {
        name: 'Full Stack Developer',
        fromDate: new Date(2017, 8),
        toDate: null,
        accomplishments: [
          "Designing and implementing robust APIs to be used across Bedrock's digital portfolio",
          'Creating a shared and scalable component library for optimal developer experience',
          'Concurrently developing and maintaining 15+ websites',
          "Migrating Bedrock's digital portfolio onto Amazon Web Services",
          "Developing standard procedures for Bedrock's DevOps process",
          'Working with business stakeholders to identify their needs',
          'Leveraging technology to creatively solve business problems',
        ],
      },
    ],
    company: {
      name: 'Bedrock Detroit',
      logo: 'bedrock-mark.svg',
    },
  },
  {
    titles: [
      {
        name: 'Software Engineering Intern',
        fromDate: new Date(2017, 4),
        toDate: new Date(2017, 5),
        accomplishments: [
          'Designed and implemented a user and role management user interface for the admin web application',
        ],
      },
      {
        name: 'Software Engineering Intern',
        fromDate: new Date(2016, 4),
        toDate: new Date(2016, 7),
        accomplishments: [
          'Made various contributions to the front-end codebase, written in AngularJS',
          'Gave presentation to fellow interns about algorithmic thinking, and the basics of HTML and JavaScript',
        ],
      },
      {
        name: 'Application Ops Intern',
        fromDate: new Date(2015, 4),
        toDate: new Date(2015, 7),
        accomplishments: [
          'Wrote end-to-end tests using Selenium/Protractor',
          'Wrote data-driven JMeter script for load testing',
        ],
      },
    ],
    company: {
      name: 'RocketLoans',
      logo: 'rocket-loans.jpg',
    },
  },
]
