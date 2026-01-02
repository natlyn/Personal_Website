const config = {
  title: 'Standard Portfolio',
  tagline: 'A clean, modern personal portfolio',
  // Docusaurus expects `url` to be the site root (protocol + domain) without a path
  url: 'https://natlyn.github.io',
  // set baseUrl to the repository name if deploying to GitHub Pages, or '/' for root
  baseUrl: '/Personal_Website/',
  organizationName: 'natlyn',
  projectName: 'Personal_Website',
  deploymentBranch: 'main',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/main_image.png',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebar.js'),
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'Standard Portfolio',
      logo: {
        alt: 'Site Logo',
        src: 'img/main_image.png',
      },
        items: [
        // Link to docs by doc id (uses your docs plugin)
        { to: '/', label: 'Home', position: 'left' },
        { to: '/projects', label: 'Projects', position: 'left' },
        { to: '/', label: 'About Me', position: 'left' },
        { to: '/port1', label: 'Tic-Tac-Toe', position: 'left' },
        // Prompts page linking to external prompt files
        { type: 'doc', docId: 'prompts', position: 'left', label: 'Prompts' },
        // external link to your GitHub repo (adjust if repo name differs)
        { href: 'https://github.com/natlyn/Personal_Website', label: 'GitHub', position: 'right' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
            items: [
            { label: 'Home', to: '/' },
            { label: 'Projects', to: '/projects' },
            { label: 'About Me', to: '/' },
            { label: 'Prompts', to: '/prompts' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/natlyn/Personal_Website' },
          ],
        },
      ],
    },
  },
};

module.exports = config;
