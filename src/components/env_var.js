export default {
  projects: [
  {
    name: 'Music Moods & COVID-19',
    img: 'musicmood.gif',
    description: `Interactive data visualization exploring the relationship between early COVID-19 pandemic events and music streaming trends`,
    link: 'https://observablehq.com/@rjs97/music-moods-covid-19/2',
    tech: [
      { name: 'D3.js', type: 'js' },
      { name: 'Spotify API', type: 'api', img: 'spotify.png' },
    ]
  },
  {
    name: 'Cotton Eyed Joe',
    img: 'cej.gif',
    description: `Web app and extension to collect and display data about musical artists' influence and collaboration (WORK IN PROGRESS)`,
    link: '#',
    code: 'https://github.com/rjs97/musicmap',
    tech: [
      { name: 'D3.js', type: 'js' },
      { name: 'React.js', type: 'js' },
      { name: 'Node.js', type: 'js' },
      { name: 'Spotify API', type: 'api', img: 'spotify.png' },
      { name:  'MongoDB', type: 'db'},
      { name:  'Google Firebase', type: 'cloud' },
    ]
  },
  {
    name: 'Artist Portfolio',
    img: 'ciara.gif',
    description: `Portfolio website exhibiting the artist's paintings and past experience (designed, coded, and hosted by me)`,
    link: 'https://www.ciarapost.com',
    code: 'https://github.com/rjs97/ciara-portfolio',
    tech: [
      { name: 'React.js', type: 'js' },
      { name: 'Node.js', type: 'js' },
      { name:  'Google Firebase', type: 'cloud' },
    ]
  },
  {
    name: 'Yup.io',
    img: 'yup.gif',
    description: `Working as a software engineer at a blockchain startup building a social consensus layer for the internet`,
    link: 'https://yup.io',
    tech: [
      { name: 'React.js', type: 'js' },
      { name: 'Vue.js', type: 'js' },
      { name: 'Node.js', type: 'js' },
      { name: 'Twitter API', type: 'api', img: 'twitter.png' },
      { name:  'MongoDB', type: 'db'},
      { name: 'C++', type: 'other' }
    ]
  },
  {
    name: 'ListPlay',
    img: 'listplay.png',
    description: `First JavaScript project, creating a feature for radio station DJs to log their playlists from Spotify and identify frequently played artists`,
    link: 'https://github.com/rjs97/ListPlay',
    code: 'https://github.com/rjs97/ListPlay',
    tech: [
      { name: 'Bootstrap', type: 'js' },
      { name: 'jQuery', type: 'js' },
      { name: 'Node.js', type: 'js' },
      { name: 'Spotify API', type: 'api', img: 'spotify.png' },
      { name:  'Digital Ocean', type: 'cloud' },
    ]
  },
  {
    name: 'Memetown Marketplace',
    img: 'memetown.gif',
    link: 'https://github.com/rjs97/memetown',
    code: 'https://github.com/rjs97/memetown',
    description: `First ever web app! Recreation of columbia buy/sell memes but in a website marketplace`,
    tech: [
      { name: 'Bootstrap', type: 'js' },
      { name: 'Flask', type: 'other' },
    ]
  }]
}
