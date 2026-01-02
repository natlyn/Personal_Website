import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/Personal_Website/__docusaurus/debug',
    component: ComponentCreator('/Personal_Website/__docusaurus/debug', 'f92'),
    exact: true
  },
  {
    path: '/Personal_Website/__docusaurus/debug/config',
    component: ComponentCreator('/Personal_Website/__docusaurus/debug/config', 'd9b'),
    exact: true
  },
  {
    path: '/Personal_Website/__docusaurus/debug/content',
    component: ComponentCreator('/Personal_Website/__docusaurus/debug/content', '5a8'),
    exact: true
  },
  {
    path: '/Personal_Website/__docusaurus/debug/globalData',
    component: ComponentCreator('/Personal_Website/__docusaurus/debug/globalData', '909'),
    exact: true
  },
  {
    path: '/Personal_Website/__docusaurus/debug/metadata',
    component: ComponentCreator('/Personal_Website/__docusaurus/debug/metadata', 'ccc'),
    exact: true
  },
  {
    path: '/Personal_Website/__docusaurus/debug/registry',
    component: ComponentCreator('/Personal_Website/__docusaurus/debug/registry', '303'),
    exact: true
  },
  {
    path: '/Personal_Website/__docusaurus/debug/routes',
    component: ComponentCreator('/Personal_Website/__docusaurus/debug/routes', '861'),
    exact: true
  },
  {
    path: '/Personal_Website/',
    component: ComponentCreator('/Personal_Website/', '209'),
    routes: [
      {
        path: '/Personal_Website/',
        component: ComponentCreator('/Personal_Website/', '81c'),
        routes: [
          {
            path: '/Personal_Website/',
            component: ComponentCreator('/Personal_Website/', '442'),
            routes: [
              {
                path: '/Personal_Website/port1',
                component: ComponentCreator('/Personal_Website/port1', 'b21'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Personal_Website/portfolio',
                component: ComponentCreator('/Personal_Website/portfolio', '25b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Personal_Website/projects',
                component: ComponentCreator('/Personal_Website/projects', '7b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Personal_Website/prompts',
                component: ComponentCreator('/Personal_Website/prompts', '30e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Personal_Website/',
                component: ComponentCreator('/Personal_Website/', 'a5a'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
