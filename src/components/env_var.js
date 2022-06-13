export default {
  projects: [
  {
    name: 'wbar.org',
    img: 'wbar.png',
    date: 'March 2020',
    description: `Redesign of the WBAR (Barnard College Radio) website, complete with streaming, archiving, & DJ accounts`,
    link: 'https://wbar.org/',
    code: 'https://github.com/rjs97/wbar',
    tech: [
      { name: 'React', type: 'js' },
      { name: 'Node', type: 'js' },
      { name:  'MongoDB', type: 'db'},
      { name:  'DreamHost', type: 'cloud' },
      { name:  'Icecast', type: 'other' },
    ]
  },
  {
    name: 'Cotton Eyed Joe',
    img: 'cej.gif',
    date: '(work in progress)',
    description: `Web app and Chrome extension to collect and display data about musical artists' influence and collaboration`,
    link: 'https://cotton-eyed-joe.web.app/',
    code: 'https://github.com/rjs97/musicmap',
    tech: [
      { name: 'D3', type: 'js' },
      { name: 'React', type: 'js' },
      { name: 'Node', type: 'js' },
      { name: 'Spotify API', type: 'api', img: 'spotify.png' },
      { name:  'MongoDB', type: 'db'},
      { name:  'Google Firebase', type: 'cloud' },
    ]
  },
  {
    name: 'Artist Portfolio',
    img: 'ciara.gif',
    date: 'August 2020',
    description: `Portfolio website exhibiting the artist's paintings & past experience`,
    link: 'https://www.ciarapost.com',
    code: 'https://github.com/rjs97/ciara-portfolio',
    tech: [
      { name: 'React', type: 'js' },
      { name: 'Node', type: 'js' },
      { name:  'Google Firebase', type: 'cloud' },
    ]
  },
  {
    name: 'Music Moods & COVID-19',
    img: 'musicmood.gif',
    date: 'May 2020',
    description: `Interactive data visualization exploring the relationship between early COVID-19 pandemic events and music streaming trends in the United States`,
    link: 'https://observablehq.com/@rjs97/music-moods-covid-19/2',
    tech: [
      { name: 'D3', type: 'js' },
      { name: 'Spotify API', type: 'api', img: 'spotify.png' },
    ]
  },
  {
    name: 'Yup.io',
    img: 'yup.gif',
    date: 'January 2020 - December 2020',
    description: `Cryptocurrency startup building a social consensus layer for the internet -
      demo above is for a Twitter OAuth feature built and tested for production use`,
    link: 'https://yup.io',
    tech: [
      { name: 'React', type: 'js' },
      { name: 'Vue', type: 'js' },
      { name: 'Node', type: 'js' },
      { name: 'Twitter API', type: 'api', img: 'twitter.png' },
      { name:  'MongoDB', type: 'db'},
      { name: 'C++', type: 'other' }
    ]
  },
  {
    name: 'ListPlay',
    img: 'listplay.png',
    date: 'December 2019',
    description: `First JavaScript project, creating a feature for radio station DJs to log their playlists from Spotify and identify frequently played artists`,
    link: 'https://github.com/rjs97/ListPlay',
    code: 'https://github.com/rjs97/ListPlay',
    tech: [
      { name: 'jQuery', type: 'js' },
      { name: 'Handlebars', type: 'js' },
      { name: 'Node', type: 'js' },
      { name: 'Spotify API', type: 'api', img: 'spotify.png' },
      { name:  'Digital Ocean', type: 'cloud' },
    ]
  },
  {
    name: 'Memetown Marketplace',
    img: 'memetown.gif',
    date: 'October 2019',
    link: 'https://github.com/rjs97/memetown',
    code: 'https://github.com/rjs97/memetown',
    description: `First ever web app! Recreation of columbia buy/sell memes in a website marketplace`,
    tech: [
      { name: 'jQuery', type: 'js' },
      { name: 'Flask', type: 'other' },
    ]
  }]
}
