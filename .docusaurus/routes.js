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
    path: '/Personal_Website/docs',
    component: ComponentCreator('/Personal_Website/docs', '867'),
    routes: [
      {
        path: '/Personal_Website/docs',
        component: ComponentCreator('/Personal_Website/docs', 'da4'),
        routes: [
          {
            path: '/Personal_Website/docs',
            component: ComponentCreator('/Personal_Website/docs', 'ce7'),
            routes: [
              {
                path: '/Personal_Website/docs/intro',
                component: ComponentCreator('/Personal_Website/docs/intro', 'df8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/Personal_Website/docs/projects',
                component: ComponentCreator('/Personal_Website/docs/projects', '1da'),
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
    path: '/Personal_Website/',
    component: ComponentCreator('/Personal_Website/', '0b9'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
