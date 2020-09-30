const config = {
  siteTitle: 'Chetan Godhani',
  siteTitleShort: 'Chetan',
  siteTitleAlt: 'Chetan Godhani',
  siteLogo: '/logos/logo.png',
  siteUrl: 'https://chetangodhani.com',
  repo: 'https://github.com/chetan8300/chetangodhani.com',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription: 'Hi I\'m Chetan, a Web Developer from Ahmedabad, India. Working on technologies like PHP, Laravel, Node.JS, React.JS, etc.',
  siteRss: '/rss.xml',
  googleAnalyticsID: 'UA-179307873-1',
  disqusShortname: 'chetangodhani',
  postDefaultCategoryID: 'Tech',
  userName: 'chetangodhani',
  userEmail: 'chetangodhani9@gmail.com',
  userTwitter: 'cdgodhani',
  userLocation: 'Ahmedabad, IN',
  userAvatar: 'https://www.gravatar.com/avatar/72d1a6cdbdfbe17b98b6510e908683c9?s=500',
  userDescription: 'Hi I\'m Chetan, a Web Developer from Ahmedabad, India. Working on technologies like PHP, Laravel, Node.JS, React.JS, etc.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Now',
      link: '/now/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
