import Layout from '../components/layout';

const Project = (props) => (
  <Layout>
    <div className='container project-container'>
      <h1 className='title'>Projects</h1>
      {props.projects.map((project) => {
        return (<ProjectCard project={project} key={project.url}></ProjectCard>);
      })}
      <a className='view-all-link' href='https://github.com/abhiomkar'>
        View All <span className='view-all-icon'>&#8250;</span>
      </a>
    </div>
  </Layout>
);

const ProjectCard = (props) => (
  <div className='item'>
    <a className='item-body' href={props.project.url}>
      <div className='item-name'>
        {props.project.name}
      </div>
      <div className='item-description'>
        {props.project.description}
      </div>
    </a>
    <div className='item-footer'>
      {props.project.homepage && (<a className='item-action-button' href={props.project.homepage}>Go to App</a>)}
      <a className='item-action-button' href={props.project.url}>Source code</a>
    </div>
  </div>
);

const projectList = [{
    url: 'https://github.com/abhiomkar/chessboard-io',
    description: 'Chessboard Multiplayer',
    name: 'chessboard-io',
  },
  {
    url: 'https://github.com/abhiomkar/pip-save',
    description: 'bringing npm like behavior to pip including init & save',
    name: 'pip-save',
    homepage: 'http://abhiomkar.github.io/pip-save/',
  },
  {
    url: 'https://github.com/abhiomkar/whois-home',
    description: 'Get a push notification on your iPhone/Android when ' +
        'someone enters or leaves your home.',
    name: 'whois-home',
  },
  {
    url: 'https://github.com/abhiomkar/raspberrypi-mac',
    description: 'Setup RaspberryPi on Mac',
    name: 'raspberrypi-mac',
  },
  {
    url: 'https://github.com/abhiomkar/save-martian',
    description: 'Communicate with astronaut Mark Watney - The Martian ' +
        'using hexadecimal system with Pathfinder. from NASA.',
    name: 'save-martian',
    homepage: 'http://abhiomkar.github.io/save-martian/',
  },
  {
    url: 'https://github.com/abhiomkar/Minimality',
    description: 'Minimal wordpress theme for real programmers & hackers.',
    name: 'Minimality',
  },
  {
    url: 'https://github.com/abhiomkar/good-quotes',
    description: 'Google Chrome Extension to replace new tab with ' +
        'inspirational quotes.',
    name: 'good-quotes',
    homepage: 'http://bit.ly/chrome-good-quotes',
  },
  {
    url: 'https://github.com/abhiomkar/pingpong-app',
    description: 'Pingpong game with Phaser.js',
    name: 'pingpong-app',
    homepage: 'http://abhiomkar.github.io/pingpong-app/',
  },
  {
    url: 'https://github.com/abhiomkar/portfoliojs',
    description: 'jQuery plugin for your beautiful portfolio images with ' +
        'horizontal scrolling',
    name: 'portfoliojs',
    homepage: 'http://portfoliojs.com/',
  },
];

export default () => (<Project projects={projectList} />);
